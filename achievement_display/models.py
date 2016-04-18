# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class Baidumetasource(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=36)  # Field name made lowercase.
    filename = models.CharField(db_column='fileName', max_length=200)  # Field name made lowercase.
    storeloc = models.CharField(db_column='storeLoc', max_length=500)  # Field name made lowercase.
    crawltime = models.DateField(db_column='crawlTime')  # Field name made lowercase.
    fileabstract = models.CharField(db_column='fileAbstract', max_length=2000)  # Field name made lowercase.
    filetype = models.CharField(db_column='fileType', max_length=50)  # Field name made lowercase.
    originalurl = models.CharField(db_column='originalUrl', max_length=200)  # Field name made lowercase.
    filecategory = models.CharField(db_column='fileCategory', max_length=100)  # Field name made lowercase.
    fileauthor = models.CharField(db_column='fileAuthor', max_length=50)  # Field name made lowercase.
    downloadcount = models.IntegerField(db_column='downloadCount')  # Field name made lowercase.
    readcount = models.IntegerField(db_column='readCount')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'BaiduMetaSource'


class Docbmcheckresult(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=36)  # Field name made lowercase.
    processtime = models.DateTimeField(db_column='processTime')  # Field name made lowercase.
    processresult = models.IntegerField(db_column='processResult')  # Field name made lowercase.
    alertnum = models.IntegerField(db_column='alertNum')  # Field name made lowercase.
    score = models.IntegerField()
    reserverint = models.IntegerField(db_column='reserverInt', blank=True, null=True)  # Field name made lowercase.
    reserverstr = models.CharField(db_column='reserverStr', max_length=128, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DocBMCheckResult'


class Docyxcheckresult(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=36)  # Field name made lowercase.
    processtime = models.DateTimeField(db_column='processTime')  # Field name made lowercase.
    picnum = models.IntegerField(db_column='picNum')  # Field name made lowercase.
    alertpicnum = models.IntegerField(db_column='alertPicNum')  # Field name made lowercase.
    pidlist = models.CharField(db_column='PIDList', max_length=2048, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DocYXCheckResult'


class Picyxcheckresult(models.Model):
    pid = models.AutoField(db_column='PID', primary_key=True)  # Field name made lowercase.
    storeloc = models.CharField(db_column='storeLoc', max_length=256)  # Field name made lowercase.
    id = models.CharField(db_column='ID', max_length=36)  # Field name made lowercase.
    processtime = models.DateTimeField(db_column='processTime')  # Field name made lowercase.
    picname = models.CharField(db_column='picName', max_length=64)  # Field name made lowercase.
    pictype = models.CharField(db_column='picType', max_length=50)  # Field name made lowercase.
    softinfo = models.CharField(db_column='softInfo', max_length=256, blank=True, null=True)  # Field name made lowercase.
    contenthide = models.CharField(db_column='contentHide', max_length=256, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'PicYXCheckResult'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'



class Wanfangmetasource(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=64)  # Field name made lowercase.
    title = models.CharField(max_length=128, blank=True, null=True)
    detailpagecollection = models.CharField(db_column='detailPageCollection', max_length=64, blank=True, null=True)  # Field name made lowercase.
    detailpageid = models.CharField(db_column='detailPageId', max_length=24)  # Field name made lowercase.
    detailpageurl = models.CharField(db_column='detailPageUrl', max_length=256)  # Field name made lowercase.
    crawltime = models.DateTimeField(db_column='crawlTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'WanfangMetaSource'


class Acmmetasource(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=64)  # Field name made lowercase.
    title = models.CharField(max_length=128, blank=True, null=True)
    detailpageid = models.CharField(db_column='detailPageId', max_length=24)  # Field name made lowercase.
    detailpageurl = models.CharField(db_column='detailPageUrl', max_length=256)  # Field name made lowercase.
    crawltime = models.DateTimeField(db_column='crawlTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ACMMetaSource'


class Ieeemetasource(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=64)  # Field name made lowercase.
    title = models.CharField(max_length=128, blank=True, null=True)
    detailpageid = models.CharField(db_column='detailPageId', max_length=24)  # Field name made lowercase.
    detailpageurl = models.CharField(db_column='detailPageUrl', max_length=256)  # Field name made lowercase.
    crawltime = models.DateTimeField(db_column='crawlTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'IEEEMetaSource'

