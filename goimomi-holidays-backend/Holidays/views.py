from rest_framework.viewsets import ModelViewSet
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
