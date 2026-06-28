from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    BLOOD_GROUPS = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
    ]

    ROLE_CHOICES = [
        ('donor', 'donor'),
        ('receiver', 'receiver'),
    ]

    blood_group = models.CharField(max_length = 5, choices = BLOOD_GROUPS)
    location = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 15)
    role = models.CharField(max_length = 10, choices = ROLE_CHOICES)
    is_available = models.BooleanField(default=True)


    def __str__(self):
        return self.username
    


class BloodRequest(models.Model):

    BLOOD_GROUPS = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE,  related_name='blood_requests')

    patient_name = models.CharField(max_length=100)

    blood_group = models.CharField(max_length=5, choices=BLOOD_GROUPS)

    hospital = models.CharField(max_length=100)

    location = models.CharField(max_length=100)

    contact_number = models.CharField(max_length=15)

    units_needed = models.IntegerField()

    urgency = models.CharField(max_length=15)

    created_at = models.DateTimeField(auto_now_add=True)

    accepted_by = models.ForeignKey(
    User,
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='accepted_requests'
    )

    STATUS_CHOICES = [
    ('Pending', 'Pending'),
    ('Accepted', 'Accepted'),
    ('Completed', 'Completed'),
    ]
    
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Pending'
    )
    
    def __str__(self):
        return self.patient_name
    


class BloodCamp(models.Model):

    camp_name = models.CharField(max_length=200)

    organizer = models.CharField(max_length=200)

    location = models.CharField(max_length=200)

    date = models.DateField()

    contact_number = models.CharField(max_length=15)

    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.camp_name

