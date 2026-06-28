from rest_framework import serializers
from .models import User, BloodRequest, BloodCamp



class UserSerializer(serializers.ModelSerializer):


    
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password':{'write_only':True}
        }

    def create (self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'], 
            blood_group = validated_data['blood_group'], 
            location = validated_data['location'], 
            phone = validated_data['phone'], 
            role = validated_data['role'], 
        )
        return user
    

class BloodRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = BloodRequest
        fields = '__all__'
        read_only_fields = ['user']


class BloodCampSerializer(serializers.ModelSerializer):

    class Meta:
        model = BloodCamp
        fields = '__all__'