import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const CompensationIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CompensationIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <g>
          <path
            d="M7.5,10.12a.38.38,0,0,1,.38.38.37.37,0,0,1-.38.37.36.36,0,0,1-.37-.37.37.37,0,0,1,.37-.38"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75,3.75h-2a1.34,1.34,0,0,0-.5,2.59l2.06.82a1.34,1.34,0,0,1-.5,2.59h-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="17.25"
            y1="3.75"
            x2="17.25"
            y2="3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="17.25"
            y1="10.5"
            x2="17.25"
            y2="9.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="17.25"
            cy="6.75"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9,5.53l-2-1.65a.75.75,0,0,0-1.22.48L5.47,7.21a8.13,8.13,0,0,0-2.87,4H.75v6H3.24a9.11,9.11,0,0,0,8,4.5,8.91,8.91,0,0,0,8.69-6.09"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="6.01"
            y1="20.2"
            x2="5.25"
            y2="23.25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16.49"
            y1="20.21"
            x2="17.25"
            y2="23.25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  ),
})
