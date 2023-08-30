import requests
import mysql.connector
import json
# Base Url
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
         'PageIndex': '0',
         'PageSize': '36',
         'topic': ''}

# 就是那些下拉參數 可以set new value
query['Region'] = ''
query['Typ'] = ''
query['IsOpen'] = ''

resp = requests.get(url, params=query, headers=headers)
print('params', query)

response_data = resp.json()  # 使用 json 解析响应数据
# 确保响应数据包含 'data' 键，并且它是一个列表
if 'data' in response_data and isinstance(response_data['data'], list):
    data_list = response_data['data']
else:
    data_list = []
# 连接到 MySQL 数据库
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='test',
    database='ForestInfo'
)

# 创建游标对象
cursor = conn.cursor()

# 创建表（如果不存在）
create_table_query = '''
CREATE TABLE IF NOT EXISTS ForestInfo (
    ID INT PRIMARY KEY,
    AdminName VARCHAR(255),
    Name VARCHAR(255),
    OpenText VARCHAR(255),
    Photo VARCHAR(255),
    RegionID VARCHAR(255),
    RegionID1 VARCHAR(255),
    TypID VARCHAR(255),
    TypName VARCHAR(255)
)
'''
cursor.execute(create_table_query)

for item in response_data['data']:
    print('////////////////////', item)
    insert_query = '''
    INSERT INTO ForestInfo (ID, AdminName, Name, OpenText, Photo, RegionID, RegionID1, TypID, TypName)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''
    print('====>',  item.get('admin_name'))
    values = (
        item.get('id'),
        # 将JSON数据转换为字符串，不使用ASCII编码
        json.dumps(item.get('admin_name'), ensure_ascii=False),
        item.get('name'),
        item.get('open_text'),
        item.get('photo'),
        item.get('region_id'),
        item.get('region_id1'),
        item.get('typ_id'),
        item.get('typ_name')
    )

    try:
        cursor.execute(insert_query, values)
        conn.commit()  # 提交更改
        print("Data inserted successfully:", values)
    except mysql.connector.Error as e:
        print("Error:", e)
        conn.rollback()  # 回滚操作

# 提交更改并关闭连接
conn.commit()
conn.close()
print("Data inserted into the table.")
