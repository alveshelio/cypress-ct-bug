export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'Gilroy',
    // Because Gilroy font compared to 'Space Grotesk' is 4px upper
    paddingTop: '4px',
    height: 'unset',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.200',
    },
    solid: {
      bg: 'brand.200',
      color: 'white',
    },
    link: {
      color: 'white',
      fontSize: 'sm',
      fontWeight: 700,
      textTransform: 'none',
      textDecoration: 'underline',
    },
    linkGhost: {
      color: 'gray.300',
      fontSize: 'sm',
      fontWeight: 600,
      textDecoration: 'none',
      textTransform: 'none',
    },
    plain: {
      bg: 'transparent',
      color: 'gray.300',
      borderColor: 'gray.300',
    },
    simple: ({ theme }) => {
      return {
        justifyContent: 'flex-start',
        bg: 'white',
        color: 'black',
        textTransform: 'none',
        fontFamily: 'Gilroy',
        rounded: theme.radii.base,
      }
    },
    success: {
      bg: 'brand.200',
      rounded: 'lg',
      color: 'black',
    },
    danger: {
      bg: 'transparent',
      borderColor: 'danger.500',
      borderWidth: '2px',
      borderStyle: 'solid',
      color: 'danger.500',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'success',
  },
}
