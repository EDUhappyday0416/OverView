#!/bin/sh
# if need migrate db file run it
#yes | python manage.py makemigrations
#yes | python manage.py migrate

python manage.py runserver 0.0.0.0:8000