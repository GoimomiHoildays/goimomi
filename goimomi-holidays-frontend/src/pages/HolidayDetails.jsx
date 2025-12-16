import React, { useState } from "react";
import { useParams } from "react-router-dom";

// sample image imports
import bali1 from "../assets/TravelGallery/turkey.png";
import bali2 from "../assets/TravelGallery/usa.png";
import bali3 from "../assets/TravelGallery/card4.png";

const HolidayDetails = () => {
  const { id } = useParams();
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  const packages = [
    {
      id: 1,
      title: "Amazing Bhutan",
      days: 8,
      nights: 7,
      price: 35999,
      oldPrice: 40000,
      headerImage: bali1,
      itinerary: [
        { day: "Day 01 - Arrival", description: "Arrival in Bhutan", image: bali2 },
        { day: "Day 02 - Thimphu Tour", description: "Thimphu Sightseeing", image: bali3 },
        { day: "Day 03 - Punakha", description: "Punakha Valley", image: bali1 },
        { day: "Day 04 - Paro Tour", description: "Paro City Tour", image: bali2 },
        { day: "Day 05 - Tiger's Nest", description: "Tiger's Nest Hike", image: bali3 },
        { day: "Day 06 - Chele La Pass", description: "Scenic mountain pass", image: bali1 },
        { day: "Day 07 - Leisure", description: "Free day to explore", image: bali2 },
        { day: "Day 08 - Departure", description: "Return journey" }
      ],
      inclusions: ["Accommodation", "Breakfast", "Transfers", "Sightseeing", "Round-trip Flight"],
      exclusions: ["Lunch & Dinner", "Personal Expenses"]
    },

    {
      id: 2,
      title: "Vietnam Adventure Quest",
      days: 7,
      nights: 6,
      price: 46973,
      oldPrice: 52000,
      headerImage: bali2,
      itinerary: [
        { day: "Day 01 - Arrival", description: "Arrival in Ho Chi Minh", image: bali1 },
        { day: "Day 02 - Cu Chi", description: "Cu Chi Tunnels", image: bali3 },
        { day: "Day 03 - Mekong", description: "Mekong Delta", image: bali2 },
        { day: "Day 04 - Da Nang", description: "Fly to Da Nang", image: bali1 },
        { day: "Day 05 - Hoi An", description: "Hoi An Ancient Town", image: bali3 },
        { day: "Day 06 - Ba Na Hills", description: "Golden Bridge tour", image: bali2 },
        { day: "Day 07 - Departure", description: "Return journey" }
      ],
      inclusions: ["Hotels", "Domestic Flights", "Tours", "Breakfast"],
      exclusions: ["International Flights", "Visa", "Tips"]
    },

    {
      id: 3,
      title: "Dubai Extravaganza",
      days: 6,
      nights: 5,
      price: 52161,
      oldPrice: 60000,
      headerImage: bali3,
      itinerary: [
        { day: "Day 01 - Arrival", description: "Arrival in Dubai", image: bali1 },
        { day: "Day 02 - City Tour", description: "City Tour & Burj Khalifa", image: bali2 },
        { day: "Day 03 - Desert Safari", description: "Evening desert safari", image: bali3 },
        { day: "Day 04 - Abu Dhabi", description: "Abu Dhabi Grand Mosque tour", image: bali1 },
        { day: "Day 05 - Miracle Garden", description: "Visit Miracle Garden", image: bali2 },
        { day: "Day 06 - Departure", description: "Return journey" }
      ],
      inclusions: ["Hotel Stay", "Daily Breakfast", "Visa", "Tours", "Round-trip Flight"],
      exclusions: ["Tourism Dirham Fee", "Personal Expenses"]
    }
  ];

  const pkg = packages.find((p) => p.id === Number(id)) || packages[0];

  return (
    <div className="w-full bg-gray-50 pb-20">

      {/* HEADER IMAGE */}
      <img src={pkg.headerImage} className="w-full h-[430px] object-cover" />

      <div className="w-[85%] mx-auto mt-10 flex gap-10">

        {/* LEFT CONTENT */}
        <div className="w-[65%]">
          <h1 className="text-4xl font-bold mb-6">{pkg.title}</h1>

          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>

          {/* =================== DROPDOWN ITINERARY =================== */}
          {pkg.itinerary.map((item, index) => (
            <div key={index} className="mb-4">

              {/* DAY HEADER BUTTON */}
              <button
                onClick={() => toggleDay(index)}
                className="w-full flex justify-between items-center bg-gray-100 px-6 py-4 rounded-xl shadow-md text-left hover:bg-gray-200 transition"
              >
                <span className="text-lg font-semibold">{item.day}</span>
                <span className="text-xl">{openDay === index ? "▲" : "▼"}</span>
              </button>

              {/* CONTENT */}
              {openDay === index && (
                <div className="bg-white p-5 shadow-md rounded-xl border mt-2">

                  {item.image && (
                    <img
                      src={item.image}
                      className="w-full h-52 object-cover rounded-xl mb-4"
                    />
                  )}

                  <p className="text-gray-700">{item.description}</p>
                </div>
              )}
            </div>
          ))}

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-xl font-bold mb-3">Inclusions</h3>
              {pkg.inclusions.map((inc, i) => (
                <p key={i} className="text-gray-700 mb-1">• {inc}</p>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Exclusions</h3>
              {pkg.exclusions.map((exc, i) => (
                <p key={i} className="text-gray-700 mb-1">• {exc}</p>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PRICE CARD */}
        <div className="w-[35%] sticky top-10 bg-white shadow-xl rounded-2xl p-6 h-fit">
          <p className="line-through text-gray-400 text-lg">₹ {pkg.oldPrice}</p>
          <p className="text-3xl font-bold text-[#14532d]">₹ {pkg.price}</p>
          <p className="text-gray-500 mt-2">{pkg.nights}N / {pkg.days}D</p>

          <button className="w-full bg-[#14532d] text-white py-3 rounded-xl mt-6 text-lg">
            Enquire Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default HolidayDetails;
