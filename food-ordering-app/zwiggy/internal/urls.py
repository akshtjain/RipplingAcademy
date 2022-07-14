from django.urls import path
from .views import *

urlpatterns = [
    path('restaurant/add/', add_restaurant),
    path('restaurant/delete/', delete_restaurant)
]