import Icon from './Icon'
import { useEffect, useState } from 'react'

export default function HeroComposition() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="hero-composite will-change-transform" aria-hidden={!mounted}>
      <div className="hero-composite__scene">
        <div className="hc-card hc-card--box">
          <div className="hc-shade" />
          <div className="hc-icon">
            <Icon name="truck" size={28} className="text-green-accent" />
          </div>
        </div>

        <div className="hc-card hc-card--hardhat">
          <div className="hc-shade" />
          <div className="hc-icon">
            <Icon name="hard-hat" size={28} className="text-green-accent" />
          </div>
        </div>

        <div className="hc-card hc-card--spray">
          <div className="hc-shade" />
          <div className="hc-icon">
            <Icon name="spray-can" size={26} className="text-green-accent" />
          </div>
        </div>

        <div className="hc-card hc-card--crate">
          <div className="hc-shade" />
          <div className="hc-icon">
            <Icon name="apple" size={26} className="text-green-accent" />
          </div>
        </div>

        <div className="hc-ground" />
      </div>
    </div>
  )
}
