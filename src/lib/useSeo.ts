import { useEffect } from 'react'

interface SeoOptions {
  title: string
  description: string
  path: string
}

const SITE_URL = 'https://www.khumoetsileholdings.co.za'

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setCanonical(`${SITE_URL}${path}`)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE_URL}${path}`, 'property')
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [title, description, path])
}
