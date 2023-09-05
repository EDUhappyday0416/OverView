from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from apiapp.models import ForestInfo
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from django.http import HttpResponse
import mysql.connector


@api_view(['GET', 'POST'])
@csrf_exempt
def insert_forest_data(request):
    response = HttpResponse()
    response.content = b'This is the response'

    # 設置 Cache-Control 標頭
    response['Cache-Control'] = 'max-age=0'
    print('request', request)
    if request.method == 'GET':

        # Base Url
        try:
            url = 'https://recreation.forest.gov.tw/Forest/QueryForest'

            # Set Header response 可有可無
            headers = {'Accept': 'application/json'}

            # dict set
            query = {'Region': '',
                     'Typ': '',
                     'Keyword': '',
                     'Height': '',
                     'IsOpen': '',
                     'Traffic': '',
                     'RT_Status': '',
                     'RT_Hard': '',
                     'RT_Length': '',
                     'RT_Time': '',
                     'sort': '',
                     'PageIndex': '',
                     'PageSize': '36',
                     'topic': ''}
            print('request', request)

            for key in query.keys():
                query[key] = request.GET.get(key, query[key])

            print('query', query)
            # 就是那些下拉參數 可以set new value
            # query['Region'] = region
            # query['Typ'] = ''
            # query['IsOpen'] = ''

            resp = requests.get(url, params=query, headers=headers)
            print('resp', resp)

            response_data = resp.json()  # 从您的源获取response_data对象
            conn = mysql.connector.connect(
                host='localhost',
                user='root',
                password='test',
                database='ForestInfo'
            )
            # 创建游标对象
            cursor = conn.cursor()
            inserted_records = []
            for item in response_data['data']:
                print('item', item)
                id_value = None
                try:
                    id_value = int(item.get('id'))
                except ValueError:
                    pass  # 跳过无法转换为整数的值

                if id_value is not None:
                    admin_name = json.loads('"' + item.get('admin_name') + '"')
                    forest_info = ForestInfo(
                        ID=id_value,
                        AdminName=json.dumps(admin_name, ensure_ascii=False),
                        Name=item.get('name'),
                        OpenText=item.get('open_text'),
                        Photo=item.get('photo'),
                        RegionID=item.get('region_id'),
                        RegionID1=item.get('region_id1'),
                        TypID=item.get('typ_id'),
                        TypName=item.get('typ_name')
                    )
                    forest_info.save()
                    inserted_records.append(forest_info)

            inserted_data = [
                {
                    'ID': record.ID,
                    'AdminName': record.AdminName,
                    'Name': record.Name,
                    'OpenText': record.OpenText,
                    'Photo': record.Photo,
                    'RegionID': record.RegionID,
                    'RegionID1': record.RegionID1,
                    'TypID': record.TypID,
                    'TypName': record.TypName
                }
                for record in inserted_records
            ]
            if inserted_data:
                return JsonResponse({'message': f'{len(inserted_data)} records inserted successfully', 'data': inserted_data, }, status=201)
            else:
                return JsonResponse({'message': 'No records inserted'}, status=400)
        except:
            return JsonResponse({"message": 'Error inserting records'}, status=500)
