import './App.css'

export default function Footer() {
  return (
    <footer className="bg-amber-50 footer">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* LOGO + DESCRIPTION */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900">Lurny 🦦</h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-xs">
              Learn languages passively while living your day.  
              Zero stress, pure immersion.
            </p>
          </div>

          {/* COLUMN 1 — PRODUCT (hidden on mobile) */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-stone-900 mb-2 text-lg">Product</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-cyan-600">Features</a></li>
              <li><a href="#" className="hover:text-cyan-600">Plans</a></li>
              <li><a href="#" className="hover:text-cyan-600">Schools</a></li>
              <li><a href="#" className="hover:text-cyan-600">Languages</a></li>
            </ul>
          </div>

          {/* COLUMN 2 — COMPANY (hidden on mobile) */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-stone-900 mb-2 text-lg">Company</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-cyan-600">About us</a></li>
              <li><a href="#" className="hover:text-cyan-600">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-600">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-600">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3 — SUPPORT (always visible) */}
          <div>
            <h4 className="font-semibold text-stone-900 mb-2 text-lg">Support</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-cyan-600">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-600">FAQ</a></li>
              <li><a href="#" className="hover:text-cyan-600">Status</a></li>
              <li><a href="#" className="hover:text-cyan-600">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-6 pt-2 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lurny — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
