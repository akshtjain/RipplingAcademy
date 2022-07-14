from mongoengine import Document, fields
# Create your models here.
from kitchen.models import Dish


class Restaurant(Document):
    name = fields.StringField(max_length=100, required=True)
    address = fields.StringField(max_length=200, required=True)
    cuisine = fields.StringField(required=True)
    dishes = fields.EmbeddedDocumentListField(Dish)


