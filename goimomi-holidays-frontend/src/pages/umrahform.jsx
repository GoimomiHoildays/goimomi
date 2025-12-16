import React, { useState } from "react";
import axios from "axios";
import SuccessModal from "../components/SuccessModal";

const NATIONALITIES = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Anguillan",
  "Citizen of Antigua and Barbuda", "Argentine", "Armenian", "Australian", "Austrian",
  "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian",
  "Belgian", "Belizean", "Beninese", "Bermudian", "Bhutanese", "Bolivian",
  "Citizen of Bosnia and Herzegovina", "Botswanan", "Brazilian", "British",
  "British Virgin Islander", "Bruneian", "Bulgarian", "Burkinan", "Burmese",
  "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean",
  "Cayman Islander", "Central African", "Chadian", "Chilean", "Chinese", "Colombian",
  "Comoran", "Congolese (Congo)", "Congolese (DRC)", "Cook Islander", "Costa Rican",
  "Croatian", "Cuban", "Cymraes", "Cymro", "Cypriot", "Czech", "Danish", "Djiboutian",
  "Dominican", "Citizen of the Dominican Republic", "Dutch", "East Timorese",
  "Ecuadorean", "Egyptian", "Emirati", "English", "Equatorial Guinean", "Eritrean",
  "Estonian", "Ethiopian", "Faroese", "Fijian", "Filipino", "Finnish", "French",
  "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Gibraltarian", "Greek",
  "Greenlandic", "Grenadian", "Guamanian", "Guatemalan", "Citizen of Guinea-Bissau",
  "Guinean", "Guyanese", "Haitian", "Honduran", "Hong Konger", "Hungarian",
  "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli",
  "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan",
  "Kittitian", "Citizen of Kiribati", "Kosovan", "Kuwaiti", "Kyrgyz", "Lao",
  "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtenstein citizen", "Lithuanian",
  "Luxembourger", "Macanese", "Macedonian", "Malagasy", "Malawian", "Malaysian",
  "Maldivian", "Malian", "Maltese", "Marshallese", "Martiniquais", "Mauritanian",
  "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian",
  "Montenegrin", "Montserratian", "Moroccan", "Mosotho", "Mozambican", "Namibian",
  "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien",
  "Niuean", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani",
  "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan",
  "Peruvian", "Pitcairn Islander", "Polish", "Portuguese", "Prydeinig", "Puerto Rican",
  "Qatari", "Romanian", "Russian", "Rwandan", "Salvadorean", "Sammarinese", "Samoan",
  "Sao Tomean", "Saudi Arabian", "Scottish", "Senegalese", "Serbian",
  "Citizen of Seychelles", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian",
  "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese",
  "Spanish", "Sri Lankan", "St Helenian", "St Lucian", "Stateless", "Sudanese",
  "Surinamese", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik",
  "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian", "Tristanian", "Tunisian",
  "Turkish", "Turkmen", "Turks and Caicos Islander", "Tuvaluan", "Ugandan",
  "Ukrainian", "Uruguayan", "Uzbek", "Vatican citizen", "Citizen of Vanuatu",
  "Venezuelan", "Vietnamese", "Vincentian", "Wallisian", "Welsh", "Yemeni",
  "Zambian", "Zimbabwean"
];

