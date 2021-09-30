import { createIcon, IconProps } from '@chakra-ui/icons'
import { ComponentWithAs } from '@chakra-ui/react'

export const SafeEnvironmentIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'SafeEnvironmentIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          d="M13.083,15.524a1.5,1.5,0,0,1-2.166,0l-4.031-4.2a3.025,3.025,0,0,1-.567-3.492h0a3.026,3.026,0,0,1,4.846-.786L12,7.876l.835-.835a3.026,3.026,0,0,1,4.846.786h0a3.025,3.025,0,0,1-.567,3.492Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.25,3.923v7.614c0,3.723,1.629,8.8,8.673,11.513a3,3,0,0,0,2.154,0c7.041-2.708,8.673-7.822,8.673-11.513V3.923a1.486,1.486,0,0,0-.868-1.362A21.7,21.7,0,0,0,12,.75,21.7,21.7,0,0,0,3.118,2.561,1.486,1.486,0,0,0,2.25,3.923Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
})
