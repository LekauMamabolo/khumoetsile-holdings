import Icon, { type IconName } from './Icon'

interface Props {
  icon: IconName
  title: string
  body?: string
  variant?: 'light' | 'dark'
}

export default function IconFeature({ icon, title, body, variant = 'light' }: Props) {
  const dark = variant === 'dark'
  return (
    <div className="flex flex-col items-start">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-md ${
          dark ? 'bg-white/10' : 'bg-navy-900'
        }`}
      >
        <Icon name={icon} size={22} className="text-green-accent" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className={`mt-4 text-[15px] font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h3>
      {body && (
        <p className={`mt-1.5 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-navy-800/70'}`}>{body}</p>
      )}
    </div>
  )
}
