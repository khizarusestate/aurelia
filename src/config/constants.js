export const BRAND = {
  name: 'Aurelia',
  tagline: 'Grand Collection',
  description: 'Premium hospitality with timeless comfort, curated experiences, and modern luxury.',
  subTagline: 'Modern Luxe Stay'
};

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Contact', href: '#contact' }
];

export const CONTACT = {
  phone: '+923277522098',
  email: 'info@Aurelia@gmail.com',
  location: 'Gujrawanala, Punjab, Pakistan',
  mapsUrl: 'https://maps.google.com/?q=Gujrawanala,+Punjab,+Pakistan'
};

export const ANIMATIONS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0 }
  }
};

export const BUTTON_STYLES = {
  primary: 'rounded-full bg-amber-400 px-5 py-2.5 text-xs font-medium tracking-wide text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_12px_24px_rgba(251,191,36,0.35)] sm:px-6',
  secondary: 'rounded-full border border-white/35 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_8px_18px_rgba(255,255,255,0.12)]',
  link: 'transition-colors duration-200 hover:text-amber-200'
};
