from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from App.serializers import ModelSerializer
from App.serializers import MemberSerializer
from App.models import Admin
from App.models import Member
from django.views.decorators.csrf import csrf_exempt
# from App.convlstm import convlstmBody

# print('cccc')
# convlstmBody()
# print('end')
@csrf_exempt
def AdminManagment(request):
    if request.method=='POST':
        data=JSONParser().parse(request)
        username=data['username']
        email=data['email']
        password=data['password']
        admin=Admin.objects.create(email=email,username=username,password=password)
        admin.save()
        return HttpResponse({"added successfully"},status=200)
    elif request.method=="GET":
        All=Admin.objects.all()
        serializer=ModelSerializer(All,many=True)
        return JsonResponse(serializer.data, safe=False)
@csrf_exempt    
def MemberManagment(request):

    if request.method=='POST':
        data=JSONParser().parse(request)
        firstname=data['firstname']
        email=data['email']
        lastname=data['lastname']
        M=Member.objects.create(email=email,firstname=firstname,lastname=lastname)
        M.save()
        return HttpResponse({"added successfully"},status=200)
    elif request.method=="GET":
        All=Member.objects.all()
        serializer=MemberSerializer(All,many=True)
        return JsonResponse(serializer.data, safe=False)  