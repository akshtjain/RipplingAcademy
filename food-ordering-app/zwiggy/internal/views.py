from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render
from bson.objectid import ObjectId

from .models import Restaurant


def add_restaurant(request):
    if request.method == 'POST':
        new_restaurant = Restaurant()
        new_restaurant.name = request.POST['restaurant_name']
        new_restaurant.address = request.POST['restaurant_address']
        new_restaurant.cuisine = request.POST['restaurant_cuisine']
        new_restaurant.save()
    return HttpResponse(status=200)


def delete_restaurant(request):
    if request.method == 'POST':
        restaurant = Restaurant.objects(pk=ObjectId(request.POST['id']))
        if len(restaurant) == 0:
            return HttpResponseBadRequest('Bad Request')
        restaurant.delete()

    return HttpResponse(status=200)


