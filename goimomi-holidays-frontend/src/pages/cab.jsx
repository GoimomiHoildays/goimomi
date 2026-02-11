import React, { useState } from "react";
import CabCruiseForm from "../components/CabCruiseForm";

const Cab = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=2000&auto=format&fit=crop')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Premium Cab Services <br />
            <span
              className="bg-clip-text text-transparent bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449130017114-15cdd33e70fd?q=80&w=2000&auto=format&fit=crop')",
                WebkitBackgroundClip: "text",
                display: "inline-block",
                padding: "0.1em 0"
              }}
            >
              For Your Comfort
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Experience hassle-free travel with our professional drivers and well-maintained fleet.
            From airport transfers to local sightseeing, we've got you covered.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#14532d] hover:bg-[#0f4a24] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
          >
            <span>Book Your Cab Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Professional Drivers",
              desc: "Experienced, licensed, and courteous drivers for a safe journey.",
              icon: "👨‍✈️"
            },
            {
              title: "24/7 Availability",
              desc: "Booking assistance and service available round the clock.",
              icon: "⏰"
            },
            {
              title: "Clean & Sanitized",
              desc: "Vehicles are meticulously cleaned for your safety and comfort.",
              icon: "✨"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CabCruiseForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        type="Cab"
      />

    </div>
  );
};

export default Cab;
