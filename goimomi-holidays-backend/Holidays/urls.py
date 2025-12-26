from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("holiday-form", HolidayEnquiryAPI)
router.register("umrah-form", UmrahEnquiryAPI)
router.register("enquiry-form", EnquiryAPI)
router.register("packages", HolidayPackageViewSet)
router.register("destinations", DestinationViewSet)
router.register("starting-cities", StartingCityViewSet)
router.register("itinerary-masters", ItineraryMasterViewSet)

urlpatterns = router.urls
