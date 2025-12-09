import React from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaPhone, FaCalendar, FaChild, FaMoon } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";

const PlanTrip = () => {
  const location = useLocation();
  const packageType = location.state?.packageType || "";

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10 my-10">

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#11294A]">Plan Your Dream Trip</h2>
      <p className="text-gray-600 mt-1">
        Fill out the form below and our travel experts will get back to you with a customized quote.
      </p>

      {/* Show Selected Package */}
      {packageType && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <p className="text-gray-700"><span className="font-semibold">Selected Package:</span> {packageType}</p>
        </div>
      )}

      {/* FORM GRID */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Full Name */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaUser className="text-yellow-600" /> Full Name *
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <HiOutlineMail className="text-yellow-600" /> Email Address *
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaPhone className="text-yellow-600" /> Phone Number *
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <TbMapPin className="text-yellow-600" /> Destination
          </label>
          <input
            type="text"
            placeholder="Enter your desired destination"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Travel Date */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaCalendar className="text-yellow-600" /> Preferred Travel Date
          </label>
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            className="w-full mt-2 border rounded-lg px-4 py-3"
          />
        </div>

        {/* Number of Nights */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaMoon className="text-yellow-600" /> Number of Nights
          </label>
          <select className="w-full mt-2 border rounded-lg px-4 py-3">
            <option>Select number of nights</option>
            <option>3 Nights</option>
            <option>5 Nights</option>
            <option>7 Nights</option>
            <option>10 Nights</option>
            <option>15 Nights</option>
            <option>20 Nights</option>
          </select>
        </div>

        {/* Adults */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaUser className="text-yellow-600" /> Adults (12+)
          </label>
          <select className="w-full mt-2 border rounded-lg px-4 py-3">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>5 Adults</option>
            <option>6 Adults</option>
            <option>7 Adults</option>
             

          </select>
        </div>

        {/* Children */}
        <div>
          <label className="font-semibold text-gray-700 flex items-center gap-2">
            <FaChild className="text-yellow-600" /> Children (&lt;12)
          </label>
          <select className="w-full mt-2 border rounded-lg px-4 py-3">
            <option>0 Children</option>
            <option>1 Child</option>
            <option>2 Children</option>
            <option>3 Children</option>
            <option>4 Children</option>
            <option>5 Children</option>
            <option>6 Children</option>
          </select>
        </div>
      </div>

      {/* Budget Range */}
      <div className="mt-6">
        <label className="font-semibold text-gray-700">Budget Range (Optional)</label>
        <select className="w-full mt-2 border rounded-lg px-4 py-3">
          <option>Select your budget range</option>
          <option>₹20,000 - ₹40,000</option>
          <option>₹40,000 - ₹60,000</option>
          <option>₹60,000 - ₹100,000</option>
          <option>₹1,00,000 - ₹2,00,000</option>
        </select>
      </div>

      {/* Additional Requirements */}
      <div className="mt-6">
        <label className="font-semibold text-gray-700">Additional Requirements</label>
        <textarea
          rows={4}
          placeholder="Tell us about your preferences, special requirements, or any questions you have..."
          className="w-full mt-2 border rounded-lg px-4 py-3 resize-none"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-3 rounded-lg border text-gray-600 hover:bg-gray-100">
          Cancel
        </button>

        <button className="px-8 py-3 bg-[#0A2342] text-white rounded-lg flex items-center gap-2 hover:bg-[#082036]">
          ✈️ Send Enquiry
        </button>
      </div>
    </div>
  );
};

export default PlanTrip;
