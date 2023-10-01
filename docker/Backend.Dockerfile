# FROM python:3
# ENV PYTHONUNBUFFERED 1
# RUN mkdir /app
# WORKDIR /app
# COPY requirements.txt /app/
# # COPY docker/requirements.txt /app/
# # RUN pip install -r app/requirements.txt
# RUN pip install -r requirements.txt
# COPY . /app/

# 使用 Python 3 的基本映像
FROM python:3

# 設定環境變數
ENV PYTHONUNBUFFERED 1

# 創建 app 目錄並設定為工作目錄
RUN mkdir /app
# WORKDIR /app
WORKDIR /app/backend


# 複製 requirements.txt 到容器中的 /app/
COPY requirements.txt /app/

# 安裝系統依賴性
RUN apt-get update && apt-get install -y libpq-dev gcc && apt-get clean

# 安裝 Python 依賴性
# RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt


# 複製當前目錄的所有文件和目錄到容器中的 /app/
COPY . /app/