from django.shortcuts import render
from rest_framework.views import APIView
from .models import Products
from .serializers import Producstserializer
from rest_framework.response import Response
# Create your views here.
class ProductList(APIView):
    def get(self,request):
        products=Products.objects.all()
        serializer=Producstserializer(products,many=True)
        return Response(serializer.data)