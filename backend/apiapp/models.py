from django.db import models


class ForestInfo(models.Model):
    ID = models.AutoField(primary_key=True)
    # AdminName = models.JSONField()
    AdminName = models.CharField(max_length=255, null=True, blank=True)
    Name = models.CharField(max_length=255, null=True, blank=True)
    OpenText = models.CharField(max_length=255, null=True, blank=True)
    Photo = models.CharField(max_length=255, null=True, blank=True)
    RegionID = models.CharField(max_length=255, null=True, blank=True)
    RegionID1 = models.CharField(max_length=255, null=True, blank=True)
    TypID = models.CharField(max_length=255, null=True, blank=True)
    TypName = models.CharField(max_length=255, null=True, blank=True)


# class apiapp_forestinfo(models.Model):
#     ID = models.AutoField(primary_key=True)  # 自動增長的主鍵
#     AdminName = models.CharField(max_length=255, null=True, blank=True)
#     Name = models.CharField(max_length=255, null=True, blank=True)
#     OpenText = models.TextField(null=True, blank=True)
#     Photo = models.ImageField(upload_to='photos/', null=True, blank=True)  # 若是圖片，需要設定上傳路徑
#     RegionID = models.IntegerField(null=True, blank=True)
#     RegionID1 = models.IntegerField(null=True, blank=True)
#     TypID = models.IntegerField(null=True, blank=True)
#     TypName = models.CharField(max_length=255, null=True, blank=True)
