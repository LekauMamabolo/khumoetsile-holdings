import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand-300">
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Khumoetsile Holdings home">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Khumoetsile Holdings — Supplying. Protecting. Delivering."
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors ${
                  isActive ? 'text-green-600' : 'text-navy-800 hover:text-green-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-green-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-900"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-sand-300 bg-white">
          <nav className="container-content flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-sand-200 last:border-0 ${
                    isActive ? 'text-green-600' : 'text-navy-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 text-base font-semibold text-white"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
