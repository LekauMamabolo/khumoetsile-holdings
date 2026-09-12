import { Link } from 'react-router-dom'

type Props = {
  eyebrow?: string
  line1: string
  line2: string
  description?: string
  backgroundImage?: string
  primaryTo?: string
  primaryLabel?: string
}

export default function InnerPageHero({
  eyebrow,
  line1,
  line2,
  description,
  backgroundImage = '/images/business/warehouse-supply.jpg',
  primaryTo = '/contact',
  primaryLabel = 'REQUEST A QUOTE',
}: Props) {
  return (
    <section className={`hero-photo hero-photo--inner relative overflow-hidden`}>
      <div
        className="hero-photo__bg absolute inset-0"
        aria-hidden="true"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="container-content relative z-10">
        <div className="max-w-2xl py-12 lg:py-14">
          {eyebrow && <p className="text-sm font-semibold text-green-600">{eyebrow}</p>}

          <h1 className="mt-2 hero-heading text-white leading-tight">
            <span className="block">{line1}</span>
            <span className="block text-green-600">{line2}</span>
          </h1>

          {description && <p className="mt-3 text-[15px] sm:text-base text-white/90">{description}</p>}

          <div className="mt-6">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
