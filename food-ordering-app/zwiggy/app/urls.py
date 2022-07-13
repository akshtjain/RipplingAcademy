from django.urls import path
from .views import add_restaurant

urlpatterns = [
    path('addRestaurant/', add_restaurant)
]