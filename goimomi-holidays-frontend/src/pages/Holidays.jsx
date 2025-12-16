import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ========== SAMPLE IMAGES FROM ASSETS ==========
import bhutanImg from "../assets/Package/Id1.png";
import vietnamImg from "../assets/Package/Id2.png";
import dubaiImg from "../assets/Package/Id3.png";
import singaporeImg from "../assets/Package/Id4.png";
import malaysiaImg from "../assets/Package/Id5.png";
import saudiArabiaImg from "../assets/Package/Id6.png";
import europeImg from "../assets/Package/Id7.png";
import ukImg from "../assets/Package/Id8.png";
import uzbekistanImg from "../assets/Package/Id9.png";
import nepalImg from "../assets/Package/Id10.png";
import cambodiaImg from "../assets/Package/Id11.png";
import turkeyImg from "../assets/Package/ID12.png";


const Holidays = () => {
  const navigate = useNavigate();

  // ===================== FILTER STATES =====================
  const [destination, setDestination] = useState("");
  const [nights, setNights] = useState("");
  const [startingCity, setStartingCity] = useState("");
  const [budget, setBudget] = useState([10000, 200000]);
  const [flightOption, setFlightOption] = useState("");

  // ===================== PACKAGE DATA =====================
  const [packages, setPackages] = useState([
    {
      id: 1,
      title: "Escape to Endless Blue – Maldives",
      days: 4,
      nights: 3,
      image: bhutanImg,
      price: 35999,
      oldPrice: 45000,
      startingCity: "Chennai",
      destination: "Maldives",
      groupSize: 8,
    },
    {
      id: 2,
      title: "A Romantic Escape in the Heart of Bali",
      days: 5,
      nights: 4,
      image: vietnamImg,
      price: 46973,
      oldPrice: 55000,
      startingCity: "Chennai",
      destination: "BALI",
      groupSize: 8,
    },
    {
      id: 3,
      title: "Dubai Extravaganza",
      days: 3,
      nights: 2,
      image: dubaiImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Dubai",
      groupSize: 8,
    },
      {
      id: 4,
      title: "Where Urban Meets Nature – Singapore",
      days: 5,
      nights: 4,
      image: singaporeImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Singapore",
      groupSize: 8,
    },
      {
      id: 5,
      title: "Nature, Heritage & Modern Marvels – Malaysia",
      days: 4,
      nights: 3,
      image: malaysiaImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Malaysia",
      groupSize: 8,
    },
      {
      id: 6,
      title: "A Journey Through Faith & Heritage | Saudi Arabia",
      days: 4,
      nights: 3,
      image: saudiArabiaImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Saudi Arabia",
      groupSize: 8,
    },
      {
      id: 7,
      title: "Romance Written in Every Street – Europe",
      days: 5,
      nights: 4,
      image: europeImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Europe",
      groupSize: 8,
    },
      {
      id: 8,
      title: "From London Lights to Highland Nights – UK",
      days: 4,
      nights: 3,
      image: ukImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "UNITED KINGDOM",
      groupSize: 8,
    },
      {
      id: 9,
      title: "Jewels of the Silk Road & Caucasus",
      days: 5,
      nights: 4,
      image: uzbekistanImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "UZBEKISTAN,AZERBAIJAN,GEORGIA",
      groupSize: 8,
    },
      {
      id: 10,
      title: "Two Kingdoms, One Spiritual Journey – Nepal & Bhutan",
      days: 3,
      nights: 2,
      image: nepalImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "NEPAL, BHUTAN",
      groupSize: 8,
    },
      {
      id: 11,
      title: "Three Nations, One Indochina Journey – Vietnam, Cambodia & Laos",
      days: 4,
      nights: 3,
      image: cambodiaImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "VIETNAM, CAMBODIA & LAOS",
      groupSize: 8,
    },
    {
      id: 12,
      title: "Cappadocia to Coastlines – Discover Turkey",
      days: 3,
      nights: 2,
      image: turkeyImg,
      price: 52161,
      oldPrice: 60000,
      startingCity: "Chennai",
      destination: "Turkey",
      groupSize: 8,
    },
  ]);

  // ===================== FILTERED LIST =====================
  const filtered = packages.filter((pkg) => {
    return (
      (destination ? pkg.destination === destination : true) &&
      (nights ? pkg.nights === Number(nights) : true) &&
      (startingCity ? pkg.startingCity === startingCity : true) &&
      pkg.price >= budget[0] &&
      pkg.price <= budget[1] &&
      (flightOption ? pkg.flight === flightOption : true)
    );
  });

  return (
    <div className="w-full flex bg-gray-50 min-h-screen">

      {/* ====================== LEFT FILTER PANEL ====================== */}
      <div className="w-[25%] bg-white shadow-md p-6 sticky top-0 h-screen overflow-y-auto">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>

        {/* DESTINATION */}
        <div className="mb-6">
          <label className="font-semibold">Destinations</label>
          <select
            className="w-full p-2 border rounded mt-2"
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">All</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Dubai">Dubai</option>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Europe">Europe</option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
            <option value="UZBEKISTAN,AZERBAIJAN,GEORGIA">UZBEKISTAN,AZERBAIJAN,GEORGIA</option>
            <option value="NEPAL, BHUTAN">NEPAL, BHUTAN</option>
            <option value="VIETNAM, CAMBODIA & LAOS">VIETNAM, CAMBODIA & LAOS</option>
            <option value="Turkey">Turkey</option>  
          </select>
        </div>

        {/* NIGHTS */}
        <div className="mb-6">
          <label className="font-semibold">Total Nights</label>
          <select
            className="w-full p-2 border rounded mt-2"
            onChange={(e) => setNights(e.target.value)}
          >
            <option value="">Any</option>
            <option value="2">2 Nights</option>
            <option value="3">3 Nights</option>
            <option value="4">4 Nights</option>
            <option value="5">5 Nights</option>
            <option value="6">6 Nights</option>
            <option value="7">7 Nights</option>
            <option value="8">8 Nights</option>
            <option value="9">9 Nights</option>
            <option value="10">10 Nights</option>
            <option value="11">11 Nights</option>
            <option value="12">12 Nights</option>
            <option value="13">13 Nights</option>
            <option value="14">14 Nights</option>
            <option value="15">15 Nights</option>
            <option value="16">16 Nights</option>
            <option value="17">17 Nights</option>
            <option value="18">18 Nights</option>
            <option value="19">19 Nights</option>
            <option value="20">20 Nights</option>
            <option value="21">21 Nights</option>
            <option value="22">22 Nights</option>
            <option value="23">23 Nights</option>
            <option value="24">24 Nights</option>
            <option value="25">25 Nights</option>
            <option value="26">26 Nights</option>
            <option value="27">27 Nights</option>
            <option value="28">28 Nights</option>
            <option value="29">29 Nights</option>
            <option value="30">30 Nights</option>
          </select>
        </div>

        {/* STARTING CITY */}
        <div className="mb-6">
          <label className="font-semibold">Starting City</label>
          <select
            className="w-full p-2 border rounded mt-2"
            onChange={(e) => setStartingCity(e.target.value)}
          >
            <option value="">Any</option>

            {/* ANDAMAN & NICOBAR */}
            <option value="Port Blair">Port Blair (IXZ)</option>

            {/* ANDHRA PRADESH */}
            <option value="Visakhapatnam">Visakhapatnam (VTZ)</option>
            <option value="Vijayawada">Vijayawada (VGA)</option>
            <option value="Tirupati">Tirupati (TIR)</option>
            <option value="Rajahmundry">Rajahmundry (RJA)</option>
            <option value="Kadapa">Kadapa (CDP)</option>
            <option value="Kurnool">Kurnool (KJB)</option>

            {/* ARUNACHAL PRADESH */}
            <option value="Itanagar">Itanagar (Hollongi) (HGI)</option>

            {/* ASSAM */}
            <option value="Guwahati">Guwahati (GAU)</option>
            <option value="Dibrugarh">Dibrugarh (DIB)</option>
            <option value="Jorhat">Jorhat (JRH)</option>
            <option value="Silchar">Silchar (IXS)</option>
            <option value="Tezpur">Tezpur (TEZ)</option>
            <option value="North Lakhimpur">North Lakhimpur (IXI)</option>

            {/* BIHAR */}
            <option value="Patna">Patna (PAT)</option>
            <option value="Gaya">Gaya (GAY)</option>
            <option value="Darbhanga">Darbhanga (DBR)</option>

            {/* CHHATTISGARH */}
            <option value="Raipur">Raipur (RPR)</option>
            <option value="Bilaspur">Bilaspur (PAB)</option>
            <option value="Jagdalpur">Jagdalpur (JGB)</option>

{/* DELHI */}
<option value="Delhi">Delhi (DEL)</option>

{/* GOA */}
<option value="Goa">Goa (Dabolim) (GOI)</option>
<option value="Mopa">Manohar Intl (Mopa) (GOX)</option>

{/* GUJARAT */}
<option value="Ahmedabad">Ahmedabad (AMD)</option>
<option value="Surat">Surat (STV)</option>
<option value="Vadodara">Vadodara (BDQ)</option>
<option value="Rajkot">Rajkot (RAJ)</option>
<option value="Bhavnagar">Bhavnagar (BHU)</option>
<option value="Jamnagar">Jamnagar (JGA)</option>
<option value="Bhuj">Bhuj (BHJ)</option>
<option value="Porbandar">Porbandar (PBD)</option>
<option value="Kandla">Kandla (IXY)</option>

{/* HARYANA */}
<option value="Hisar">Hisar (HSS)</option>

{/* HIMACHAL PRADESH */}
<option value="Shimla">Shimla (SLV)</option>
<option value="Kullu">Kullu–Manali (KUU)</option>
<option value="Dharamshala">Dharamshala (DHM)</option>

{/* JAMMU & KASHMIR */}
<option value="Srinagar">Srinagar (SXR)</option>
<option value="Jammu">Jammu (IXJ)</option>

{/* JHARKHAND */}
<option value="Ranchi">Ranchi (IXR)</option>
<option value="Deoghar">Deoghar (DGH)</option>

{/* KARNATAKA */}
<option value="Bangalore">Bangalore (BLR)</option>
<option value="Mangalore">Mangalore (IXE)</option>
<option value="Hubli">Hubli (HBX)</option>
<option value="Belgaum">Belgaum (IXG)</option>
<option value="Mysore">Mysore (MYQ)</option>
<option value="Kalaburagi">Kalaburagi (GBI)</option>

{/* KERALA */}
<option value="Kochi">Kochi (COK)</option>
<option value="Trivandrum">Trivandrum (TRV)</option>
<option value="Calicut">Calicut (CCJ)</option>
<option value="Kannur">Kannur (CNN)</option>

{/* LADAKH */}
<option value="Leh">Leh (IXL)</option>

{/* MADHYA PRADESH */}
<option value="Indore">Indore (IDR)</option>
<option value="Bhopal">Bhopal (BHO)</option>
<option value="Jabalpur">Jabalpur (JLR)</option>
<option value="Gwalior">Gwalior (GWL)</option>
<option value="Khajuraho">Khajuraho (HJR)</option>

{/* MAHARASHTRA */}
<option value="Mumbai">Mumbai (BOM)</option>
<option value="Pune">Pune (PNQ)</option>
<option value="Nagpur">Nagpur (NAG)</option>
<option value="Aurangabad">Aurangabad (IXU)</option>
<option value="Nashik">Nashik (ISK)</option>
<option value="Shirdi">Shirdi (SAG)</option>
<option value="Kolhapur">Kolhapur (KLH)</option>
<option value="Solapur">Solapur (SSE)</option>

{/* MANIPUR */}
<option value="Imphal">Imphal (IMF)</option>

{/* MEGHALAYA */}
<option value="Shillong">Shillong (SHL)</option>

{/* MIZORAM */}
<option value="Aizawl">Aizawl (AJL)</option>

{/* NAGALAND */}
<option value="Dimapur">Dimapur (DMU)</option>

{/* ORISSA */}
<option value="Bhubaneswar">Bhubaneswar (BBI)</option>
<option value="Jharsuguda">Jharsuguda (JRG)</option>
<option value="Rourkela">Rourkela (RRK)</option>

{/* PUNJAB */}
<option value="Amritsar">Amritsar (ATQ)</option>
<option value="Chandigarh">Chandigarh (IXC)</option>
<option value="Ludhiana">Ludhiana (LUH)</option>
<option value="Bathinda">Bathinda (BUP)</option>

{/* RAJASTHAN */}
<option value="Jaipur">Jaipur (JAI)</option>
<option value="Udaipur">Udaipur (UDR)</option>
<option value="Jodhpur">Jodhpur (JDH)</option>
<option value="Bikaner">Bikaner (BKB)</option>
<option value="Kota">Kota (KTU)</option>

{/* TAMIL NADU */}
<option value="Chennai">Chennai (MAA)</option>
<option value="Coimbatore">Coimbatore (CJB)</option>
<option value="Madurai">Madurai (IXM)</option>
<option value="Trichy">Trichy (TRZ)</option>
<option value="Salem">Salem (SXV)</option>
<option value="Tuticorin">Tuticorin (TCR)</option>

{/* TELANGANA */}
<option value="Hyderabad">Hyderabad (HYD)</option>

{/* TRIPURA */}
<option value="Agartala">Agartala (IXA)</option>

{/* UTTAR PRADESH */}
<option value="Lucknow">Lucknow (LKO)</option>
<option value="Varanasi">Varanasi (VNS)</option>
<option value="Prayagraj">Prayagraj (IXD)</option>
<option value="Kanpur">Kanpur (KNU)</option>
<option value="Gorakhpur">Gorakhpur (GOP)</option>

{/* UTTARAKHAND */}
<option value="Dehradun">Dehradun (DED)</option>
<option value="Pantnagar">Pantnagar (PGH)</option>

{/* WEST BENGAL */}
<option value="Kolkata">Kolkata (CCU)</option>
<option value="Bagdogra">Bagdogra (IXB)</option>
<option value="Durgapur">Durgapur (RDP)</option>
<option value="Cooch Behar">Cooch Behar (COH)</option>

          </select>
        </div>

        {/* BUDGET */}
        <div className="mb-6">
          <label className="font-semibold">Budget</label>
          <input
            type="range"
            min="10000"
            max="200000"
            value={budget[1]}
            onChange={(e) => setBudget([10000, Number(e.target.value)])}
            className="w-full mt-2"
          />
          <p className="text-sm mt-1">₹ {budget[0]} – ₹ {budget[1]}</p>
        </div>

        {/* FLIGHT OPTION */}
        <div className="mb-6">
          <label className="font-semibold">Flight Option</label>
          <select
            className="w-full p-2 border rounded mt-2"
            onChange={(e) => setFlightOption(e.target.value)}
          >
            <option value="">Any</option>
            <option value="With Flight">With Flight</option>
            <option value="Without Flight">Without Flight</option>
          </select>
        </div>
      </div>

      {/* ====================== RIGHT SIDE (PACKAGE LISTING) ====================== */}
      <div className="w-[75%] p-8">

        <h2 className="text-2xl font-bold mb-6">Holiday Packages</h2>

        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-md p-5 mb-6 flex gap-6 justify-between"
          >

            {/* IMAGE SECTION */}
            <div className="relative w-72">
              <img
                src={pkg.image}
                className="w-72 h-48 rounded-lg object-cover"
              />

              {/* Days badge */}
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {pkg.days} days
              </span>

              {/* Guaranteed Fixed Departure */}
              <span className="absolute bottom-2 left-2 bg-orange-600 text-white text-xs px-3 py-1 rounded">
                GUARANTEED FIXED DEPARTURE
              </span>
            </div>

            {/* MAIN DETAILS SECTION */}
            <div className="flex-1">

              <h3 className="text-xl font-semibold">{pkg.title}</h3>

              {/* LOCATION */}
              <p className="text-gray-600 text-sm mt-1">
                {pkg.startingCity} • {pkg.destination}
              </p>

              {/* BULLETS */}
              <ul className="text-gray-700 text-sm mt-3 space-y-1">
                <li>• Accommodation in all places as per itinerary</li>
                <li>• Daily Breakfast & Dinner included</li>
                <li>• All Tours and Transfers on private basis</li>
              </ul>

              

              {/* Departure info */}
              <div className="flex gap-12 mt-4 text-sm">
                <div>
                  <p className="text-gray-500">Departure Starting</p>
                  <p className="font-semibold">04 Jan 2026</p>
                </div>

                <div>
                  <p className="text-gray-500">Max. Group Size</p>
                  <p className="font-semibold">{pkg.groupSize}</p>
                </div>
              </div>
            </div>

            {/* PRICE & BUTTON */}
            <div className="text-right flex flex-col justify-between">

              <div>
                <p className="line-through text-gray-400 text-sm">
                  ₹ {pkg.oldPrice.toLocaleString()}
                </p>
                <p className="text-2xl font-bold">₹ {pkg.price.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">per person</p>
              </div>

              <button
                className="bg-[#14532d] text-white px-6 py-2 rounded-lg mt-4 text-sm"
                onClick={() => navigate(`/holiday/${pkg.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
