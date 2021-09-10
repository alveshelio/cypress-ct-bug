import { keyframes } from '@chakra-ui/system'

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  })

export const Skeleton = {
  baseStyle: ({ theme }) => ({
    opacity: 0.5,
    borderRadius: '2px',
    borderColor: theme.colors.gray[100],
    background: theme.colors.gray[300],
    animation: `0.8s linear infinite alternate ${fade(
      theme.colors.gray[100],
      theme.colors.gray[300]
    )}`,
  }),
}
