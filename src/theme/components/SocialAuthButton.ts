export const SocialAuthButton = {
  baseStyle: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    textTransform: 'none',
    fontFamily: 'Gilroy',
    rounded: '0.25rem',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
  },
  sizes: {
    md: {
      fontSize: '16px',
    },
  },
  variants: {
    linkedIn: ({ colorScheme }) => {
      return {
        bg: `${colorScheme}.300`,
        textTransform: 'none',
        color: 'white',
      }
    },
    simple: {
      bg: 'white',
      color: 'black',
    },
    defaultProps: {
      size: 'md',
      variant: 'simple',
    },
  },
}
