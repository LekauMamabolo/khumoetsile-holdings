import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Icon, { type IconName } from './Icon'

interface Props {
  name: string
  description: string
  icon: IconName
  quoteMessage: string
}

export default function CategoryCard({ name, description, icon, quoteMessage }: Props) {
  const [imgError, setImgError] = useState(false)

  const imageMap: Record<string, { path: string; alt: string }> = {
    'PPE & Safety': { path: '/images/featured/ppe-safety.jpg', alt: 'PPE and safety equipment' },
    'Cleaning Chemicals': { path: '/images/featured/cleaning-chemicals.jpg', alt: 'Commercial cleaning products' },
    'Steel Products': { path: '/images/featured/steel-products.jpg', alt: 'Steel products and materials' },
    'Supply & Delivery': { path: '/images/featured/supply-delivery.jpg', alt: 'Supply and delivery services' },
    'Fruits & Vegetables': { path: '/images/featured/fruits-vegetables.jpg', alt: 'Fresh fruits and vegetables' },
    'Dry Food': { path: '/images/featured/dry-food.jpg', alt: 'Dry food supplies' },
    'Frozen Food': { path: '/images/featured/frozen-food.jpg', alt: 'Frozen food supplies' },
    'Beverages': { path: '/images/featured/beverages.jpg', alt: 'Beverage supplies' },
  }

  const image = imageMap[name]
  return (
    <div className="group flex flex-col h-full rounded-lg border border-sand-300 bg-white p-0 overflow-hidden transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(10,37,64,0.25)]">
      {/* Image area */}
      <div className="relative w-full" style={{ paddingTop: '62.5%' }}>
        {image && !imgError ? (
          <img
            src={image.path}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900">
            <div className="h-14 w-14 flex items-center justify-center rounded-md bg-navy-800">
              <Icon name={icon} size={26} className="text-green-accent" strokeWidth={1.75} aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm">
          <Icon name={icon} size={20} className="text-green-600" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy-900">{name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-navy-800/75">{description}</p>
        <Link
          to={`/contact?category=${encodeURIComponent(name)}&msg=${encodeURIComponent(quoteMessage)}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 mt-auto"
        >
          Request Quote
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
