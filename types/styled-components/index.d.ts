import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      netural100: string;
      netural200: string;
      netural300: string;
      netural400: string;
      netural500: string;
      netural600: string;
      netural700: string;
      netural800: string;
      netural900: string;
    };
    fontSize: {
      logo: string;
      bannerTitle: string;
      title: string;
      subtitle: string;
      paragraph: string;
    };
    borderRadius: number;
    layoutMaxWidth: number;
  }
}
