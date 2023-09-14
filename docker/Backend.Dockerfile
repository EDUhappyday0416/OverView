FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
# COPY docker/requirements.txt /app/
# RUN pip install -r app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app/


