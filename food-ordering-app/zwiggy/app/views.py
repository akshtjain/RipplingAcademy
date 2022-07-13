from django.shortcuts import render
from django.http import HttpResponse
from .models import Restaurant
# Create your views here.


def add_restaurant(request):
    if request.method == 'POST':
        new_restaurant = Restaurant()
        new_restaurant.name = 'Demo Hard Coded Restaurant'
        new_restaurant.address = 'Demo Hard Coded Restaurant PIN-696969'
        new_restaurant.cuisine = 'Demo Hard Coded Cuisine'
        new_restaurant.save()
    return HttpResponse(status=200)

