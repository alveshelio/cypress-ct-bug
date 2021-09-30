import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const StartupCultureIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'StartupCultureIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
      <g transform="matrix(1,0,0,1,0,0)">
        <g>
          <path
            d="M15.41,17.75v2.5a3,3,0,0,1-3,3H4.91a3,3,0,0,1-3-3V3.75a3,3,0,0,1,3-3h7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g>
            <path
              d="M10.92,14.9C9.63,16.2,7,15.63,7,15.63s-.57-2.6.73-3.89a1.9,1.9,0,0,1,3,.2A1.9,1.9,0,0,1,10.92,14.9Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.37,9.07l2.44,2.44.77,2.42a.62.62,0,0,0,.36.38.39.39,0,0,0,.43-.05l2.27-2a1.57,1.57,0,0,0,.21-1.76l-.49-1.14,3.18-1.92a3.36,3.36,0,0,0,1.55-2.77L22,.93,18.21.79a3.36,3.36,0,0,0-2.77,1.55L13.36,5.77l-1.11-.53a1.57,1.57,0,0,0-1.76.21L8.62,7.51a.39.39,0,0,0,0,.43A.64.64,0,0,0,9,8.3Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="18.24"
              cy="4.64"
              r="1"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
            />
          </g>
          <line
            x1="1.91"
            y1="19"
            x2="15.41"
            y2="19"
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
