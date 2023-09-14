FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
# COPY docker/requirements.txt /app/
COPY ./requirements.txt /app/
RUN pip install -r app/requirements.txt
COPY . /app/


