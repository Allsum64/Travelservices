import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full">
      <div className="w-full py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed">
            Travel Services Limited
          </div>
          <p className="font-body-md text-body-md text-surface-variant/80">
            Level 1, SVS Foodland, Harbour City<br />
            P.O. Box 3220, Boroko, NCD, PNG
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="mailto:info@travelservices.com.pg"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold uppercase text-label-sm text-secondary-fixed">Services</h4>
          <Link href="/corporate" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Corporate Travel
          </Link>
          <Link href="/leisure" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Leisure Packages
          </Link>
          <Link href="/services" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            All Services
          </Link>
          <Link href="/contact" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Emergency Support
          </Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold uppercase text-label-sm text-secondary-fixed">Company</h4>
          <Link href="/about" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            About Us
          </Link>
          <Link href="/contact" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Contact Us
          </Link>
          <a href="#" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Privacy Policy
          </a>
          <a href="#" className="text-surface-variant/80 hover:text-white transition-colors font-body-md">
            Terms of Service
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold uppercase text-label-sm text-secondary-fixed">Newsletter</h4>
          <p className="text-surface-variant/80 text-sm">
            Stay updated with travel advisories and exclusive deals.
          </p>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/20 rounded-lg text-white px-4 py-2 placeholder-white/40 focus:ring-secondary focus:border-secondary outline-none"
            />
            <button className="absolute right-1 top-1 bg-secondary p-1.5 rounded-md transition-opacity hover:opacity-80">
              <span className="material-symbols-outlined text-sm text-white">send</span>
            </button>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-surface-variant/80 text-sm">+675 309 5400 / +675 320 2468</p>
            <p className="text-surface-variant/80 text-sm">reservations@travelservices.com.pg</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-white/10 text-center">
        <p className="font-body-md text-body-md opacity-60">
          © {new Date().getFullYear()} Travel Services Limited. Papua New Guinea&apos;s Premier Travel Partner.
        </p>
      </div>
    </footer>
  );
}
