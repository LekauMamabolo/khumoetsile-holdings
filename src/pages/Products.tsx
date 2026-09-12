import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'
import Icon, { type IconName } from '../components/Icon'
import InnerPageHero from '../components/InnerPageHero'
import CategoryCard from '../components/CategoryCard'
import CtaBand from '../components/CtaBand'
import BrandWedge from '../components/BrandWedge'
import { useState } from 'react'
import { additionalServices, categories, foodCategories } from '../data/content'

function getCategory(id: string) {
  const c = categories.find((cat) => cat.id === id)
  if (!c) throw new Error(`Missing category ${id}`)
  return c
}

export default function Products() {
  useSeo({
    title: 'Products & Services | Khumoetsile Holdings',
    description:
      'PPE & safety, cleaning chemicals, steel products, food supplies, and supply & delivery services from Khumoetsile Holdings — your one-stop supply partner.',
    path: '/products',
  })

  const ppe = getCategory('ppe-safety')
  const cleaning = getCategory('cleaning-chemicals')
  const steel = getCategory('steel-products')
  const supply = getCategory('supply-delivery')

  return (
    <>
      <InnerPageHero
        eyebrow="PRODUCTS & SERVICES"
        line1="PRODUCTS &"
        line2="SERVICES"
        description="Quality products. Reliable supply. Professional service."
        backgroundImage="/images/business/warehouse-supply.jpg"
        primaryTo="/contact"
        primaryLabel="REQUEST A QUOTE"
      />

      <ProductBlock
        icon="hard-hat"
        eyebrow="01"
        title={ppe.name}
        description={ppe.description}
        bullets={['Hard hats', 'Safety glasses', 'Protective gloves', 'Reflective wear', 'Safety equipment']}
        ctaLabel="Request PPE Quote"
        quoteMessage={ppe.quoteMessage}
        categoryName={ppe.name}
      />

      <ProductBlock
        icon="spray-can"
        eyebrow="02"
        title={cleaning.name}
        description={cleaning.description}
        bullets={['Cleaning chemicals', 'Spray bottles', 'Cleaning materials', 'Hygiene products', 'Commercial cleaners']}
        ctaLabel="Request Cleaning Quote"
        quoteMessage={cleaning.quoteMessage}
        categoryName={cleaning.name}
        alt
      />

      <ProductBlock
        icon="construction"
        eyebrow="03"
        title={steel.name}
        description={steel.description}
        ctaLabel="Request Steel Quote"
        quoteMessage={steel.quoteMessage}
        categoryName={steel.name}
      />

      {/* Food supplies */}
      <section className="bg-sand-200 py-16 sm:py-20">
        <div className="container-content">
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900">Food Supplies</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Supply & delivery */}
      <section className="py-16 sm:py-20">
          <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900">
              From Our Supply Network to Your Door
            </h2>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-navy-800/75">
              {supply.description} We work with a strong network of suppliers to source, procure and deliver what
              your business or organisation needs.
            </p>
            <Link
              to={`/contact?category=${encodeURIComponent(supply.name)}&msg=${encodeURIComponent(
                supply.quoteMessage,
              )}`}
              className="mt-7 inline-flex items-center justify-center rounded-md bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Discuss Your Requirements
            </Link>
          </div>
          <div className="flex items-center justify-center sm:h-full">
            <div className="w-full rounded-lg overflow-hidden shadow-sm max-w-full">
              <div style={{ paddingTop: '56.25%' }} className="relative w-full">
                <img
                  src="/images/featured/supply-delivery.jpg"
                  alt="Supply and delivery"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-sand-200 py-16 sm:py-20">
        <div className="container-content">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 max-w-md">Additional Services</h2>
          <p className="mt-3 text-[15px] text-navy-800/70 max-w-lg">
            Alongside our core supply categories, we also offer:
          </p>
            <div className="mt-6 flex flex-wrap gap-3">
            {additionalServices.map((service) => (
                <button
                key={service}
                  className="rounded-full border border-sand-300 px-3.5 py-2 text-sm font-medium text-navy-800 hover:border-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-accent"
                >
                  {service}
                </button>
            ))}
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

function ProductBlock({
  icon,
  eyebrow,
  title,
  description,
  bullets,
  ctaLabel,
  quoteMessage,
  categoryName,
  alt = false,
}: {
  icon: IconName
  eyebrow: string
  title: string
  description: string
  bullets?: string[]
  ctaLabel: string
  quoteMessage: string
  categoryName: string
  alt?: boolean
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className={`${alt ? 'lg:order-2' : ''} flex flex-col justify-center`}>
          <h2 className="mt-0 text-2xl sm:text-3xl font-bold text-navy-900">{title}</h2>
          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-navy-800/75 max-w-lg">{description}</p>
          {bullets && (
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-navy-800/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 shrink-0" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <Link
            to={`/contact?category=${encodeURIComponent(categoryName)}&msg=${encodeURIComponent(quoteMessage)}`}
            className="mt-7 inline-flex items-center justify-center rounded-md bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-green-700 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
        <div className={`flex items-center justify-center sm:h-full ${alt ? 'lg:order-1' : ''}`}>
          <div className="w-full max-w-full flex items-center justify-center">
            <ImageBlock title={title} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ImageBlock({ title }: { title: string }) {
  const [imgError, setImgError] = useState(false)

  const imageMap: Record<string, { path: string; alt: string }> = {
    'PPE & Safety': { path: '/images/featured/ppe-safety.jpg', alt: 'PPE and safety equipment' },
    'Cleaning Chemicals': { path: '/images/featured/cleaning-chemicals.jpg', alt: 'Commercial cleaning products' },
    'Steel Products': { path: '/images/featured/steel-products.jpg', alt: 'Steel products and materials' },
    'Supply & Delivery': { path: '/images/featured/supply-delivery.jpg', alt: 'Supply and delivery services' },
  }

  const image = imageMap[title]

  return (
    <div className="w-full max-w-full">
      <div className="rounded-lg overflow-hidden shadow-sm group">
        <div style={{ paddingTop: '56.25%' }} className="relative w-full">
          {image && !imgError ? (
            <img
              src={image.path}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
              <div className="max-w-xs p-6">
                <BrandWedge className="w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
