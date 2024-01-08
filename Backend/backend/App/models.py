from django.db import models

# Create your models here.
class Admin(models.Model):
    email=models.EmailField(max_length=100,blank=False,default='')
    username=models.CharField(max_length=100,blank=False,default='')
    password=models.CharField(max_length=100,blank=False,default='')
class Member(models.Model):
    firstname=models.CharField(max_length=100,blank=False,default='')
    lastname=models.CharField(max_length=100,blank=False,default='')
    email=models.EmailField(max_length=100,blank=False,default='')
    