from django.urls import path
from .views import *

urlpatterns = [
    path('dish/add/', add_dish)
]