import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Travel Services Limited',
  description:
    'Comprehensive travel services from Travel Services Limited — flights, hotels, holidays, car hire, cruises, rail passes, travel insurance, and coach tours.',
};

const services = [
  {
    icon: 'flight_takeoff',
    title: 'Flights',
    desc: 'Global air travel arrangements with preferred seating and priority booking privileges.',
  },
  {
    icon: 'hotel',
    title: 'Hotels',
    desc: 'Curated selection of luxury accommodations with exclusive amenities and corporate rates.',
  },
  {
    icon: 'beach_access',
    title: 'Holidays',
    desc: 'Bespoke holiday packages designed for ultimate relaxation and cultural immersion.',
  },
  {
    icon: 'directions_car',
    title: 'Car Hire',
    desc: 'Seamless mobility solutions with a premium fleet ranging from luxury sedans to 4x4s.',
  },
  {
    icon: 'directions_boat',
    title: 'Cruises',
    desc: 'Expedition and luxury cruising through the most stunning archipelagos in the Pacific.',
  },
  {
    icon: 'train',
    title: 'Rail Passes',
    desc: 'Scenic and high-speed rail travel across international borders with flexible scheduling.',
  },
  {
    icon: 'security',
    title: 'Travel Insurance',
    desc: 'Comprehensive protection for peace of mind, covering all medical and travel emergencies.',
  },
  {
    icon: 'directions_bus',
    title: 'Coach Tours',
    desc: 'Guided regional tours and efficient group logistics for corporate or social outings.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqfkrD6o00_D7JWm4kRZ-U-psbZpc1fzGBHupRfKPWHrDModAQ7lr8rXyZkz4yiRfgFP8kMxyu2PpPcwq2LWGbSagdN_Gl91Og1jSetcbYPsCOXeXo6UNYReCsSG3wLFH175wYBDo6GSBYIhTAp1MZ2pXMYPfkdyHoZb98zWMJB7pL0WlNRAqKA5__m0LNq8sX7EFM0VdCni_7b2jXPRptCOLPabCyJrpLT4oDtFCC7T77hrwVWObyL3By022ruQ8Zjvm54U8umML"
            alt="Luxurious seaplane docked in the crystal-clear turquoise waters of a remote Papua New Guinea lagoon"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-secondary-container/20 text-secondary-fixed-dim rounded-full font-label-sm text-label-sm uppercase tracking-widest mb-6">
              World-Class Solutions
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 leading-tight">
              Excellence in Every{' '}
              <br />
              <span className="text-secondary-fixed">Destination</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl leading-relaxed">
              From corporate logistics to bespoke leisure retreats, Travel Services Limited provides the
              most comprehensive range of travel solutions in Papua New Guinea and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services-grid"
                className="bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-4 rounded-xl font-title-lg text-title-lg hover:shadow-lg transition-all"
              >
                Explore Services
              </a>
              <Link
                href="/contact"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-title-lg text-title-lg backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                VIP Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Grid ── */}
      <section id="services-grid" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-4">
            Our Comprehensive Offerings
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-[0_12px_32px_rgba(0,43,73,0.08)] transition-all duration-500 flex flex-col items-start h-full"
            >
              <div className="w-14 h-14 bg-secondary-container/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary mb-3">{service.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                {service.desc}
              </p>
              <Link
                href="/contact"
                className="text-secondary font-label-md text-label-md flex items-center gap-2 group/link hover:underline"
              >
                Learn More{' '}
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Destination Specialists ── */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF4JXNUekZnvPAtjuRT1CKCGSnsN1xwdarEiQEIlg1dDffXcGlR-nnqXUA-cLJwAAvTGA06tK6jZpVciAzRsjBQbgeIaya-06krfchg8Ymy32lD_ryqIsSOppTR2O2HkHVobfJfwsJ5rZxNqh2qJSf6qYM4CO2azOoz35oY5ZWZWPYi1egwqVvPLHoA0mskD7P0v5WUC8S1d3jC3ap7iFy5nvwFlKCN8vifHqhWnVff7h-RZmWN-3_Z1uiFBji_cX0eUWtEv0GRMSY"
                  alt="Professional female travel consultant in a sleek modern office overlooking the Port Moresby skyline"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
              <div className="absolute bottom-10 left-10 right-10 glass-nav bg-white/70 p-6 rounded-2xl z-20 shadow-lg border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary/20" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/20" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary/20" />
                  </div>
                  <div className="font-label-md text-label-md text-primary">15+ Expert Consultants</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-6 leading-tight">
                Your Personal <br />
                <span className="text-secondary">Destination Specialists</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                At Travel Services Limited, we don&apos;t just book trips—we design experiences. Our team
                consists of seasoned destination specialists who bring years of local expertise and global
                knowledge to every itinerary.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  {
                    title: 'Designed Around You',
                    desc: 'Every service is tailored to your specific corporate policy or personal preference.',
                  },
                  {
                    title: 'Unrivaled Local Insight',
                    desc: 'Access to exclusive locations and experiences throughout Papua New Guinea.',
                  },
                  {
                    title: '24/7 Dedicated Support',
                    desc: 'Our concierge team is available around the clock to assist with any travel changes.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-primary">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="bg-primary text-white px-10 py-4 rounded-xl font-title-lg text-title-lg hover:bg-primary-container transition-all flex items-center gap-3 w-fit"
              >
                Meet Our Team <span className="material-symbols-outlined">group</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="bg-primary p-12 md:p-20 rounded-[40px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-container rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">
              Ready to start your journey?
            </h2>
            <p className="font-body-lg text-body-lg text-white/70 mb-12 max-w-2xl mx-auto">
              Contact our concierge team today for a customized consultation that fits your travel needs
              perfectly.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-xl font-title-lg text-title-lg hover:shadow-xl transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-title-lg text-title-lg backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Call Our Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
