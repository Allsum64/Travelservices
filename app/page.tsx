import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4VSooUMaxAVf2l47MZXYoHlH1rpURD6n8FmkYD54hcedtcNNK2SlTbVLeOjKxnfQE712wXGeAwWnGNwMHbvAc7YdCOcEtpFAQ40fJXbyz024TJDy9Plx_GJSnTqXv7kEjTFWNvseSI7gp6_PcJAWtU2Eob5G_IDTz3a20T1ZPlXuWC2QOnZ7VJ3naXgiXN1oYKdR3CEy3y0adHkZ6XOwoRSjsp8GtHa1zd8kV0lS1ttLdZQ3T0O6oVbV2eqFs-1IGJFliPEgNk0Pt"
            alt="Aerial view of the Papua New Guinea coastline featuring vibrant turquoise coral reefs meeting deep azure ocean waters"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Your Premier Gateway to Papua New Guinea and Beyond
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl">
              Experience unparalleled travel expertise with PNG&apos;s largest agency. Corporate, leisure,
              and logistics solutions tailored to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2 group"
              >
                Start Your Journey
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/40 backdrop-blur-md bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Search Overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Where to?</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                    location_on
                  </span>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-secondary text-on-surface"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Travelers</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                    group
                  </span>
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-secondary text-on-surface appearance-none">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Group (5+)</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Service Type</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                    flight
                  </span>
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-secondary text-on-surface appearance-none">
                    <option>Flights + Hotels</option>
                    <option>Corporate Logistics</option>
                    <option>Leisure Charter</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-primary text-white h-[52px] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-md">
                  <span className="material-symbols-outlined">search</span>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="pt-48 pb-20 px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-md text-label-md mb-6">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Established since 2003
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-8 leading-tight">
                Over Two Decades of Exceptional Travel Expertise
              </h2>
              <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                <p>
                  Travel Services Limited (TSL) is Papua New Guinea&apos;s largest travel agency, offering
                  bespoke services to both the corporate and leisure markets. Founded by industry veterans,
                  we combine local nuance with global standards.
                </p>
                <p>
                  With over half a century of combined leadership experience, TSL is uniquely positioned to
                  offer you exceptional personal service for your travel requirements, no matter the
                  complexity of the itinerary.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold text-4xl mb-2">50+</div>
                  <div className="font-label-sm text-on-surface-variant uppercase">Combined Years Experience</div>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-outline-variant/30">
                  <div className="text-secondary font-bold text-4xl mb-2">#1</div>
                  <div className="font-label-sm text-on-surface-variant uppercase">Largest Agency in PNG</div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
                >
                  Learn Our Story <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1a1Hn8-URuqGA_Mf-vQJpNnkTIyNekQG_tZO7QyAfEm71nreG7u6u41JYSo09fuONkFbTuwNlsFvQyPEfkGOfXOyeDS7P_ETidQYDvThrk7v09nk_v0ls-mmFu0qavs26Wy6djSgupmcqGafZVdybxg9pCK4mS6blyhw0gYqDuZPZ1gOmOQYpXGZlz4IpG9eCET_sJ7sDykyLukyoJEZWLo5D36kQ4W_askBM9SPDaNF1LaV7WRzTx4QP4zscE4dVHET0cpQHwFD-"
                  alt="Professional travel consultant in a modern Port Moresby office"
                />
                <div className="absolute bottom-6 right-6 left-6 p-6 glass-nav rounded-2xl border border-white/30">
                  <p className="text-primary italic font-medium">
                    &ldquo;Our mission is to make travel in the Pacific seamless, professional, and unforgettable.&rdquo;
                  </p>
                </div>
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed rounded-full -z-10 blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Specialised Services</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Tailored travel management solutions designed to meet the demands of modern professionals and
              explorers alike.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Travel */}
            <div className="group bg-surface-bright rounded-2xl p-8 border border-outline-variant/30 hover:border-secondary transition-all hover:shadow-xl relative overflow-hidden">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-4xl">business_center</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-4 text-primary">Corporate Travel</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                High-touch management for business professionals. From flight coordination to VIP ground
                transport.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  24/7 Account Management
                </li>
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Cost Optimisation
                </li>
              </ul>
              <Link href="/corporate" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>

            {/* Leisure Travel */}
            <div className="group bg-surface-bright rounded-2xl p-8 border border-outline-variant/30 hover:border-secondary transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-4xl">beach_access</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-4 text-primary">Leisure Travel</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Curated holiday experiences and local PNG tours. We turn dream destinations into reality.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Custom Itineraries
                </li>
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Luxury PNG Cruises
                </li>
              </ul>
              <Link href="/leisure" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Explore Tours <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>

            {/* Logistics & Charter */}
            <div className="group bg-surface-bright rounded-2xl p-8 border border-outline-variant/30 hover:border-secondary transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-4xl">airplanemode_active</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-4 text-primary">Logistics &amp; Charter</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Complex travel and transport coordination including private jet and helicopter charters.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Remote Site Access
                </li>
                <li className="flex items-center gap-2 text-label-md font-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Group Movements
                </li>
              </ul>
              <Link href="/services" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View Logistics <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop tropical-gradient">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'support_agent', title: '24/7 Support', desc: 'Always here for emergencies' },
              { icon: 'map', title: 'Local Expertise', desc: 'Unrivaled knowledge of PNG' },
              { icon: 'public', title: 'Global Reach', desc: 'Partnered with world leaders' },
              { icon: 'verified', title: 'Proven Reliability', desc: 'Trust built since 2003' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                </div>
                <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                <p className="text-label-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destination Highlights ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Discover Papua New Guinea
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                From the rugged Highlands to the untouched islands of the Bismarck Sea, explore the last
                frontier.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/leisure"
                className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all font-label-md"
              >
                View All
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbENCtxb27ZpqO9HSHs6cer-ce4P6iOCbjyuijom6A9MKECEdsx8NxI1d0voiP_PXFpj7RpJotYKeP6fEQkN5QwEQj6BUruTEDos7cM3e7bJxpHwAIWo5F7I_yL8IycjbhRo2MV7iY1w4Rzxx7lLQv9m5VdVR5LcWSEJijMu83MbeYgPOJAiO7q6VmmR1IhWMzXL4I6MXqSVhyuJflA7SRbm19zY2giQqE1tEzsyv1eZBZOo8eLFci8sbexvLvDtnjqzRqNrNHMTg9',
                alt: 'Majestic Highlands of Papua New Guinea',
                tag: 'Adventure',
                title: 'Mount Hagen',
                desc: 'Experience the vibrant cultural festivals and dramatic volcanic peaks of the Western Highlands.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVgOWh19ny9s0xNw_8xqMGdGbs2tay-t3KCMFJae2UzDggkVLXm1aR1eNkB4BHowLKRZYuy-U3328oyKfwfZ5cATae5vC7N6aohDMdtxqOsAbUurNIUSYa_OeeYimrU71-UEZz9o1Z8AjWkDfEyWu9SiE58LLXGs9g4RX4J08HrlrkwBu_oNbmwKmGjW9yLzjhixTT3NfRo0alTAok2WzMMYebq5tXZUbMYLhBWnA66COW_3pbL8UEigLLlnH_hTeth0FxXB4yTQj1',
                alt: 'Pristine turquoise lagoon in New Ireland province',
                tag: 'Coastal Luxury',
                title: 'Kavieng',
                desc: 'World-class diving and surfing on the edge of the Pacific Ocean in a tropical paradise.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAte-20hxcbdnRA9kzw1LbSbo9vcmgjOJRas1W3mbX2i6LykiZXub7nGMZVRPSZoeBO3_olQTlD7XGM8drednCMFu2m5qR82MKFLYkjU3Hn7-6l_HHZxcir9SZsP0EzS39VVjA9XyAkaCFo7Fdpcixw-Q-zrvQYkxBps_QnvfwbcDSUELfRsVODCCnG8yugBsbJUnCJ0Imce4HYxSIrZOKpkBEKXqjf53Bpt5Nq_VUDl3qOE5C-pQOOUV81rMn6ZciNb7uqSsKFgNlU',
                alt: "Sunset over Port Moresby Harbour",
                tag: 'Business Hub',
                title: 'Port Moresby',
                desc: "PNG's dynamic capital, combining corporate efficiency with traditional Melanesian heritage.",
              },
            ].map((dest) => (
              <div key={dest.title} className="relative rounded-3xl overflow-hidden group h-[500px]">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={dest.src}
                  alt={dest.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <span className="bg-secondary/80 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm mb-4 inline-block">
                    {dest.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm mb-2">{dest.title}</h3>
                  <p className="opacity-80 line-clamp-2">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA / Contact ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
                Ready to Plan Your Next Journey?
              </h2>
              <p className="font-body-lg text-body-lg mb-10 opacity-80">
                Whether you need a complex corporate charter or a family getaway to a remote island, our
                experts are ready to assist you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="font-label-sm uppercase opacity-60">Call Us Today</p>
                    <p className="font-title-lg">+675 309 5400 / +675 320 2468</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">mail</span>
                  </div>
                  <div>
                    <p className="font-label-sm uppercase opacity-60">Email Inquiries</p>
                    <p className="font-title-lg">reservations@travelservices.com.pg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-on-surface shadow-2xl">
              <h3 className="font-headline-sm text-headline-sm mb-6 text-primary">Quick Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-sm text-on-surface-variant block mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border-outline-variant focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="font-label-sm text-on-surface-variant block mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full rounded-xl border-outline-variant focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label-sm text-on-surface-variant block mb-1">Inquiry Type</label>
                  <select className="w-full rounded-xl border-outline-variant focus:ring-secondary focus:border-secondary">
                    <option>Corporate Travel</option>
                    <option>Leisure / Tour</option>
                    <option>Charter Request</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-sm text-on-surface-variant block mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border-outline-variant focus:ring-secondary focus:border-secondary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg uppercase tracking-wider text-sm"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
