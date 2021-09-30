import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const FlexibleScheduleIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'FlexibleScheduleIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M0.75 14.25L0.75 23.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M.75,21.75h15a3,3,0,0,0-3-3H9a3,3,0,0,0-3-3H.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18.75L9 18.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.684,12.816A8.25,8.25,0,1,1,17.021,17"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 3.75L14.25 9.75 18 9.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
