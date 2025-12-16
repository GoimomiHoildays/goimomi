from django.contrib import admin
from .models import *

@admin.register(HolidayEnquiry)
class HolidayEnquiryAdmin(admin.ModelAdmin):
    list_display = ("full_name", "start_city", "travel_date", "created_at")


admin.site.register(UmrahEnquiry)

admin.site.register(Enquiry)
