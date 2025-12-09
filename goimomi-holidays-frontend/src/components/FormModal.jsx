import React from "react";
import { FaUser, FaPhone, FaCalendar, FaChild, FaMoon, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";

const FormModal = ({ isOpen, onClose, packageType }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-slideUp">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
          
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Plan Your Dream Trip</h2>
              {packageType && (
                <p className="text-blue-100 mt-1">Package: <span className="font-semibold">{packageType}</span></p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-blue-700 p-2 rounded-lg transition"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-8">
            <p className="text-gray-600 mb-6">
              Fill out the form below and our travel experts will get back to you with a customized quote.
            </p>

            {/* FORM GRID */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <FaUser className="text-yellow-600" /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>

              {/* Number of Nights */}
              <div>
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <FaMoon className="text-yellow-600" /> Number of Nights
                </label>
                <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
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
                <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
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
                <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
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
              <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
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
                rows={3}
                placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                className="w-full mt-2 border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              ></textarea>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 mt-8">
              <button 
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">
                Cancel
              </button>
              <button className="px-8 py-3 rounded-lg bg-[#0A2342] text-white font-semibold hover:bg-[#082036] transition flex items-center gap-2">
                ✈️ Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default FormModal;
