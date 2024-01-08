from django.contrib import admin
from django.urls import path
from django.urls import re_path as url
from rest_framework import routers
from django.conf.urls.static import static
from backend import settings
from . import views
# router = routers.DefaultRouter()
# router.register(r'^produits/', views.list)
# router.register(r'^produits/(?P<pk>[0-9]+)$', views.detail)
urlpatterns = [
    path('Admin/',views.AdminManagment),
    # path('File/',),
    # url(r'^etudiant/([0-9]+)$',)
    path('Member/',views.MemberManagment)
    ]