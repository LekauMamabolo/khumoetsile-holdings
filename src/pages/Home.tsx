import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
// BrandWedge removed from hero to keep header-to-hero transition clean
import IconFeature from '../components/IconFeature'
import Icon from '../components/Icon'
import BrandWedge from '../components/BrandWedge'
import CategoryCard from '../components/CategoryCard'
import CtaBand from '../components/CtaBand'
import { useState } from 'react'

import { builtForBusiness, categories, foodCategories, whyChooseUsHome } from '../data/content'

function ImagePanel() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative rounded-lg overflow-hidden shadow-sm">
      {!imgError ? (
        <img
          src="/images/business/warehouse-supply.jpg"
          alt="Warehouse and supply"
          className="w-full h-72 sm:h-96 object-cover block"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-72 sm:h-96 bg-navy-800 flex items-center justify-center">
          <div className="max-w-xs p-6">
            <BrandWedge className="w-full h-auto" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-navy-900/20 pointer-events-none" />
    </div>
  )
}

export default function Home() {
  useSeo({
    title: 'Khumoetsile Holdings | Your One-Stop Supply Partner',
    description:
      'Khumoetsile Holdings supplies PPE & safety, cleaning chemicals, steel products, food and beverages, plus supply and delivery services to businesses and organisations.',
    path: '/',
  })

  return (
    <>
      {/* Hero: photographic corporate supply hero */}
      <section className="hero-photo relative overflow-hidden">
        <div className="hero-photo__bg absolute inset-0" aria-hidden="true" />

        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="max-w-[850px] py-24 lg:py-32">
              <p className="text-sm font-semibold text-green-600 mb-3">SUPPLYING. PROTECTING. DELIVERING.</p>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-2 hero-heading"
              >
                <span className="hero-heading-line">YOUR ONE-STOP</span>
                <span className="hero-heading-line hero-heading-second">
                  <span className="hero-supply text-green-600">SUPPLY</span>
                  <span className="hero-partner text-white">PARTNER</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
                className="mt-4 text-lg sm:text-xl font-semibold text-white/90"
              >
                Everything You Need, Delivered.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                className="mt-6 text-[15px] sm:text-base leading-relaxed text-white/80 max-w-2xl"
              >
                Khumoetsile Holdings provides quality products and dependable supply solutions to businesses,
                organisations and communities. We combine competitive pricing, reliable service and on-time delivery
                to help customers stay supplied, protected and operating efficiently.
              </motion.p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  REQUEST A QUOTE
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white/90 hover:border-white/40 transition-colors"
                >
                  EXPLORE OUR PRODUCTS
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-sand-200 py-16 sm:py-20">
        <div className="container-content">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 max-w-md">Why Choose Us</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsHome.map((item) => (
              <IconFeature key={item.title} icon={item.icon as any} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products & services */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Featured Products & Services</h2>
              <p className="mt-2 text-[15px] text-navy-800/70 max-w-lg">
                Quality products. Competitive prices. Reliable service.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 shrink-0"
            >
              View all products & services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <CategoryCard
                key={c.id}
                name={c.name}
                description={c.short}
                icon={c.icon as any}
                quoteMessage={c.quoteMessage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Built for your business - premium split layout */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: copy + benefit cards */}
            <div className="lg:pr-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">BUILT FOR YOUR BUSINESS</p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
                <span className="text-white">BUILT FOR</span>{' '}
                <span className="text-green-600">YOUR BUSINESS</span>
              </h2>

              <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-white/70 max-w-lg">
                At Khumoetsile Holdings, we provide high-quality products and dependable service to help businesses
                and organisations operate smoothly, safely and efficiently.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* use explicit benefit copy to match design direction */}
                {[
                  {
                    title: 'SAFETY FIRST',
                    body: 'Protecting people, workplaces and communities with the right equipment.',
                    icon: 'shield-check',
                  },
                  {
                    title: 'WIDE RANGE OF PRODUCTS',
                    body: 'Everything you need, under one roof and one point of contact.',
                    icon: 'layout-grid',
                  },
                  {
                    title: 'TRUSTED SUPPLIER',
                    body: 'Quality, reliability and long-term working relationships.',
                    icon: 'handshake',
                  },
                  {
                    title: 'ON-TIME DELIVERY',
                    body: 'Delivery arranged and confirmed around your agreed schedule.',
                    icon: 'truck',
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="bg-navy-800 border border-navy-700 rounded-lg p-4 h-full transition-shadow hover:shadow-lg hover:-translate-y-0.5 motion-safe:transform-gpu"
                  >
                    <div className="flex items-start gap-4 h-full">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
                          <Icon name={b.icon as any} size={18} className="text-white" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">{b.title}</h3>
                        <p className="mt-1 text-sm text-slate-300">{b.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: warehouse image (fallback to branded navy/green wedge) */}
            <div>
              <ImagePanel />
            </div>
          </div>
        </div>
      </section>

      {/* More than just supplies */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-green-600">More Than Just Supplies</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900">We Deliver Value</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodCategories.map((c) => (
              <CategoryCard
                key={c.id}
                name={c.name}
                description={c.short}
                icon={c.icon as any}
                quoteMessage={c.quoteMessage}
              />
            ))}
          </div>

          <div className="mt-10">
            <Link
              to={`/contact?category=${encodeURIComponent('Food Supplies')}&msg=${encodeURIComponent(
                'Hello Khumoetsile Holdings. I would like to request a quote for food supplies.',
              )}`}
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Request Food Supply Quote
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Need a Reliable Supply Partner?"
        body="Tell us what you need and our team will assist you with the right supply solution."
      />
    </>
  )
}
