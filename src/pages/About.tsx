import { Target, Eye, ShieldCheck } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import IconFeature from '../components/IconFeature'
import { experienceOrganisations, whyKhumoetsile, contact } from '../data/content'
import BrandWedge from '../components/BrandWedge'
import InnerPageHero from '../components/InnerPageHero'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

export default function About() {
  // About
useSeo({
  title: 'About Khumoetsile Holdings | South African Supply Company',
  description:
    'Khumoetsile Holdings is a 100% black female-owned South African supply and services company serving businesses, institutions, communities and the public and private sectors.',
  path: '/about',
})

  return (
    <>
      <InnerPageHero
  eyebrow="ABOUT KHUMOETSILE HOLDINGS"
  line1="YOUR RELIABLE"
  line2="SUPPLY PARTNER"
  description="Khumoetsile Holdings provides quality products and dependable supply solutions to businesses, organisations and communities."
  backgroundImage={`${import.meta.env.BASE_URL}images/business/warehouse-supply.jpg`}
  primaryTo="/contact"
  primaryLabel="REQUEST A QUOTE"
/>

      {/* Who we are */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Who We Are</h2>
              <div className="mt-4 text-[15px] sm:text-base leading-relaxed text-navy-800/80 max-w-2xl">
                <p>
                  Khumoetsile Holdings is a multi-category supply company focused on helping businesses,
                  organisations and communities access the products and services they need through one reliable
                  supply partner.
                </p>
                <p className="mt-3">
                  Our supply capabilities cover PPE and safety equipment, cleaning chemicals, steel products, food
                  supplies, beverages and general sourcing and delivery.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
             <img
  src={`${import.meta.env.BASE_URL}images/featured/steel-products.jpg`}
  alt="Steel products"
  className="w-full h-64 object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-navy-900 py-12 lg:py-20">
        <div className="container-content">
          <p className="text-sm font-semibold text-green-600">HOW WE WORK</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white max-w-2xl">DEPENDABLE SUPPLY. PROFESSIONAL SERVICE.</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg bg-white/5 border border-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Target size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">RELIABLE SOURCING</h3>
                  <p className="mt-1 text-sm text-white/70">We work to source the products our customers require through our supply network.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 border border-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">QUALITY FOCUSED</h3>
                  <p className="mt-1 text-sm text-white/70">We aim to provide products that meet the requirements of our customers and their operations.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 border border-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Target size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">ON-TIME DELIVERY</h3>
                  <p className="mt-1 text-sm text-white/70">Supply and delivery are arranged around agreed customer requirements and schedules.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 border border-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Eye size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">CUSTOMER FOCUSED</h3>
                  <p className="mt-1 text-sm text-white/70">We work closely with customers to understand their requirements and provide suitable supply solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we supply */}
      <section className="py-12 lg:py-20">
        <div className="container-content">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">One Partner. Multiple Supply Categories.</h2>
          <p className="mt-3 text-[15px] text-navy-800/70 max-w-2xl">From workplace safety and cleaning supplies to steel, food and general procurement, Khumoetsile Holdings provides a convenient single point of contact for a wide range of supply requirements.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'PPE & Safety', icon: 'shield-check' },
              { name: 'Cleaning Chemicals', icon: 'spray-can' },
              { name: 'Steel Products', icon: 'construction' },
              { name: 'Food Supplies', icon: 'apple' },
              { name: 'Supply & Delivery', icon: 'truck' },
            ].map((c) => (
              <div key={c.name} className="rounded-lg overflow-hidden border border-sand-300 bg-white p-4 flex flex-col items-start gap-3 hover:shadow transition-shadow h-full">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Icon name={c.icon as any} size={16} className="text-white" />
                </div>
                <div className="mt-1 text-sm font-semibold text-navy-900">{c.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link to="/products" className="inline-flex items-center justify-center rounded-md border border-sand-300 px-6 py-2.5 text-sm font-semibold text-navy-900 hover:bg-sand-100">
              Explore Products & Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-sand-200 py-12 lg:py-20">
        <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Why Work With Us?</h2>
            <div className="mt-4 text-[15px] sm:text-base text-navy-800/80 space-y-3">
              <p><strong>Wide Range of Products</strong><br/>One point of contact for multiple supply requirements.</p>
              <p><strong>Dependable Service</strong><br/>Professional support from enquiry through to delivery.</p>
              <p><strong>Flexible Sourcing</strong><br/>We help source products according to customer requirements.</p>
              <p><strong>Business-Focused Solutions</strong><br/>Supply solutions designed around the operational needs of businesses and organisations.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm">
            <img
  src={`${import.meta.env.BASE_URL}images/business/warehouse-supply.jpg`}
  alt="Warehouse"
  className="w-full h-72 object-cover"
/>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900">
        <div className="container-content relative py-12 lg:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto">Looking for a Reliable Supply Partner?</h2>
          <p className="mt-3 text-[15px] sm:text-base text-white/70 max-w-xl mx-auto">Tell us what you need and let Khumoetsile Holdings assist with the right supply solution.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-green-600 px-6 py-2.5 text-[15px] font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white/25 px-6 py-2.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
