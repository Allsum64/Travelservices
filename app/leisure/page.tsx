import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leisure Packages | Travel Services Limited',
  description:
    'Unforgettable journeys through the last frontier. Coastal luxury, cultural immersion, and rugged adventure packages in Papua New Guinea from Travel Services Limited.',
};

const packages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7vFIuICGSgBCiRBjk-FRNaT5WIYWlo8TjMGSY8jXTqs1xoWqV7Cr5HGLhs0y0QCtShvjJbD0j6fKPmj5rKH_MbgoYsDOWmwPVfwhhpFu_dgmnXExMmwvd9kpy473t2YGC4Mlh0yQ6rbOovfccgO-JbNfrgpUI28lHaxGl_pDgE2QDQZa7-G_muu7U8upX_llik2vCKJ4FYvct4LSon6aSB6J2IKX6Xj4LddvrMexSHYamRNZA7IJo73RTSQW6K0Kn-HVzvi3JoyhC',
    alt: 'Traditional canoe navigating lush winding tributaries of the Sepik River',
    tag: 'Culture & Nature',
    duration: '10 Days',
    title: 'Sepik River Discovery',
    desc: "Journey into the heart of PNG's cultural center, exploring spirit houses and ancient traditions.",
    price: '$4,250',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMMSuJ6DB6sdA3GWaYK2hfUX_ywhzcYrlen6yuUjv72PZmjaiu9-9mf5dIA8yfTdzvtCgUgzVpaGsU72NZzpF9U92mVvLFb6DyLOSgprwxz1BaM22ZSJGNpDS4UtpK-dpeBtcLqMvr94LvMcuQlosP-H16eGZHJvJsv73AS5Pinxx7JgvEvJuaC6e4OoH0W_r7mbHAZRssfhj3CGNYd9bblNc_KD-UFJ83Lg_-awFQeVbwxy_KlnuwNGn_2U8drUR3YMuwQBHsUgO',
    alt: 'Group of trekkers silhouetted against spectacular sunrise on misty mountain ridge',
    tag: 'Adventure',
    duration: '8 Days',
    title: 'Kokoda Trail Trek',
    desc: 'Walk in the footsteps of history through challenging terrain and rewarding mountain vistas.',
    price: '$3,800',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyNXSzSFoAy5T9AmN1BW5f7o0Kx2hniIQW-bOfNa38IbotAJavCoNPLs9ZCcNqHc0S52zUS7v1n7QAouOjZqv2PAYKlY1mH3Qc-0y3atXJAIbMU5G6fQ9IdC-QEgiMSDS1nlMBvJD1LxpxnfQraEdXPDU2cI_PbNqNsbg9W55xuVvunee1LfCV1VaUSma1SzECxeNv3Ddf4JUhrfExWvMNubzwU_TXCf21OTeLBSF1vUW8M1lNdXs3qr9xqx8SYqluXbXTDTDxmCY',
    alt: 'Vibrant healthy coral gardens and tropical fish in the Bismarck Sea',
    tag: 'Marine Luxury',
    duration: '12 Days',
    title: 'Bismarck Sea Expedition',
    desc: "A luxurious private cruise visiting remote atolls and the world's most bio-diverse reefs.",
    price: '$7,500',
  },
];

