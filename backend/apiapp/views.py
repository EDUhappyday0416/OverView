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
from bs4 import BeautifulSoup


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
                forest_info = ForestInfo(
                    ID=id_value,
                    AdminName=item.get('admin_name'),
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


def getMountainData(request):
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }
    base_url = 'https://hiking.biji.co/index.php?q=mountain&act=famous-list&id=1&page='
    mountain_data = []
    totalPage = 7

    try:
        response = requests.get(base_url, headers=headers, timeout=5)

        for i in range(1, totalPage + 1):
            url = f"{base_url}{i}"
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                target_ul = soup.find(
                    'ul', class_='famous-list grid grid-cols-3 gap-4')

                if target_ul:
                    lis = target_ul.find_all(
                        'li', class_='relative rounded overflow-hidden shadow-z2')

                    for li in lis:
                        name = li.find('h2').text.strip(
                        ) if li.find('h2') else None
                        height = li.find('span').text.replace(
                            '標高：', '').strip() if li.find('span') else None
                        location = li.find('div', class_='absolute inset-x-0 bottom-0 text-sm bg-gradient-to-b from-transparent to-black/80 text-white text-shadow p-4 pt-10 space-y-1.5').find_all('div')[
                            1].text.strip() if li.find('div', class_='absolute inset-x-0 bottom-0 text-sm bg-gradient-to-b from-transparent to-black/80 text-white text-shadow p-4 pt-10 space-y-1.5') else None
                        image = li.findAll('img')[0]['src']
                        mountain_data.append({
                            'name': name,
                            'height': height,
                            'location': location,
                            'images': image
                        })

            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to get data'})
        return JsonResponse({'status': 'success', 'data': mountain_data, 'message': f"Successfully fetched data for page {i}"})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)})
