import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const FlatOrganizationIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'FlatOrganizationIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M4.750 0.748 L19.750 0.748 L19.750 5.248 L4.750 5.248 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 5.248L12.25 18.748"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.75,18.748v-4.5a1.5,1.5,0,0,1,1.5-1.5h12a1.5,1.5,0,0,1,1.5,1.5v4.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.500 20.998 A2.250 2.250 0 1 0 7.000 20.998 A2.250 2.250 0 1 0 2.500 20.998 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.000 20.998 A2.250 2.250 0 1 0 14.500 20.998 A2.250 2.250 0 1 0 10.000 20.998 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.500 20.998 A2.250 2.250 0 1 0 22.000 20.998 A2.250 2.250 0 1 0 17.500 20.998 Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
