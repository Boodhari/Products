from django.contrib import admin
from django.urls import path
from .views import ProductList
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',ProductList.as_view(), name='home')
]
