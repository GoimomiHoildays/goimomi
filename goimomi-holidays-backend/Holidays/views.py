from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from .models import *
from .serializers import *


class HolidayEnquiryAPI(ModelViewSet):
    queryset = HolidayEnquiry.objects.all()
    serializer_class = HolidayEnquirySerializer


class UmrahEnquiryAPI(ModelViewSet):
    queryset = UmrahEnquiry.objects.all()
    serializer_class = UmrahEnquirySerializer


class EnquiryAPI(ModelViewSet):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer


class HolidayPackageViewSet(ReadOnlyModelViewSet):
    queryset = HolidayPackage.objects.all()
    serializer_class = HolidayPackageSerializer


class DestinationViewSet(ReadOnlyModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
    pagination_class = None


class StartingCityViewSet(ReadOnlyModelViewSet):
    queryset = StartingCity.objects.all()
    serializer_class = StartingCitySerializer
    pagination_class = None


class ItineraryMasterViewSet(ReadOnlyModelViewSet):
    queryset = ItineraryMaster.objects.all()
    serializer_class = ItineraryMasterSerializer
    pagination_class = None
