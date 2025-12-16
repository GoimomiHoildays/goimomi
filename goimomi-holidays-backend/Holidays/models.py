from django.db import models


class HolidayEnquiry(models.Model):
    package_type = models.CharField(max_length=100, blank=True, null=True)
    start_city = models.CharField(max_length=100)
    nationality = models.CharField(max_length=50)
    travel_date = models.DateField()

    rooms = models.PositiveIntegerField()
    star_rating = models.CharField(max_length=10)
    holiday_type = models.CharField(max_length=50)
    budget = models.CharField(max_length=50, blank=True)

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    cities = models.JSONField(default=list)
    room_details = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name



class UmrahEnquiry(models.Model):
    package_type = models.CharField(max_length=100, blank=True, null=True)
    start_city = models.CharField(max_length=100)
    nationality = models.CharField(max_length=50)
    travel_date = models.DateField()

    rooms = models.PositiveIntegerField()
    star_rating = models.CharField(max_length=10)
    budget = models.CharField(max_length=50, blank=True)

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    cities = models.JSONField(default=list)
    room_details = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)


class Enquiry(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)
