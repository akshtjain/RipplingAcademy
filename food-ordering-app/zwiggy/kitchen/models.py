from mongoengine import Document, fields, EmbeddedDocument

# Create your models here.


class Dish(EmbeddedDocument):
    name = fields.StringField(required=True, max_length=100)
    price = fields.IntField(required=True)