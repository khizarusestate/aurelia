import { useState } from 'react';
import { motion as Motion } from "framer-motion";
import { BRAND, CONTACT, NAVIGATION } from '../config/constants';
import NavigationList from '../Components/ui/NavigationList';
import NavLink from '../Components/ui/NavLink';
import { api } from '../services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    setSubscribeStatus('');

    try {
      await api.subscribeToNewsletter(email);
      setSubscribeStatus('success');
      setEmail('');
    } catch {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-blue-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="heading-font text-3xl text-white">{BRAND.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {BRAND.description}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-amber-200/80 uppercase">Explore</p>
          <NavigationList className="mt-4 flex-col gap-2 text-sm" />
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-amber-200/80 uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a href={`tel:${CONTACT.phone}`} className="transition-colors duration-200 hover:text-amber-200">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors duration-200 hover:text-amber-200">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-amber-200"
              >
                {CONTACT.location}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-amber-200/80 uppercase">Newsletter</p>
          <p className="mt-4 text-sm text-slate-400">
            Get special offers and seasonal stay packages.
          </p>
          
          {subscribeStatus === 'success' && (
            <div className="mt-2 text-xs text-green-300">
              Successfully subscribed!
            </div>
          )}
          
          {subscribeStatus === 'error' && (
            <div className="mt-2 text-xs text-red-300">
              Failed to subscribe. Try again.
            </div>
          )}
          
          <form onSubmit={handleNewsletterSubmit} className="mt-4 flex rounded-full border border-white/20 bg-white/5 p-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full bg-transparent px-3 text-xs text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="rounded-full bg-amber-400 px-4 py-2 text-xs text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_10px_20px_rgba(251,191,36,0.35)] disabled:opacity-50"
            >
              {isSubscribing ? 'Joining...' : 'Join'}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        Copyright 2026 {BRAND.name} Grand Hotel. All rights reserved.
      </div>
    </footer>
  );
}
