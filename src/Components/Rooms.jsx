import { useState, useEffect } from 'react';
import { motion as Motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { api } from '../services/api';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const result = await api.getRooms();
        setRooms(result.data);
      } catch (err) {
        setError('Failed to load rooms');
        console.error('Error fetching rooms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const amenities = [
    "Rooftop infinity pool and evening lounge",
    "24/7 concierge and luxury airport pickup",
    "Wellness spa, sauna, and fitness studio",
    "High-speed WiFi and smart in-room control",
    "Complimentary breakfast with fresh seasonal menu",
    "In-room dining and personalized chef recommendations",
    "Kids activity lounge with guided sessions",
  "Premium event hall for weddings and corporate evenings",
];

const stories = [
  {
    text: "The service was exceptional from check-in to checkout. The room felt calm, modern, and truly premium.",
    name: "Ayesha K. - Karachi",
  },
  {
    text: "Loved the rooftop vibe and dining. Staff handled every request quickly and politely. Highly recommended.",
    name: "Fahad R. - Lahore",
  },
  {
    text: "Perfect for our anniversary. The suite was spacious, clean, and had everything we needed for a romantic getaway.",
    name: "Sara & Ahmed - Islamabad",
  },
];

const faqItems = [
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 24 hours before check-in for most room types.",
  },
  {
    q: "Do you offer airport pickup?",
    a: "Yes, premium pickup and drop-off is available on request.",
  },
  {
    q: "Is breakfast included in all plans?",
    a: "Breakfast is complimentary in most packages, details shown at booking.",
  },
  {
    q: "Can I book for events and private dinners?",
    a: "Yes, we host corporate events, celebrations, and private terrace dinners.",
  },
];

  return (
    <>
      <SectionReveal id="rooms" className="relative mx-auto w-full max-w-7xl px-6 py-22 sm:px-10">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Signature Rooms</p>
          <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">Choose Your Premium Stay</h2>
        </div>
        
        {loading && (
          <div className="text-center py-10">
            <p className="text-slate-300">Loading rooms...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-10">
            <p className="text-red-300">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.id}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-200/40 hover:shadow-[0_14px_28px_rgba(0,0,0,0.3)]"
              >
                <p className="text-xs text-amber-200">{room.tag}</p>
                <h3 className="mt-2 text-xl text-white">{room.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{room.description}</p>
                <p className="mt-5 text-sm text-amber-200">{room.price}</p>
                {room.amenities && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </SectionReveal>

      <SectionReveal id="amenities" className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
        <div className="rounded-3xl border border-white/15 bg-slate-900/55 p-7 backdrop-blur-md sm:p-10">
          <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Hotel Amenities</p>
          <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">Comfort Designed Around You</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {amenities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition-all duration-200 hover:border-amber-200/35 hover:bg-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="stories" className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Guest Stories</p>
          <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">What Our Guests Say</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200/35"
            >
              <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
              <p className="mt-4 text-xs text-amber-200">{item.name}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="faq" className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
        <div className="rounded-3xl border border-white/15 bg-slate-900/55 p-7 backdrop-blur-md sm:p-10">
          <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Quick Answers</p>
          <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-200 hover:border-amber-200/35 hover:bg-white/8"
              >
                <h3 className="text-sm text-white">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
