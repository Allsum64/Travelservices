import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Travel Services Limited',
  description:
    'Learn about Travel Services Limited — established in 2003 by Patrick Trubert and Jo-Ann Chin. PNG\'s premier travel management company with over two decades of excellence.',
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzUKEFy_pnbYgfqvHRGSgc2NyLhlMioX6Ue42kBDkKeAOVpeH5gdyhpSoXA2YrML3TpHaEz4aIZgXMH7t-SR88j-q8FFGQ80vC-1VwP5bZw9kf3AaMU4WDymdlvTo46vX2mmj1dbJj7LXuI4Dk0ohQdu2KZbPNxdWrhepcHTayAjVJcmDDdDcqvhnPErFtrXlwfgks2D455QhdI80fKWydRJXgbRN_z98QFs-_13VffKmFsd67fnQiCNvYNnmpdZhaWItrfHMLm5gA"
            alt="Luxury yacht gliding through turquoise waters of a Papua New Guinea coastal bay at sunrise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-fixed font-label-sm mb-6">
              SINCE 2003
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
              Over Two Decades of Excellence
            </h1>
            <p className="font-body-lg text-white/90 mb-10 max-w-xl">
              As Papua New Guinea&apos;s premier travel partner, we bridge the gap between world-class
              standards and local expertise, crafting journeys that define luxury.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-secondary text-white font-title-lg py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Our Portfolio
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 text-white font-title-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXgJ35amVchBk-mF3jCbFwuhSH_4zo2bkswQjCHwzMI1uWWTU1HZH482tYyTAaHI0lBllnC2cxFcp8vZkIkxSh3G_TImw366LscfbaD12XON7zVjGNMFIXoRJrQFwy_WUHHe_wygZy7jiVVmW_LXqi3jL3etqqn5StJqhLypngfhp5zL8azDUwrZx790rpVDRfeh__az4Aa1oaTRYbW6zhOMGwijVv8k3lGbpzcDfn6VKiBRpvcwL6Zbc5rzepzRDodF7gLTOA65nB"
                alt="Editorial style interior of a high-end corporate office in Port Moresby"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/30 hidden md:block max-w-[280px]">
              <p className="font-title-lg text-primary italic mb-2">
                &ldquo;Visionary leadership is about more than travel; it&apos;s about connection.&rdquo;
              </p>
              <p className="font-label-sm text-on-surface-variant">— JO-ANN CHIN, FOUNDER</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary">
              Our Story
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full" />
            <div className="space-y-6">
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Established in 2003 by industry visionaries{' '}
                <span className="font-bold text-primary">Patrick Trubert</span> and{' '}
                <span className="font-bold text-primary">Jo-Ann Chin</span>, Travel Services Limited (TSL)
                was born from a desire to redefine the travel experience in Papua New Guinea.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                From our humble beginnings as a specialized logistics provider, we have evolved into the
                nation&apos;s premier travel management company. Our legacy is built on the foundation of
                unwavering commitment to corporate efficiency and an intimate understanding of the
                &lsquo;Land of the Unexpected&rsquo;.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Today, TSL stands as a symbol of trust, facilitating seamless connectivity for thousands of
                travelers while maintaining the bespoke, high-touch service that our founders championed over
                twenty years ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose TSL ── */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-4">
              Why Choose TSL
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Elevating every aspect of your journey through three core pillars of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pillar 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-white">
                  travel_explore
                </span>
              </div>
              <h3 className="font-title-lg text-primary mb-4">PNG Expertise</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Deep-rooted local intelligence combined with global standards ensures your travel in PNG is
                safe, efficient, and culturally enriched.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-primary text-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 md:-translate-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl">concierge</span>
              </div>
              <h3 className="font-title-lg text-white mb-4">Bespoke Service</h3>
              <p className="font-body-md text-white/80 leading-relaxed">
                We don&apos;t just book tickets; we curate experiences. Our dedicated concierge team
                tailors every detail to your specific corporate or leisure needs.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-white">
                  trophy
                </span>
              </div>
              <h3 className="font-title-lg text-primary mb-4">Market Leadership</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Two decades of industry leadership and strategic partnerships allow us to offer exclusive
                rates and priority access across the Pacific.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Image ── */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzi0Qx1d5TQRHkc7SNgXoJISHeZmZzftGWFVQMR-h9IJWEJw1fEA-VdScIrIczK6E8u24IchUi0H4J-5YFeFkK70kVVL7h3RuN9FUnNfl-KaISYoYrOu0G_AWHInfK3sMBegXbNyMFVVRlr9yPJlmC0VTAVIfozU2VnUZvG6PQcoAaaFxENwy5f_smt2R3RcaISJiG8L6qKb_ozx4j2-iQ-5NBk1ovwthJMakGeGBaIlBL1cN8T7iTjFy6-vZ_wDvJK8aEh085yV7t"
            alt="Aircraft wing silhouetted against a breathtaking sunset over Papua New Guinea mountains and oceans"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-8">
            <div className="max-w-3xl">
              <h2 className="font-display-lg text-white mb-6">
                Making travel seamless, one journey at a time.
              </h2>
              <div className="inline-flex items-center gap-2 text-white/90 font-label-md uppercase tracking-widest">
                <span className="w-8 h-px bg-white" />
                Our Global Mission
                <span className="w-8 h-px bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-headline-md text-primary">Join Our Journey</h2>
          <p className="font-body-md text-on-surface-variant">
            Whether you are planning a corporate excursion or a once-in-a-lifetime tropical escape, let us
            lead the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white font-title-lg px-12 py-4 rounded-xl hover:shadow-lg transition-all"
            >
              Start Your Plan
            </Link>
            <Link
              href="/contact"
              className="text-primary font-title-lg px-12 py-4 rounded-xl border border-primary/20 hover:bg-primary/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
