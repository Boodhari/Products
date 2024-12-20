# Generated by Django 5.0 on 2024-11-27 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=500)),
                ('Image', models.ImageField(upload_to='images')),
                ('Description', models.TextField()),
                ('Price', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
