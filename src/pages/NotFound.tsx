import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | Khumoetsile Holdings',
    description: 'The page you are looking for could not be found.',
    path: '/404',
  })

  return (
    <section className="container-content py-24 text-center">
      <p className="text-sm font-semibold text-green-600">404</p>
      <h1 className="mt-3 text-3xl font-bold">We couldn't find that page</h1>
      <p className="mt-3 text-navy-800/70">It may have moved, or the link may be incorrect.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
      >
        Back to Home
      </Link>
    </section>
  )
}
