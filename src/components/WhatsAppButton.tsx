import { contact } from '../data/content'

interface Props {
  message?: string
}

const DEFAULT_MESSAGE = 'Hello Khumoetsile Holdings. I would like to enquire about your products and services.'

export default function WhatsAppButton({ message = DEFAULT_MESSAGE }: Props) {
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-5 right-5 z-40 group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Khumoetsile Holdings on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulseSoft motion-reduce:animate-none hover:scale-105 transition-transform"
      >
        <WhatsAppIcon />
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        Chat with us
      </span>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.23.61 4.34 1.68 6.15L4 29l8.13-2.13a12.9 12.9 0 0 0 3.89.6h.01c6.62 0 12.02-5.36 12.02-11.94C28.05 8.36 22.65 3 16.02 3zm0 21.7h-.01a10.6 10.6 0 0 1-5.39-1.48l-.39-.23-4.82 1.27 1.29-4.7-.25-.4a9.75 9.75 0 0 1-1.5-5.22c0-5.4 4.41-9.79 9.87-9.79 2.64 0 5.12 1.03 6.98 2.89a9.7 9.7 0 0 1 2.89 6.9c0 5.4-4.42 9.76-9.87 9.76zm5.41-7.32c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}
