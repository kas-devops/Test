export default function Footer() {
  return (
    <footer className="bg-soft text-[#2F2F2F]">
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-14">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/Mita-Logo.png"
              alt="Makeup Studio Logo"
              className="w-[120px] object-contain"
            />
            <h2 className="font-heading text-2xl tracking-wide">
              Makeup Studio
            </h2>
            <p className="font-body text-sm text-[#6B6B6B] max-w-xs text-center md:text-left leading-relaxed">
              Premium makeup artistry crafted with elegance, passion, and perfection.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3 font-body text-sm">
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
              Explore
            </span>
            <a className="text-[#2F2F2F] hover:text-primary transition">Home</a>
            <a className="text-[#2F2F2F] hover:text-primary transition">About</a>
            <a className="text-[#2F2F2F] hover:text-primary transition">Services</a>
            <a className="text-[#2F2F2F] hover:text-primary transition">Gallery</a>
            <a className="text-[#2F2F2F] hover:text-primary transition">Contact</a>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs font-body">
              Follow Us
            </span>

            <div className="flex gap-7 text-[#2F2F2F]">
              {/* Facebook */}
              <a className="transition-all duration-300 hover:text-primary hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a className="transition-all duration-300 hover:text-primary hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.346 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.346 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.346-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.346-2.633 1.32-3.608C4.528 2.509 5.795 2.225 7.161 2.163 8.426 2.105 8.806 2.163 12 2.163z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>

              {/* Twitter */}
              <a className="transition-all duration-300 hover:text-primary hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482 13.944 13.944 0 0 1-10.125-5.138 4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.214 2.188 4.099a4.903 4.903 0 0 1-2.229-.616c-.054 1.996 1.404 3.872 3.448 4.288a4.935 4.935 0 0 1-2.224.085 4.924 4.924 0 0 0 4.596 3.417 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.788-.023-1.175-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.213 0-.425-.015-.636A9.935 9.935 0 0 0 24 4.557z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DDD6CC] mt-12 pt-6 text-center">
          <p className="text-xs text-[#8A8A8A] font-body tracking-wide">
            © 2025 Makeup Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
