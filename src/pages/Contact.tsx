import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useSeo } from '../lib/useSeo'
import QuoteForm from '../components/QuoteForm'
import { contact } from '../data/content'
import InnerPageHero from '../components/InnerPageHero'

export default function Contact() {
  useSeo({
    title: 'Contact & Request a Quote | Khumoetsile Holdings',
    description:
      'Get in touch with Khumoetsile Holdings or request a quote for PPE, cleaning chemicals, steel products, food supplies and more.',
    path: '/contact',
  })

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Khumoetsile Holdings. I would like to enquire about your products and services.',
  )}`
  const mapsQuery = encodeURIComponent(`${contact.addressLines.join(', ')}`)

  return (
    <>
      <InnerPageHero
        eyebrow="GET IN TOUCH"
        line1={"LET'S TALK ABOUT"}
        line2={'WHAT YOU NEED'}
        description={'Tell us what you need and our team will assist you with the right supply solution.'}
        backgroundImage={'images/featured/supply-delivery.jpg'}
        primaryTo={'/contact'}
        primaryLabel={'REQUEST A QUOTE'}
      />

      <section className="bg-white py-12 lg:py-20">
        <div className="container-content">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">LET'S GET YOUR<br/>REQUIREMENTS STARTED</h2>
          <p className="mt-3 text-[15px] text-navy-800/75 max-w-2xl">Whether you need PPE, cleaning chemicals, steel products, food supplies or general sourcing and delivery, send us your requirements and we’ll get in touch.</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold text-navy-900">Contact Khumoetsile Holdings</h3>
              <div className="mt-4 space-y-4 text-[15px] text-navy-900">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-green-600 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-navy-800/60">PHONE</p>
                    <a href={contact.phoneHref} className="text-[15px] font-medium text-navy-900 hover:text-green-600">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-green-600 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-navy-800/60">EMAIL</p>
                    <a href={`mailto:${contact.email}`} className="text-[15px] font-medium text-navy-900 hover:text-green-600 break-all">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-green-600 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-navy-800/60">ADDRESS</p>
                    <p className="text-[15px] font-medium text-navy-900">23339 Motswedi Street, Zone 2<br/>Meadowlands, South Africa</p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    CHAT ON WHATSAPP
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-sand-300 bg-white p-6 sm:p-9">
              <h3 className="text-lg font-semibold text-navy-900">Request a Quote</h3>
              <p className="mt-2 text-sm text-navy-800/60">Fields marked <span className="text-green-600">*</span> are required.</p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-6">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Prefer WhatsApp?</h4>
            <p className="mt-1 text-white/80">Chat with us directly about your supply requirements.</p>
          </div>
          <div>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
