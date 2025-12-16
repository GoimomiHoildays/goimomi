from .models import HolidayEnquiry, UmrahEnquiry, Enquiry
from rest_framework import serializers


class HolidayEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = HolidayEnquiry
        fields = "__all__"


class UmrahEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = UmrahEnquiry
        fields = "__all__"


class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = "__all__"
