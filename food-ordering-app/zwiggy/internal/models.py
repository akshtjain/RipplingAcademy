from mongoengine import Document, fields
# Create your models here.


class Restaurant(Document):
    name = fields.StringField(max_length=100, required=True)
    address = fields.StringField(max_length=200, required=True)
    cuisine = fields.StringField(required=True)


