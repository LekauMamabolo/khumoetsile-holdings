export const contact = {
  company: 'Khumoetsile Holdings',
  person: 'Mmatshepo',
  phone: '079 873 3436',
  phoneHref: 'tel:+27798733436',
  whatsappNumber: '27798733436',
  email: 'mmatshepo@khumoetsileholdings.co.za',
  addressLines: ['23339 Motswedi Street', 'Zone 2, Meadowlands', 'South Africa'],
  domain: 'www.khumoetsileholdings.co.za',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products & Services', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

export type Category = {
  id: string
  name: string
  short: string
  description: string
  icon: string
  quoteMessage: string
}

export const categories: Category[] = [
  {
    id: 'ppe-safety',
    name: 'PPE & Safety',
    short: 'Protective equipment and safety-related products for organisations and workplaces.',
    description:
      'Protective equipment and safety-related products for organisations and workplaces, including hard hats, safety glasses, protective gloves, reflective wear and other safety equipment.',
    icon: 'hard-hat',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for PPE & Safety products.',
  },
  {
    id: 'cleaning-chemicals',
    name: 'Cleaning Chemicals',
    short: 'Professional cleaning and hygiene supply solutions.',
    description: 'Professional cleaning and hygiene supply solutions for commercial and organisational environments.',
    icon: 'spray-can',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Cleaning Chemicals.',
  },
  {
    id: 'steel-products',
    name: 'Steel Products',
    short: 'Steel and related products for commercial, industrial and project requirements.',
    description:
      'Steel and related products supplied for commercial, industrial and project requirements.',
    icon: 'construction',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Steel Products.',
  },
  {
    id: 'supply-delivery',
    name: 'Supply & Delivery',
    short: 'From our supply network to your door.',
    description: 'Sourcing, procurement, supply and delivery capability, from our supply network to your door.',
    icon: 'truck',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to discuss my supply and delivery requirements.',
  },
  {
    id: 'fruits-vegetables',
    name: 'Fruits & Vegetables',
    short: 'Fresh produce supply for business and community needs.',
    description: 'Fresh fruits and vegetables supplied as part of our food supply offering.',
    icon: 'apple',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Fruits & Vegetables.',
  },
  {
    id: 'dry-food',
    name: 'Dry Food',
    short: 'Dry food supply for business and community needs.',
    description: 'Dry food products supplied as part of our food supply offering.',
    icon: 'wheat',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Dry Food.',
  },
  {
    id: 'frozen-food',
    name: 'Frozen Food',
    short: 'Frozen food supply for business and community needs.',
    description: 'Frozen food products supplied as part of our food supply offering.',
    icon: 'snowflake',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Frozen Food.',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    short: 'Beverage supply for business and community needs.',
    description: 'Beverages supplied as part of our food supply offering.',
    icon: 'cup-soda',
    quoteMessage: 'Hello Khumoetsile Holdings. I would like to request a quote for Beverages.',
  },
]

export const foodCategories = categories.filter((c) =>
  ['fruits-vegetables', 'dry-food', 'frozen-food', 'beverages'].includes(c.id),
)

export const coreCategories = categories.filter((c) =>
  ['ppe-safety', 'cleaning-chemicals', 'steel-products', 'supply-delivery'].includes(c.id),
)

export const additionalServices = [
  'Catering',
  'Décor',
  'Events Planning',
  'Branding Solutions',
  'Corporate Gifts',
  'Promotional Products',
  'Stationery',
  'Company Activations',
]

export const whyChooseUsHome = [
  {
    title: 'Quality Products',
    body: 'Carefully sourced products for business and organisational requirements.',
    icon: 'badge-check',
  },
  {
    title: 'Competitive Prices',
    body: 'Practical supply solutions focused on delivering value.',
    icon: 'circle-dollar-sign',
  },
  {
    title: 'On-Time Delivery',
    body: 'Reliable supply and delivery when customers need it.',
    icon: 'truck',
  },
  {
    title: 'Reliable Service',
    body: 'Professional support built around long-term customer relationships.',
    icon: 'handshake',
  },
]

export const builtForBusiness = [
  { title: 'Safety First', icon: 'shield-check' },
  { title: 'Wide Range of Products', icon: 'layout-grid' },
  { title: 'Trusted Supplier', icon: 'handshake' },
  { title: 'On-Time Delivery', icon: 'truck' },
]

export const whyKhumoetsile = [
  {
    title: 'Quality Assurance',
    body: 'We are committed to providing only the highest quality products, so customers receive the best value for their investment.',
    icon: 'badge-check',
  },
  {
    title: 'Customer-Centric Approach',
    body: 'Our client-focused philosophy means we prioritise your needs and work collaboratively to meet your specific requirements.',
    icon: 'users',
  },
  {
    title: 'Innovative Solutions',
    body: 'We stay ahead of industry trends, continuously seeking out effective products and solutions.',
    icon: 'lightbulb',
  },
  {
    title: 'Dependable Service',
    body: 'Our professional team is dedicated to a smooth, efficient experience from order placement to delivery.',
    icon: 'shield-check',
  },
  {
    title: 'Professional Team',
    body: 'Our strength lies in our people — experienced professionals who are passionate about what they do.',
    icon: 'users-round',
  },
]

export const experienceOrganisations = ['Rand Water', 'Adcock Ingram', 'NAFCOC', 'Maponya Medicals']

export const quoteCategoryOptions = [
  'PPE & Safety',
  'Cleaning Chemicals',
  'Steel Products',
  'Food Supplies',
  'Fruits & Vegetables',
  'Dry Food',
  'Frozen Food',
  'Beverages',
  'Supply & Delivery',
  'Catering',
  'Décor',
  'Events Planning',
  'Branding Solutions',
  'Corporate Gifts',
  'Promotional Products',
  'Stationery',
  'Company Activations',
  'Other',
]
