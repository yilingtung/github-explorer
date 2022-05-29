import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    netural100: '248, 249, 250', // rgba(248, 249, 250)
    netural200: '233, 236, 239', // rgba(233, 236, 239)
    netural300: '222, 226, 230', // rgba(222, 226, 230)
    netural400: '206, 212, 218', // rgba(206, 212, 218)
    netural500: '173, 181, 189', // rgba(173, 181, 189)
    netural600: '108, 117, 125', // rgba(108, 117, 125)
    netural700: '73, 80, 87', // rgba(73, 80, 87)
    netural800: '52, 58, 64', // rgba(52, 58, 64)
    netural900: '33, 37, 41', // rgba(33, 37, 41)
  },
  fontSize: {
    logo: '20px',
    bannerTitle: '40px',
    title: '24px',
    subtitle: '20px',
    paragraph: '16px',
    small: '14px',
  },
  borderRadius: 12,
  layoutMaxWidth: 1140,
};

export default theme;
