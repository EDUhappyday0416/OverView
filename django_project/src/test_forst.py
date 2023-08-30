import datetime
import sys
import time
import typing

import pandas as pd
import requests
from loguru import logger
from pydantic import BaseModel


def forst_header():
    """網頁瀏覽時, 所帶的 request header 參數, 模仿瀏覽器發送 request"""
    return {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,da;q=0.5,ja;q=0.4",
        "Connection": "keep-alive",
        "Host": "recreation.forest.gov.tw",
        "Referer": "https://recreation.forest.gov.tw/Forest/Query",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
    }


def clear_data(df: pd.DataFrame,) -> pd.DataFrame:
    print('df """資料清理, 將文字轉成數字"""', df)
    """資料清理, 將文字轉成數字"""
    # df["Dir"] = (
    #     df["Dir"].str.split(">").str[1].str.split("<").str[0]
    # )
    # df["Change"] = (
    #     df["Dir"] + df["Change"]
    # )
    # df["Change"] = (
    #     df["Change"]
    #     .str.replace(" ", "")
    #     .str.replace("X", "")
    #     .astype(float)
    # )
    # df = df.fillna("")
    # df = df.drop(["Dir"], axis=1)
    for col in [
        "admin_name",
        "id",
        "is_open",
        "name",
        "name1",
        "open_text",
        "photo"
        "pic",
        "region_id",
        "region_id1",
        "typ_id",
        "typ_name"
    ]:
        print('df[col]============>', df[col])
        # df[col] = (
        #     df[col]
        #     .astype(str)
        #     .str.replace(",", "")
        #     .str.replace("X", "")
        #     .str.replace("+", "")
        #     .str.replace("----", "0")
        #     .str.replace("---", "0")
        #     .str.replace("--", "0")
        # )
    return df


def colname_zh2en(
    df: pd.DataFrame,
    keys_of_interest: list
) -> pd.DataFrame:
    """資料欄位轉換, 英文有助於接下來存入資料庫"""
    taiwan_stock_price = {
        "地區": "AdminName",
        "編號": "ID",
        "是否開園": "IsOpen",
        "名稱": "Name",
        "名稱1": "Name1",
        "開放時間": "OpenText",
        "照片": "Photo",
        "照片1": "Pic",
        "地區編號": "RegionID",
        "地區編號1": "RegionID1",
        "類別編號": "TypID",
        "類別名稱": "TypName",
    }

    print('taiwan_stock_price', taiwan_stock_price)

    df.columns = [
        taiwan_stock_price[col] if col in taiwan_stock_price else col
        for col in df.columns
    ]
    print('df.columns===>', df.columns)

    # 删除空白列
    df = df.dropna(axis=1, how='all')

    return df


class TaiwanStockPrice(BaseModel):
    AdminName: str
    ID: int
    IsOpen: int
    Name: int
    Name1: float
    OpenText: float
    Photo: float
    Pic: float
    RegionID: float
    RegionID1: str
    TypID: str
    TypName: str


def check_schema(
    df: pd.DataFrame,
) -> pd.DataFrame:
    """檢查資料型態, 確保每次要上傳資料庫前, 型態正確"""
    df_dict = df.to_dict("records")
    df_schema = [
        TaiwanStockPrice(**dd).__dict__
        for dd in df_dict
    ]
    df = pd.DataFrame(df_schema)
    return df


def gen_date_list(
    start_date: str, end_date: str
) -> typing.List[str]:
    """建立時間列表, 用於爬取所有資料"""
    start_date = (
        datetime.datetime.strptime(
            start_date, "%Y-%m-%d"
        ).date()
    )
    end_date = (
        datetime.datetime.strptime(
            end_date, "%Y-%m-%d"
        ).date()
    )
    days = (
        end_date - start_date
    ).days + 1
    date_list = [
        str(
            start_date
            + datetime.timedelta(
                days=day
            )
        )
        for day in range(days)
    ]
    return date_list


def main(start_date: str, end_date: str):
    date_list = gen_date_list(
        start_date, end_date
    )
    # df = crawler_twse()
    # if len(df) > 0:
    #     # 資料清理
    #     # 檢查資料型態
    #     # 這邊先暫時存成 file，下個章節將會上傳資料庫
    #     df = clear_data(df.copy())
    #     df = check_schema(df.copy())

    #     df.to_csv("taiwan_stock_price_twse_2021-10-01 test.csv", index=False,)
    for date in date_list:
        logger.info(date)
        df = crawler_twse(date)
        if len(df) > 0:
            # 資料清理
            df = clear_data(df.copy())
            # 檢查資料型態
            df = check_schema(df.copy())
            # 這邊先暫時存成 file，下個章節將會上傳資料庫
            df.to_csv(
                f"forst_data{date}.csv",
                index=False,
            )


def crawler_twse(date: str,) -> pd.DataFrame:
    # headers 中的 Request url
    print('date===================>', date)
    url = (
        "https://recreation.forest.gov.tw/Forest/QueryForest?Region=N%2CC&Typ=&Keyword=&Height=&IsOpen=&Traffic=&RT_Status=&RT_Hard=&RT_Length=&RT_Time=&sort=&PageIndex=0&PageSize=99999&topic="
    )
    # 避免被證交所 ban ip, 在每次爬蟲時, 先 sleep 5 秒
    time.sleep(5)
    # request method
    res = requests.get(
        url, headers=forst_header()
    )
    df = pd.DataFrame(
        res.json()['data']
    )
    colname = ['地區', '編號', '是否開園', '名稱', '名稱1', '開放時間',
               '照片', '照片1', '地區編號', '地區編號1', '類別編號', '類別名稱']
    df = colname_zh2en(
        df.copy(), colname
    )
    return df


if __name__ == "__main__":
    start_date, end_date = sys.argv[1:]
    main(start_date, end_date)
