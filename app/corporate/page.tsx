import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Travel | Travel Services Limited',
  description:
    'Strategic travel management for PNG business leaders. Managed travel, charter & logistics, VIP services, and group movements from Travel Services Limited.',
};

const pillars = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8q0_ITKwWyERH_tUkfkV6cnY8InlOQN9k8ZL_aJvu8HliUz5u8ClUWR-eovZ7EZGZoDvIz8Bw3Yp1yozbFf2pUAvs1Rb9MHIolEsmTgq2oLaZJhUtAVVL09Stvkd-wndEcV0hOIgOcJ00Ksx_zILe6YgMWAw4e6277ygIPdGAivHITtKxmsWukIeLoBkKfX7xd3qq0iFxkE-hZAEfahnSZ9EjsrGMzoOSMJvr7i5dl8ky6y-cU4fdxS1MEbsGcXEZotrKKdf3YE0G',
    alt: 'Modern office desk with digital travel itinerary and passport',
    title: 'Managed Travel',
    desc: 'End-to-end booking systems integrated with strict corporate policy compliance for maximum efficiency.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD1c-Bks84Fa5UzpJTjxQKTMUNntM3jb_tCtb0xMJ46irbhUwdBxQK5lF3sHSUKCkPRAs6yHPyArqTeVHS2S1Rdhf67IqMyNaC-3MwayBjAyhlYb5s3T0n-4gEacwlEW7Ag91FKN5_MmIK_aNEIFJQVeMqEKpkMIEb-o6eJ2Jie9TeSH4zb8lAa6aMkg3YxlmcqQrx1mOrzuAUczo7ejcPEeU6LglghtT1erRF3SlR4YRDUBuvDBRxjT6E_pzlwUqBWJUzsXUh5gKk',
    alt: 'White helicopter landing on a remote Papua New Guinea highlands site',
    title: 'Charter & Logistics',
    desc: 'Bespoke private jet and helicopter solutions designed for rapid remote site access and mission-critical cargo.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB008GpdK7FSUhG9Ia3uaqwEetv0M66aJVkFLOUdEChm1oB5xixS-R3GiFguQVaGePE1vRkjFdk7biTZXAODQCQxpbYaXhw-qLZah7IeNSi_-K9HdKdk63rjP3O6BpXrOfUADNAY2QM4ANwSe60aw8OIXT50qP7Us2n9OZ6hfOXGLPaMLNvhAQKoqvCYXnF3tA9nxAjHO-VHWK81DY-_GN_JjpgkuxZKlTtQt4J80i0Dd3YdLq2RLXtCDoUO-_ws0rOc2O0gT9Ge-Sh',
    alt: 'Luxury black sedan with professional chauffeur outside modern airport terminal',
    title: 'VIP Services',
    desc: 'Exclusive luxury ground transportation and seamless airport fast-track services for executive-level comfort.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA14ShGmVXtBc_jstuqOCJgY5UUVpBOYKp89wfRZQZaMWumUMFOF6wfQj0zuhOpuIUxi4HZAoaU0D1R5DRaa6yzPDonuH29bcsmm0BujlvW_QwWpJ6MViXVqdh-da58ZZuA2bKJnbuBj0MlWQXgprYBQ2cA-SXCR5FxHdqMHmG437OTLWPeC7annTxz5sktEI_fUJq84luuX6a-uxMwZ6Ec-KFJh-Q1vHl1FK4ZYHUlGljrsnUL0vF5Uay1CRc08NrfIDUXj4BMUeiZ',
    alt: 'Large modern conference hall with executives engaged in high-level meeting',
    title: 'Group Movements',
    desc: 'Expert coordination for large-scale crew changes, international conferences, and specialized team deployments.',
  },
];

