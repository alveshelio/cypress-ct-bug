import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const ContinuousFeedbackIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'ContinuousFeedbackIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M19.707,6.747A9.1,9.1,0,1,0,3.422,14.638L.75,20.25l5.612-2.672A9.079,9.079,0,0,0,9.75,18.841"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25,7.125A1.875,1.875,0,1,1,10.125,9"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.125 11.25L10.125 11.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.125,11.25a.375.375,0,1,0,.375.375.375.375,0,0,0-.375-.375"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.882,10.5a5.344,5.344,0,0,1,4.026,8.886l.671,3.864-3.5-2.158a5.364,5.364,0,1,1-1.2-10.592Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.25 14.25L17.25 17.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
