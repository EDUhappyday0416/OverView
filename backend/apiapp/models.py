from django.db import models

# Create your models here.
from django.db import models


class ForestInfo(models.Model):
    ID = models.IntegerField(primary_key=True)
    AdminName = models.JSONField()
    Name = models.CharField(max_length=255)
    OpenText = models.CharField(max_length=255)
    Photo = models.CharField(max_length=255)
    RegionID = models.CharField(max_length=255)
    RegionID1 = models.CharField(max_length=255)
    TypID = models.CharField(max_length=255)
    TypName = models.CharField(max_length=255)