const benefits = [
  {
    icon: 'trending_down',
    title: 'Cost Optimization',
    desc: 'Advanced analytics to reduce travel spend without compromising quality.',
  },
  {
    icon: 'support_agent',
    title: '24/7 Dedicated Support',
    desc: 'Human-led assistance for emergencies and last-minute changes, anytime.',
  },
  {
    icon: 'public',
    title: 'Global Partner Network',
    desc: 'Strategic alliances with Amadeus and Lufthansa City Center for global reach.',
  },
  {
    icon: 'verified',
    title: 'Local Knowledge',
    desc: "Unrivaled expertise in PNG's unique logistical and cultural landscape.",
  },
];

export default function CorporatePage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-corporate-bg" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Strategic Travel Management for Papua New Guinea&apos;s Business Leaders.
            </h1>
            <p className="font-body-lg text-body-lg mb-10 text-white/90">
              Leveraging over 20 years of local expertise combined with a robust global network to deliver
              seamless, cost-effective corporate travel solutions across the Pacific and beyond.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-xl flex items-center gap-2 group w-fit"
            >
              Request a Corporate Proposal
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Pillars ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-label-sm tracking-widest uppercase">Our Expertise</span>
          <h2 className="font-headline-md text-headline-md mt-2 text-primary">
            Comprehensive Service Pillars
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:shadow-[0_12px_32px_rgba(0,43,73,0.08)] transition-all group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={pillar.src}
                  alt={pillar.alt}
                />
              </div>
              <div className="p-6">
                <h3 className="font-title-lg text-title-lg text-primary mb-2">{pillar.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-surface-container py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-8 leading-tight">
                Engineered for Reliability. Defined by Local Expertise.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        {b.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-primary">{b.title}</h4>
                      <p className="font-body-md text-on-surface-variant">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-DyKAAZ-4lnX3LTZuEBsHCOn-AP2ax6HvgbCD8k7iE-pVznu7oDk9IKabZV6Aysydr-fcVpOk1pa8dcIBHus1a5Xp1oo3HyOOoBezhJIoera-oH-aMm5VAGYBTj8x2paBqOmUurnuyxJ8g__DIjyvJyhkf7f8GelTGBJsJPgqgtQJ_n0i9QHsXFl2suwEASTvc-pzT-mnyyVE5xsqySMxddMxCFXW7tWVGd_k30o5XVvQX-HHed3enOpLdJZOk9upLh3XFyyrVtVr"
                  alt="Airplane wing cutting through clouds at high altitude"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-tertiary-container p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-on-tertiary-container font-headline-sm italic">
                  &ldquo;The benchmark for PNG travel logistics.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="text-on-surface-variant font-label-md uppercase tracking-widest mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 grayscale opacity-60">
          {[
            { icon: 'manufacturing', label: 'MINING CO.' },
            { icon: 'oil_barrel', label: 'ENERGY GLOBAL' },
            { icon: 'account_balance', label: 'PACIFIC BANK' },
            { icon: 'factory', label: 'INDUS PNG' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 font-bold text-xl text-on-surface">
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── Corporate Inquiry Form ── */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md mb-4">Partner with the Professionals</h2>
            <p className="text-white/70">
              Submit your requirements and our corporate travel consultants will reach out with a tailored
              strategy.
            </p>
          </div>
          <form className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-primary font-label-md mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border-outline-variant/30 rounded-lg p-3 text-on-surface bg-surface focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-primary font-label-md mb-2">Service Interest</label>
              <select className="w-full border-outline-variant/30 rounded-lg p-3 text-on-surface bg-surface focus:ring-secondary focus:border-secondary transition-all">
                <option>Managed Travel</option>
                <option>Charter &amp; Logistics</option>
                <option>VIP Services</option>
                <option>Group Movements</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-primary font-label-md mb-2">Number of Travelers</label>
              <input
                type="number"
                placeholder="Approx. annually"
                className="w-full border-outline-variant/30 rounded-lg p-3 text-on-surface bg-surface focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-primary font-label-md mb-2">Contact Email</label>
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full border-outline-variant/30 rounded-lg p-3 text-on-surface bg-surface focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg"
              >
                Submit Corporate Inquiry
              </button>
            </div>
          </form>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none" />
      </section>
    </main>
  );
}
