import { Link } from 'react-router-dom'
import { contact } from '../data/content'

interface Props {
  heading: string
  body: string
  primaryLabel?: string
  primaryTo?: string
}

export default function CtaBand({
  heading,
  body,
  primaryLabel = 'Request a Quote',
  primaryTo = '/contact',
}: Props) {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Khumoetsile Holdings. I would like to enquire about your products and services.',
  )}`

  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="container-content relative py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto">{heading}</h2>
        <p className="mt-4 text-[15px] sm:text-base text-white/70 max-w-xl mx-auto">{body}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-green-500 transition-colors"
          >
            {primaryLabel}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
