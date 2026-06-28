from django.contrib import admin
from .models import User, BloodRequest, BloodCamp

# Register your models here.

admin.site.register(User)
admin.site.register(BloodRequest)
admin.site.register(BloodCamp)
