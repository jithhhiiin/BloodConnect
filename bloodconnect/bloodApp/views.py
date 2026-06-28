from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer, BloodRequestSerializer, BloodCampSerializer
from django.contrib.auth import authenticate
from .models import BloodRequest, BloodCamp, User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


# Create your views here.
@api_view(['POST'])
def register_user(request):

    serializer = UserSerializer(data=request.data)


    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors)


@api_view(['POST'])
def login_user(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username = username, password = password)

    if user is not None:

        return Response({
            'message': "Login Successful"
        })
    
    return Response({
        'message': "Invalid Username or Password"
    })



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_blood_request(request):

    serializer = BloodRequestSerializer(data = request.data)

    # only receivers can create request

    user = request.user

    if user.role != 'receiver':
        return Response({'error':"Only receivers can create blood request"})

    if serializer.is_valid():
        serializer.save(user=user)
        return Response(serializer.data)
    
    return Response(serializer.errors)



class BloodRequestListView(generics.ListAPIView):

    queryset = BloodRequest.objects.all()
    serializer_class = BloodRequestSerializer

    filterset_fields = [
        'blood_group',
        'location'
    ]

    search_fields = [
        'patient_name'
    ]


@api_view(['POST'])
def create_blood_camp(request):

    serializer = BloodCampSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors)


@api_view(['GET'])
def blood_camp_list(request):

    camps = BloodCamp.objects.all()
    serializer = BloodCampSerializer(camps, many=True)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def accept_request(request, request_id):

    blood_request = get_object_or_404(
        BloodRequest,
        id=request_id
    )

    donor = request.user

    if donor.role != 'donor':
        return Response({"error":"Only donors can accept request" })
    

    if blood_request.status == 'Accepted':
        return Response({"error":"Request already accepted"})

    blood_request.accepted_by = donor
    blood_request.status = 'Accepted'

    blood_request.save()

    return Response({
        'message': "Request accepted successfully"
    })


@api_view(['PUT'])
def update_blood_request(request, request_id):

    blood_request = get_object_or_404(BloodRequest, id = request_id)

    serializer = BloodRequestSerializer(blood_request, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors)



@api_view(['PATCH'])
def update_blood_request(request, request_id):

    blood_request = get_object_or_404(
        BloodRequest,
        id=request_id
    )

    serializer = BloodRequestSerializer(
        blood_request,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)



@api_view(['DELETE'])
def delete_blood_request(request, request_id):

    blood_request = get_object_or_404(
        BloodRequest,
        id=request_id
    )

    blood_request.delete()

    return Response({
        "message": "Blood request deleted successfully"
    })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_requests(request):

    requests = BloodRequest.objects.filter(user = request.user)

    serializer = BloodRequestSerializer(requests, many = True)

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def accepted_requests(request):

    requests = BloodRequest.objects.filter(
        accepted_by=request.user
    )

    serializer = BloodRequestSerializer(
        requests,
        many=True
    )

    return Response(serializer.data)



@api_view(['GET'])

def pending_requests(request):

    requests = BloodRequest.objects.filter(status = 'Pending')

    serializer = BloodRequestSerializer(request, many = True)

    return Response(serializer.data)



@api_view(['GET'])
def accepted_requests_lists(request):

    requests  = BloodRequest.objects.filter(status = 'Accepted')

    serializer = BloodCampSerializer(request, many = True)

    return Response (serializer.data)


@api_view(['GET'])
def search_donors(request):

    blood_group = request.GET.get('blood_group')

    location = request.GET.get('location')

    donors = User.objects.filter(role='donor', is_available=True )

    if blood_group:
        donors = donors.filter(blood_group=blood_group)

    if location:
        donors = donors.filter(location__icontains=location)

    serializer = UserSerializer(donors,many=True)

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blood_request_detail(request, request_id):

    blood_request = get_object_or_404(
        BloodRequest,
        id=request_id
    )

    serializer = BloodRequestSerializer(
        blood_request
    )

    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):

    serializer = UserSerializer(
        request.user
    )

    return Response(serializer.data)