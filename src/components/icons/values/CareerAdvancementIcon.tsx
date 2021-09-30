import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const CareerAdvancementIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CareerAdvancementIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M11.25 6.75L15.75 2.25 18.75 5.25 23.25 0.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.25 4.5L23.25 0.75 19.5 0.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.250 3.750 A3.000 3.000 0 1 0 8.250 3.750 A3.000 3.000 0 1 0 2.250 3.750 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 8.25L5.25 14.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5,23.25l.75-7.5h1.5v-3a4.5,4.5,0,0,0-9,0v3h1.5L3,23.25Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
