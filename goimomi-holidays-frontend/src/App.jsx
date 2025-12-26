import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ComingSoon from './components/ComingSoon.jsx'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ContactSuccess from './pages/ContactSuccess.jsx'
import CustomizedHolidays from './pages/CustomizedHolidays.jsx'
import CustomizedUmrah from './pages/CustomizedUmrah.jsx'
import Holidays from './pages/Holidays.jsx'
import PlanTrip from './pages/Holidaysform.jsx'
import Cab from './pages/cab.jsx'
import Cruise from './pages/curise.jsx'
import Visa from './pages/visa.jsx'
import Hotel from './pages/hotel.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import CancellationPolicy from './pages/CancellationPolicy.jsx'
import HolidayDetails from "./pages/HolidayDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* 👇 ScrollToTop FIX */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/customizedHolidays" element={<CustomizedHolidays />} />
          <Route
            path="/umrah-package"
            element={
              <ComingSoon
                title="Umrah Packages"
                description="We are curated special Umrah packages for you. Stay tuned for the launch!"
              />
            }
          />
          <Route path="/customizedumrah" element={<CustomizedUmrah />} />
          <Route path="/form" element={<PlanTrip />} />
          <Route path="/cab" element={<Cab />} />
          <Route path="/cruise" element={<Cruise />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/holiday/:id" element={<HolidayDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
