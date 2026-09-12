import { useEffect, useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { contact, quoteCategoryOptions } from '../data/content'

const schema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  company: z.string().trim().optional(),
  email: z.string().trim().min(1, 'Please enter your email address.').email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .regex(/^[0-9+()\s-]+$/, 'Please enter a valid phone number.'),
  category: z.string().min(1, 'Please select a product or service.'),
  quantity: z.string().trim().optional(),
  deliveryLocation: z.string().trim().optional(),
  requiredDate: z.string().trim().optional(),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please confirm you consent to being contacted.' }),
  }),
})

type FormValues = z.infer<typeof schema>

export default function QuoteForm() {
  const [params] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      category: '',
      quantity: '',
      deliveryLocation: '',
      requiredDate: '',
      message: '',
    },
  })

  useEffect(() => {
    const category = params.get('category')
    const msg = params.get('msg')
    if (category && quoteCategoryOptions.includes(category)) {
      setValue('category', category)
    }
    if (msg) {
      setValue('message', msg)
    }
  }, [params, setValue])

  const onSubmit = (data: FormValues) => {
    const lines = [
      'KHUMOETSILE HOLDINGS',
      'QUOTE REQUEST',
      '',
      `Name: ${data.fullName}`,
      `Company / Organisation: ${data.company || 'N/A'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Product / Service: ${data.category}`,
      `Quantity / Estimated Requirement: ${data.quantity || 'N/A'}`,
      `Delivery Location: ${data.deliveryLocation || 'N/A'}`,
      `Required Date: ${data.requiredDate || 'N/A'}`,
      '',
      'Requirements:',
      `${data.message || 'N/A'}`,
    ]

    const message = encodeURIComponent(lines.join('\n'))
    const waNumber = contact.whatsappNumber // expected format: 27798733436
    const waUrl = `https://wa.me/${waNumber}?text=${message}`

    // Open WhatsApp in a new tab/window so desktop opens WhatsApp Web and mobile opens WhatsApp app
    window.open(waUrl, '_blank')

    // Preserve form data; do not reset here.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-600/25 bg-green-600/5 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-green-600" size={40} aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Your email application has been opened</h3>
        <p className="mt-2 text-[15px] text-navy-800/75">
          Your email application has been opened with your quote request. Please send the email to complete your
          enquiry. If nothing opened, email us directly at{' '}
          <a href={`mailto:${contact.email}`} className="font-medium text-green-600 underline">
            {contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center rounded-md border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Full Name" required error={errors.fullName?.message}>
        <input
          type="text"
          autoComplete="name"
          {...register('fullName')}
          className={inputClass(!!errors.fullName)}
        />
      </Field>

      <Field label="Company / Organisation" error={errors.company?.message}>
        <input type="text" autoComplete="organization" {...register('company')} className={inputClass(false)} />
      </Field>

      <Field label="Email Address" required error={errors.email?.message}>
        <input type="email" autoComplete="email" {...register('email')} className={inputClass(!!errors.email)} />
      </Field>

      <Field label="Phone Number" required error={errors.phone?.message}>
        <input type="tel" autoComplete="tel" {...register('phone')} className={inputClass(!!errors.phone)} />
      </Field>

      <Field label="Product / Service Required" required error={errors.category?.message} full>
        <select {...register('category')} className={inputClass(!!errors.category)} defaultValue="">
          <option value="" disabled>
            Select a product or service
          </option>
          {quoteCategoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Quantity / Estimated Requirement" error={errors.quantity?.message}>
        <input type="text" {...register('quantity')} className={inputClass(false)} />
      </Field>

      <Field label="Delivery Location" error={errors.deliveryLocation?.message}>
        <input type="text" {...register('deliveryLocation')} className={inputClass(false)} />
      </Field>

      <Field label="Required Date" error={errors.requiredDate?.message}>
        <input
          type="date"
          {...register('requiredDate')}
          min={new Date().toISOString().split('T')[0]}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Requirements / Message" error={errors.message?.message} full>
        <textarea rows={4} {...register('message')} className={inputClass(false)} placeholder="Tell us what products, quantities or services you require..." />
      </Field>

      <div className="sm:col-span-2 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-sand-300 text-green-600 focus:ring-green-accent"
        />
        <label htmlFor="consent" className="text-sm text-navy-800/80">
          I consent to Khumoetsile Holdings contacting me regarding this enquiry.
        </label>
      </div>
      {errors.consent && <p className="sm:col-span-2 -mt-3 text-sm text-red-600">{errors.consent.message}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-700 disabled:opacity-60 sm:w-auto"
        >
          <MessageCircle size={16} className="mr-2" /> SEND VIA WHATSAPP
        </button>
      </div>
    </form>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-navy-900 placeholder:text-navy-800/40 focus:border-green-600 ${
    hasError ? 'border-red-400' : 'border-sand-300'
  }`
}

function Field({
  label,
  required,
  error,
  full,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  full?: boolean
  children: ReactNode
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="mb-1.5 block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-green-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  )
}