const UmrahFormOnly = ({ isOpen, onClose, packageType }) => {
  const [step, setStep] = useState(1);

  // STEP 1 States
  const [cities, setCities] = useState([
    { cityName: "Makkah", nights: 2 },
    { cityName: "Madinah", nights: 2 }
  ]);
  const [startCity, setStartCity] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [nationality, setNationality] = useState("Indian");

  const [rooms, setRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([{ adults: 2, children: 0 }]);
  const [travelerDropdownOpen, setTravelerDropdownOpen] = useState(false);

  const [starRating, setStarRating] = useState("");

  const [budget, setBudget] = useState("");

  // STEP 2 States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Helpers
  const initialCities = [{ cityName: "Makkah", nights: 2 }, { cityName: "Madinah", nights: 2 }];
  const initialRoomDetails = [{ adults: 2, children: 0 }];

  const updateCity = (i, key, val) => {
    const updated = [...cities];
    updated[i][key] = val;
    setCities(updated);
  };

  const addCity = () => setCities([...cities, { cityName: "", nights: 1 }]);
  const removeCity = (i) => setCities(cities.filter((_, x) => x !== i));

  const travelerSummary = () => {
    const adults = roomDetails.reduce((s, r) => s + r.adults, 0);
    const children = roomDetails.reduce((s, r) => s + r.children, 0);

    let txt = `${rooms} rooms, ${adults} adults`;
    if (children > 0) txt += `, ${children} children`;
    return txt;
  };

  const adjustRooms = (count) => {
    if (count < 1 || count > 6) return;

    let updated = [...roomDetails];
    if (count > updated.length) {
      updated.push({ adults: 2, children: 0 });
    } else {
      updated = updated.slice(0, count);
    }
    setRooms(count);
    setRoomDetails(updated);
  };

  const updateAdults = (i, val) => {
    const copy = [...roomDetails];
    copy[i].adults = Math.max(1, copy[i].adults + val);
    setRoomDetails(copy);
  };

  const updateChildren = (i, val) => {
    const copy = [...roomDetails];
    copy[i].children = Math.max(0, copy[i].children + val);
    setRoomDetails(copy);
  };

  const validateStep1 = () => {
    const newErrors = {};

    // Validate cities
    if (cities.length === 0) {
      newErrors.cities = "At least one city is required";
    } else {
      const invalidCity = cities.some(city => !city.cityName || !city.nights);
      if (invalidCity) {
        newErrors.cities = "Please fill in all city details";
      }
    }

    // Validate required fields
    if (!startCity) newErrors.startCity = "Starting city is required";
    if (!travelDate) newErrors.travelDate = "Travel date is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    if (!starRating) newErrors.starRating = "Hotel rating is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\+\-\s]{10,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmitFinal = async () => {
    if (!validateStep2()) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    // Transform cities to match backend expected format (cityName -> destination)
    // Although backend accepts JSON, it's good to keep it consistent if needed, 
    // but here we just send what we have or transform if we want uniformity.
    // Let's send as is, or transform like Holiday form if you prefer 'destination'
    // The previous prompt context suggests consistency.
    // I will transform it to be safe and consistent with HolidayEnquiry adjustments.
    const formattedCities = cities.map(city => ({
      destination: city.cityName,
      nights: city.nights
    }));

    const payload = {
      package_type: packageType,
      cities: formattedCities,
      start_city: startCity,
      travel_date: travelDate,
      nationality: nationality,
      rooms: rooms,
      room_details: roomDetails,
      star_rating: starRating,
      budget: budget,
      full_name: fullName,
      email: email,
      phone: phone,
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/umrah-form/',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 201) {
        // Show success modal
        setShowSuccessModal(true);

        // Reset form after a short delay
        setTimeout(() => {
          setStep(1);
          setCities(initialCities);
          setStartCity("");
          setTravelDate("");
          setNationality("Indian");
          setRooms(1);
          setRoomDetails(initialRoomDetails);
          setStarRating("");
          setBudget("");
          setFullName("");
          setEmail("");
          setPhone("");
          setErrors({});

          // Close the modal after resetting the form
          setTimeout(() => {
            setShowSuccessModal(false);
            onClose();
          }, 2000);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "An error occurred. Please try again later.";
      if (error.response) {
        const data = error.response.data;
        if (typeof data === 'object') {
          const firstError = Object.values(data)[0];
          if (Array.isArray(firstError)) {
            errorMessage = firstError[0];
          } else if (typeof firstError === 'string') {
            errorMessage = firstError;
          }
        }
      }
      alert(errorMessage);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
        message="Your Umrah enquiry has been submitted successfully! Our team will contact you shortly."
      />
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 max-h-[90vh] overflow-y-auto relative">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          {/* STEP 1 FORM */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-5">Create Customized Proposal</h2>

              {/* Selected Package */}
              {packageType && (
                <div className="p-3 bg-green-50 border-l-4 border-green-600 rounded mb-6">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Selected Package:</span> {packageType}
                  </p>
                </div>
              )}

              {/* Destination list */}
              <div className="space-y-4 mb-8">
                {cities.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <select
                      className="border px-3 py-2 rounded w-full"
                      value={item.cityName}
                      onChange={(e) => updateCity(i, "cityName", e.target.value)}
                    >
                      <option value="">Select City</option>
                      <option value="Makkah">Makkah</option>
                      <option value="Madinah">Madinah</option>
                      {/* Add more options as needed */}
                    </select>

                    <select
                      className="border px-3 py-2 rounded"
                      value={item.nights}
                      onChange={(e) => updateCity(i, "nights", Number(e.target.value))}
                    >
                      {[...Array(15)].map((_, x) => (
                        <option key={x} value={x + 1}>
                          {x + 1} night{x > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>

                    {cities.length > 1 && (
                      <button className="text-red-500 text-lg" onClick={() => removeCity(i)}>
                        ✕
                      </button>
                    )}
                  </div>
                ))}

                <button onClick={addCity} className="text-blue-600 text-sm">
                  + Add Another City
                </button>
              </div>

              {/* Trip details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="w-full">
                  <label className="font-semibold">Starting City *</label>
                  <input
                    type="text"
                    placeholder="Starting City"
                    className={`border px-3 py-2 rounded w-full mt-1 ${errors.startCity ? 'border-red-500' : ''}`}
                    value={startCity}
                    onChange={(e) => {
                      setStartCity(e.target.value);
                      if (errors.startCity) setErrors({ ...errors, startCity: '' });
                    }}
                  />
                  {errors.startCity && <p className="text-red-500 text-sm mt-1">{errors.startCity}</p>}
                </div>

                <div className="w-full">
                  <label className="font-semibold">Nationality *</label>
                  <select
                    className={`border px-3 py-2 rounded w-full mt-1 ${errors.nationality ? 'border-red-500' : ''}`}
                    value={nationality}
                    onChange={(e) => {
                      setNationality(e.target.value);
                      if (errors.nationality) setErrors({ ...errors, nationality: '' });
                    }}
                  >
                    {NATIONALITIES.map((nat) => (
                      <option key={nat} value={nat}>
                        {nat}
                      </option>
                    ))}
                  </select>
                  {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
                </div>

                <div>
                  <label className="font-semibold">Travel Date *</label>
                  <input
                    type="date"
                    className={`border w-full rounded px-3 py-2 mt-1 ${errors.travelDate ? 'border-red-500' : ''}`}
                    value={travelDate}
                    onChange={(e) => {
                      setTravelDate(e.target.value);
                      if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                    }}
                  />
                  {errors.travelDate && <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>}
                </div>

                {/* Traveler dropdown */}
                <div className="relative">
                  <label className="font-semibold">Number of Travelers *</label>
                  <button
                    type="button"
                    onClick={() => setTravelerDropdownOpen(!travelerDropdownOpen)}
                    className="border rounded w-full px-3 py-2 mt-1 text-left flex justify-between items-center"
                  >
                    <span>{travelerSummary()}</span>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform ${travelerDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {travelerDropdownOpen && (
                    <div className="absolute bg-white border shadow-xl rounded w-full mt-2 p-4 z-20">
                      {/* Rooms */}
                      <div className="flex justify-between mb-3">
                        <span className="font-semibold">Rooms</span>
                        <div className="flex items-center gap-3">
                          <button className="border px-2" onClick={() => adjustRooms(rooms - 1)}>
                            -
                          </button>
                          <span>{rooms}</span>
                          <button className="border px-2" onClick={() => adjustRooms(rooms + 1)}>
                            +
                          </button>
                        </div>
                      </div>

                      {roomDetails.map((room, i) => (
                        <div key={i} className="border-t py-3">
                          <p className="font-semibold mb-2">Room {i + 1}</p>

                          <div className="grid grid-cols-2 gap-4">
                            {/* Adults */}
                            <div>
                              <p className="text-sm">Adults (12+)</p>
                              <div className="flex justify-between border rounded px-3 py-2">
                                <button onClick={() => updateAdults(i, -1)}>-</button>
                                <span>{room.adults}</span>
                                <button onClick={() => updateAdults(i, 1)}>+</button>
                              </div>
                            </div>

                            {/* Children */}
                            <div>
                              <p className="text-sm">Children</p>
                              <div className="flex justify-between border rounded px-3 py-2">
                                <button onClick={() => updateChildren(i, -1)}>-</button>
                                <span>{room.children}</span>
                                <button onClick={() => updateChildren(i, 1)}>+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Star Rating */}
                <div>
                  <label className="font-semibold"> Hotel Star Rating</label>
                  <select
                    className={`border rounded px-3 py-2 w-full mt-1 ${errors.starRating ? 'border-red-500' : ''}`}
                    value={starRating}
                    onChange={(e) => {
                      setStarRating(e.target.value);
                      if (errors.starRating) setErrors({ ...errors, starRating: '' });
                    }}
                  >
                    <option value="">Select</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </select>
                  {errors.starRating && <p className="text-red-500 text-sm mt-1">{errors.starRating}</p>}
                </div>


              </div>

              {/* Budget */}
              <div className="mb-6">
                <label className="font-semibold">Budget Per Person Without Flight</label>
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full mt-1"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 2 FORM */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Traveler Details</h2>

              <div className="space-y-5">
                <div>
                  <label className="font-semibold">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`border px-3 py-2 rounded w-full ${errors.fullName ? 'border-red-500' : ''}`}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="font-semibold">Email *</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`border px-3 py-2 rounded w-full ${errors.email ? 'border-red-500' : ''}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-semibold">Phone *</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`border px-3 py-2 rounded w-full ${errors.phone ? 'border-red-500' : ''}`}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-10">
                <button onClick={() => setStep(1)} className="px-6 py-3 border rounded-lg">
                  ← Back
                </button>

                <button
                  onClick={handleSubmitFinal}
                  className="px-8 py-3 bg-[#14532d] text-white rounded-lg hover:bg-[#0d2f1f]"
                >
                  Submit Proposal
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UmrahFormOnly;
