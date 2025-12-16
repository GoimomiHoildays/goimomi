from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("holiday-form", HolidayEnquiryAPI)
router.register("umrah-form", UmrahEnquiryAPI)
router.register("enquiry-form", EnquiryAPI)

urlpatterns = router.urls
