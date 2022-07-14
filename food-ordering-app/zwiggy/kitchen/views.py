from bson import ObjectId
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from internal.models import Restaurant
from kitchen.models import Dish


def add_dish(request):
    if request.method == 'POST':
        new_dish = Dish()
        new_dish.name = request.POST['dish_name']
        new_dish.price = request.POST['dish_price']
        Restaurant.objects(pk=ObjectId(request.POST['restaurant_id'])).update_one(add_to_set__dishes=new_dish)
    return HttpResponse(status=200)

