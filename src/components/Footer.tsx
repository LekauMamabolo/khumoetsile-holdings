import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, nav } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-sand-200">
      <div className="container-content py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/images/logo.png"
            alt="Khumoetsile Holdings"
            className="h-10 w-auto brightness-0 invert opacity-95"
          />
          <p className="mt-4 text-sm tracking-wide text-sand-300">Supplying. Protecting. Delivering.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-green-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-green-accent transition-colors">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/products" className="hover:text-green-accent transition-colors">
                PPE & Safety
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-accent transition-colors">
                Cleaning Chemicals
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-accent transition-colors">
                Steel Products
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-accent transition-colors">
                Food Supplies
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-accent transition-colors">
                Supply & Delivery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={17} className="mt-0.5 shrink-0 text-green-accent" aria-hidden="true" />
              <a href={contact.phoneHref} className="hover:text-green-accent transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={17} className="mt-0.5 shrink-0 text-green-accent" aria-hidden="true" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-green-accent transition-colors break-all lg:break-normal lg:whitespace-nowrap"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-green-accent" aria-hidden="true" />
              <span>{contact.addressLines.join(', ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>
            © {year} Khumoetsile Holdings. All Rights Reserved.
          </p>
          <p>{contact.domain}</p>
        </div>
      </div>
    </footer>
  )
}
