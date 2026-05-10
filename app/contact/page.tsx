import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Travel Services Limited',
  description:
    "Connect with PNG's premier travel experts. Corporate and leisure travel inquiries welcome. Located at Harbour City, Port Moresby.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAtPauh8_jX0GQdRI6FxxJkbNiWa1433zvmSC3psGfUfq8AQYt7rcoLYaZVLvNAuCaK4Dqz3DQEMxqd3hyl-ip4MSH9Z9HVEsy7pgRDccPSbe4bBrlwFRrbr3-ngFHin9mk1bni6UAhqBG7u_mJi3vNK49cgAmVHd9djLsoN66wIG7cAdWstvV2BtUIj5ZvCS_6OSYiiarEdmhcA3WxVwnQ_zve7uSR9FLbKQR0Z0vhQISoSrJTO5I0cN1rFEe-0ABb3g0V-rh4VT"
            alt="Luxurious aerial view of turquoise waters and lush green islands of Papua New Guinea"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
            Connect with PNG&apos;s Premier
            <br />
            Travel Experts
          </h1>
          <p className="font-body-lg text-white/90 max-w-2xl mx-auto">
            Experience unparalleled service and local expertise for your next journey, whether it&apos;s a
            critical corporate mission or a bespoke escape into paradise.
          </p>
        </div>
      </section>

      {/* ── Inquiry Cards ── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Corporate */}
          <div className="bg-white p-10 rounded-lg shadow-xl border border-outline-variant/20 group hover:border-secondary transition-all duration-500">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">business_center</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">
              Corporate Travel Solutions
            </h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Streamlined logistics, emergency support, and policy management for organizations requiring
              precision and reliability in the Pacific region.
            </p>
            <Link
              href="/corporate"
              className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
            >
              Inquire for Business <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Leisure */}
          <div className="bg-white p-10 rounded-lg shadow-xl border border-outline-variant/20 group hover:border-secondary transition-all duration-500">
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">beach_access</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">
              Bespoke Leisure Escapes
            </h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Tailor-made itineraries focusing on luxury, culture, and adventure. From private island
              retreats to cultural expeditions.
            </p>
            <Link
              href="/leisure"
              className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
            >
              Plan My Escape <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Our Locations</h2>
            <div className="space-y-8">
              {[
                {
                  icon: 'location_on',
                  title: 'Headquarters',
                  lines: ['SVS Foodland, Harbour City', 'Port Moresby, Papua New Guinea'],
                },
                {
                  icon: 'call',
                  title: 'Phone',
                  lines: ['+675 309 5400', '+675 320 2468'],
                },
                {
                  icon: 'mail',
                  title: 'Email',
                  lines: ['reservations@travelservices.com.pg', 'info@travelservices.com.pg'],
                },
                {
                  icon: 'schedule',
                  title: 'Office Hours',
                  lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary mb-1">{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line} className="font-body-md text-on-surface-variant">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden h-64 shadow-md bg-surface-container-high flex items-center justify-center">
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-6xl text-outline/40 mb-3 block">map</span>
              <p className="font-label-md text-on-surface-variant">
                SVS Foodland, Harbour City
                <br />
                Port Moresby, PNG
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-outline-variant/10">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-8">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+675..."
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant">
                Service Interest
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none bg-white">
                <option value="">Select a service</option>
                <option>Corporate Travel Solutions</option>
                <option>Bespoke Leisure Escapes</option>
                <option>Logistics &amp; Support</option>
                <option>Other Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Your Message</label>
              <textarea
                rows={4}
                placeholder="How can we assist you?"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-container transition-all shadow-lg active:scale-[0.98]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* ── Global Reach ── */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden">
          <span className="material-symbols-outlined" style={{ fontSize: '400px' }}>
            public
          </span>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md mb-4">Global Reach, Local Presence</h2>
            <p className="font-body-lg text-white/70 max-w-xl mx-auto">
              Leveraging world-class partnerships to provide seamless travel experiences anywhere on the
              globe.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <div className="flex flex-col items-center gap-4 group">
              <div className="h-16 flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-bold text-2xl tracking-wide">AMADEUS</div>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Strategic Partner
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="h-16 flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-bold text-xl tracking-wide">
                  LUFTHANSA CITY CENTER
                </div>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Network Partner
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
