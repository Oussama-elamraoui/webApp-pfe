from rest_framework import serializers
from App.models import Admin
from App.models import Member
class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields=(
            'id',
            'email',
            'username',
            'password'
        )
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields=(
            'id',
            'email',
            'firstname',
            'lastname'
        )