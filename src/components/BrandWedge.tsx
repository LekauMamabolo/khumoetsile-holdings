interface Props {
  className?: string
}

/** Curved navy + green accent motif echoing the brand's flyer artwork. */
export default function BrandWedge({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M600 0H260c110 60 190 170 190 300s-80 240-190 300h340V0Z"
        fill="#0A2540"
      />
      <path
        d="M600 140c-90 30-150 120-150 220s60 190 150 220V140Z"
        fill="#1E7A45"
      />
      <path
        d="M600 260c-45 20-75 65-75 110s30 90 75 110V260Z"
        fill="#6FBE44"
      />
    </svg>
  )
}
