interface IIconProps {
  className?: string
}

function LinkedinIcon({ className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      className={className}
    >
      <g clipPath="url(#clip0_10_40)">
        <path
          fill="#B3B3B3"
          d="M24.997 25.077h-4.222v-6.615c0-1.578-.032-3.608-2.2-3.608-2.2 0-2.537 1.717-2.537 3.491v6.732h-4.222V11.474h4.056v1.854h.054c.567-1.07 1.945-2.198 4.003-2.198 4.278 0 5.069 2.815 5.069 6.48l-.001 7.467zM7.048 9.612a2.45 2.45 0 01-2.45-2.453 2.452 2.452 0 112.45 2.453zm2.117 15.465H4.932V11.474h4.233v13.603zM27.11.783H2.813C1.65.783.709 1.703.709 2.837v24.4c0 1.136.94 2.054 2.104 2.054h24.292c1.162 0 2.112-.918 2.112-2.054v-24.4c0-1.135-.95-2.054-2.112-2.054h.003z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_10_40">
          <path
            fill="#fff"
            d="M0 0H28.508V28.508H0z"
            transform="translate(.709 .783)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkedinIcon
