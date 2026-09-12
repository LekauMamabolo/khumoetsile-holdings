import {
  HardHat,
  SprayCan,
  Construction,
  Truck,
  Apple,
  Wheat,
  Snowflake,
  CupSoda,
  BadgeCheck,
  CircleDollarSign,
  Handshake,
  ShieldCheck,
  LayoutGrid,
  Users,
  UsersRound,
  Lightbulb,
  type LucideProps,
} from 'lucide-react'

const registry = {
  'hard-hat': HardHat,
  'spray-can': SprayCan,
  construction: Construction,
  truck: Truck,
  apple: Apple,
  wheat: Wheat,
  snowflake: Snowflake,
  'cup-soda': CupSoda,
  'badge-check': BadgeCheck,
  'circle-dollar-sign': CircleDollarSign,
  handshake: Handshake,
  'shield-check': ShieldCheck,
  'layout-grid': LayoutGrid,
  users: Users,
  'users-round': UsersRound,
  lightbulb: Lightbulb,
} as const

export type IconName = keyof typeof registry

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = registry[name]
  return <Cmp {...props} />
}
