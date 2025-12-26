from .models import HolidayEnquiry, UmrahEnquiry, Enquiry, HolidayPackage, ItineraryDay, Inclusion, Exclusion, Destination, StartingCity, PackageDestination, ItineraryMaster
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


class ItineraryDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItineraryDay
        fields = ["day_number", "title", "description", "image"]


class InclusionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inclusion
        fields = ["text"]


class ExclusionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exclusion
        fields = ["text"]


class PackageDestinationSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='destination.name', read_only=True)
    class Meta:
        model = PackageDestination
        fields = ["name", "nights"]


class HolidayPackageSerializer(serializers.ModelSerializer):
    itinerary = serializers.SerializerMethodField()
    inclusions = InclusionSerializer(many=True, read_only=True)
    exclusions = ExclusionSerializer(many=True, read_only=True)
    destinations = PackageDestinationSerializer(source='extra_destinations', many=True, read_only=True)
    nights = serializers.SerializerMethodField()

    class Meta:
        model = HolidayPackage
        fields = "__all__"

    def get_nights(self, obj):
        return sum(d.nights for d in obj.extra_destinations.all())

    def get_itinerary(self, obj):
        # Only show up to 'days' number of itinerary items
        qs = obj.itinerary.all()[:obj.days]
        return ItineraryDaySerializer(qs, many=True, context=self.context).data


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = "__all__"


class StartingCitySerializer(serializers.ModelSerializer):
    class Meta:
        model = StartingCity
        fields = "__all__"


class ItineraryMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItineraryMaster
        fields = "__all__"
