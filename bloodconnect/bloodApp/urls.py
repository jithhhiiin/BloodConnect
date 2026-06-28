from django.urls import path
from .views import register_user, login_user, create_blood_request, blood_camp_list, create_blood_camp, accept_request, update_blood_request, delete_blood_request, my_requests, accepted_requests, pending_requests, accepted_requests_lists, search_donors, blood_request_detail, profile
from .views import BloodRequestListView


urlpatterns = [
    path('register/',register_user),
    path('login/', login_user),
    path('blood-request/', create_blood_request),
    path('blood-requests/', BloodRequestListView.as_view()),
    path('blood-camp/',create_blood_camp),
    path('blood-camps/',blood_camp_list),
    path('accept-request/<int:request_id>/', accept_request),
    path('update-request/<int:request_id>/', update_blood_request),
    path('delete-request/<int:request_id>/', delete_blood_request),
    path('my-requests/', my_requests),
    path('accepted-requests/', accepted_requests),
    path('pending-requests/<int:donor_id>/', pending_requests),
    path('accepted-requests-lists/<int:donor_id>/', accepted_requests_lists),
    path('search-donors/', search_donors),
    path('blood-request/<int:request_id>/',blood_request_detail),
    path('profile/',profile),








]