export default function LeisurePage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative h-[819px] w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-RmKJj2g4j3LoM2KIxknxv1e7C0Pbkg--1GnDZYxo1mhBpFkzHBQ7c6dPLcT-z9aOAiS5aYGd9gO45VzHboe9a55QADFWkL8mVei7s0Fn7GPfoypinlJiHGazJWO4osqqL532ZqAzc0ltUJxX8WgcfY08Hx_yjEaxWq0mWasruGYcYed8qWiPVwn-x2Q0b_SyhyoSatJtOJvpCA-NbeAsEtANN2rdP8Lc1w-U00SrlQFtXtNVkAD6YCXAOwI4ve9lHHKgX1UaLoY2"
          alt="Breathtaking aerial view of a pristine tropical island in Papua New Guinea surrounded by turquoise coral reefs"
        />
        <div
          className="absolute inset-0 flex items-end pb-24 px-margin-mobile md:px-margin-desktop"
          style={{
            background: 'linear-gradient(0deg, rgba(0,22,41,0.7) 0%, rgba(0,22,41,0) 100%)',
          }}
        >
          <div className="max-w-container-max mx-auto w-full">
            <span className="inline-block px-4 py-1 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 text-secondary-container rounded-full font-label-sm mb-6 uppercase tracking-widest">
              Premium Leisure
            </span>
            <h1 className="font-display-lg text-white max-w-3xl mb-6">
              Unforgettable Journeys Through the Last Frontier
            </h1>
            <p className="font-body-lg text-white/90 max-w-xl">
              From the emerald peaks of the Highlands to the hidden atolls of the Bismarck Sea, we curate
              bespoke experiences for the discerning traveler.
            </p>
          </div>
        </div>
      </section>

      {/* ── Experience Categories ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-md text-primary mb-4">Choose Your Rhythm</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Discover Papua New Guinea through our meticulously crafted travel pillars, each designed to
            offer a unique perspective on our extraordinary nation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Coastal Luxury – large */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden group luxury-card-shadow min-h-[300px] md:min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX22V3vBQrU2xPYOrMdpXdi95GXcbWr5mYz5UeKkxFkzfpSWOT3DEQAEVP45Bhf9gUJTSczo_cWe9-rwjtbEpXnt0ZRc-I9E2Vn3TOo2J2emCE9g4iH7XzW1Dej5PQEHvighIuDAljRm9py2OXKVZAL6FCPZOpbosqwOVfe8COqPT8ZbnrYtr8IMmZAi6nIygfKwiNlz_HFeB3UYBSnKXL6XgHMdq0AwAzGhbyMyi6QGn4XQCKBbBGXo3iW0d3gkbOLvuqkH26-JXX"
              alt="Luxury yacht anchored in a secluded crystal-clear lagoon in Papua New Guinea"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-12 flex flex-col justify-end">
              <h3 className="font-headline-sm text-white mb-2">Coastal Luxury</h3>
              <p className="text-white/80 font-body-md max-w-md">
                Private yacht expeditions, world-class diving at Kimbe Bay, and exclusive island retreats
                for ultimate seclusion.
              </p>
            </div>
          </div>

          {/* Cultural Immersion */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden group luxury-card-shadow min-h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhsKRpke9D-4LbC5h36DfVDIDg8biqOExhAC6WPSGpM24qP7EyaywpNH8kiTGYODTh5oyR2mfOxHZgj6GV-b41e4PaK5_8ukvau2O0Y3VLvqv1jOu2DXttlM64j4f0_zmmgcvcpJdGYrk5aXH74ZH8ZJNdDxg2LwYreys_5QvsbIDzt0CHWaM44y2ndyAJlxaukezpk7obq13E8_yeg9HpcTc6iLyNThZt8BKU8BXWGLTM2c4sgoWFYTHei4WVjLgtvf6AF6e3u-GA"
              alt="Intricate traditional masks and tribal art from the Sepik River region"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-12 flex flex-col justify-end">
              <h3 className="font-headline-sm text-white mb-2">Cultural Immersion</h3>
              <p className="text-white/80 font-body-md">
                Connect with ancient traditions through the Goroka Show and village homestays in the Sepik
                River region.
              </p>
            </div>
          </div>

          {/* Rugged Adventure – full width */}
          <div className="md:col-span-12 relative rounded-2xl overflow-hidden group luxury-card-shadow min-h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe_wDu7hI21oxQvEVGb3E-KqCxjArrsHXbpGDmcGWQ0_tqDZdN6VJr7-n7M23I3Yv-4d4CyPHyhni0fxfLXXk1q9pER2g12DgDVgsRCNO6Hx3JOhqU5aVXTjyn0xIccsL4a4W3vIEonfT53UypXhfRCpI91-kQKJujNYvkLYv2RP7FcL6KyrR7JA7QHsiC1JTAUcyVqtsCSU9p1wE0NZbptI65_gBTUDmha-9s18nJSOlWD2zRCN3DfSffHODToagEz3SQtCy0K9Vw"
              alt="Dense mist-covered rainforest canopy in the Highlands of Papua New Guinea at dawn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-12 flex flex-col justify-end">
              <h3 className="font-headline-sm text-white mb-2">Rugged Adventure</h3>
              <p className="text-white/80 font-body-md max-w-2xl">
                Conquer the legendary Kokoda Trail, witness rare Birds of Paradise, or trek the peaks of
                Mount Wilhelm with our expert local guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Travel With Us ── */}
      <section className="bg-surface-container py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-primary mb-16">The Premier Travel Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: 'explore',
                title: 'Local Expertise',
                desc: 'Deep-rooted connections across the islands ensuring authentic and safe experiences.',
              },
              {
                icon: 'handshake',
                title: 'Bespoke Itineraries',
                desc: "We don't do 'off-the-shelf.' Every journey is tailored to your specific passions and pace.",
              },
              {
                icon: 'support_agent',
                title: '24/7 Concierge',
                desc: 'From arrival to departure, our on-ground team is always a phone call away for seamless support.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-4xl">{item.icon}</span>
                </div>
                <h4 className="font-title-lg mb-3">{item.title}</h4>
                <p className="font-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curated Packages ── */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-md text-primary mb-4">Curated Expeditions</h2>
            <p className="font-body-md text-on-surface-variant">Hand-picked journeys ready for your discovery.</p>
          </div>
          <Link
            href="/contact"
            className="text-secondary font-title-lg flex items-center gap-2 group hidden md:flex"
          >
            View All Packages{' '}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl overflow-hidden luxury-card-shadow border border-outline-variant/20 hover:-translate-y-2 transition-all duration-300"
            >
              <img className="w-full h-64 object-cover" src={pkg.src} alt={pkg.alt} />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-secondary-container/10 text-secondary rounded-full font-label-sm">
                    {pkg.tag}
                  </span>
                  <span className="font-label-md text-on-surface-variant">{pkg.duration}</span>
                </div>
                <h3 className="font-title-lg text-primary mb-3">{pkg.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">{pkg.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <div>
                    <p className="font-label-sm text-outline">From</p>
                    <p className="font-title-lg text-secondary">
                      {pkg.price}{' '}
                      <span className="text-sm font-normal text-outline">/ pp</span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-2 rounded-xl font-label-md hover:bg-secondary transition-colors"
                  >
                    View Itinerary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lead Generation Form ── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-md mb-6">Plan Your Escape</h2>
              <p className="font-body-lg text-white/70 mb-8">
                Ready to explore the last frontier? Our travel designers are here to craft your perfect
                journey. Tell us what you envision, and we&apos;ll handle the rest.
              </p>
              <div className="space-y-6">
                {[
                  'Personalized route mapping',
                  'VIP logistics and ground handling',
                  'Exclusive access to off-map locations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed">check_circle</span>
                    <p className="font-body-md">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 text-primary luxury-card-shadow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-outline">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-outline">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-outline">Primary Interest</label>
                  <select className="w-full border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 outline-none transition-colors appearance-none bg-transparent">
                    <option>Coastal Luxury &amp; Diving</option>
                    <option>Cultural Immersion</option>
                    <option>Rugged Adventure &amp; Trekking</option>
                    <option>Bespoke Mix</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-outline">Expected Travel Dates</label>
                    <input
                      type="date"
                      className="w-full border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-outline">Number of Travelers</label>
                    <input
                      type="number"
                      placeholder="2"
                      className="w-full border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-5 rounded-xl font-title-lg hover:opacity-90 transition-all duration-300 mt-4"
                >
                  Inquire for My Bespoke Journey
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
