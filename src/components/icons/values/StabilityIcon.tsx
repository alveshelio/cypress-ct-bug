import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const StabilityIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'StabilityIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M9.679 3.000 A2.250 2.250 0 1 0 14.179 3.000 A2.250 2.250 0 1 0 9.679 3.000 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.929 5.25L11.929 23.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.179 9.75L15.679 9.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.179,14.25H3.25a.75.75,0,0,0-.658,1.11A10.567,10.567,0,0,0,11.929,21"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.679,14.25h1.929a.75.75,0,0,1,.658,1.11A10.567,10.567,0,0,1,11.929,21"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
