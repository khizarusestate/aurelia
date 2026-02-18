import { useState } from 'react';
import SectionReveal from "./SectionReveal";
import NavLink from '../components/ui/NavLink';
import { api } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await api.sendBookingRequest(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        checkIn: '',
        checkOut: '',
        roomType: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionReveal
      id="contact"
      className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-24 sm:px-10"
    >
      <div className="rounded-3xl border border-white/15 bg-slate-900/65 p-8 backdrop-blur-xl sm:p-10">
        <p className="text-[10px] tracking-[0.3em] text-amber-200/75 uppercase">Plan Your Stay</p>
        <h2 className="heading-font mt-2 text-3xl text-white sm:text-4xl">Ready To Book Your Next Escape?</h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-300">
          Share your travel dates and our team will prepare the best room and experience package
          for you.
        </p>

        {submitStatus === 'success' && (
          <div className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200">
            Booking request sent successfully! We'll contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
            Failed to send booking request. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400/50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400/50"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400/50"
            />
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-amber-400/50"
            >
              <option value="">Select Room Type</option>
              <option value="Deluxe King">Deluxe King</option>
              <option value="Family Wing">Family Wing</option>
              <option value="Executive Class">Executive Class</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-amber-400/50"
            />
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-amber-400/50"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional messages or requirements..."
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400/50"
          />

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-amber-400 px-7 py-3 text-sm font-medium text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_12px_24px_rgba(251,191,36,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Book Now'}
            </button>
            <NavLink href="#rooms" variant="secondary" className="px-7 py-3 text-sm">
              View Room Plans
            </NavLink>
          </div>
        </form>
      </div>
    </SectionReveal>
  );
}
