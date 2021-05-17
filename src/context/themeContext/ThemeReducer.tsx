import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.4)',
  dark: false,
  colors: {
    primary: '#5856d6',
    background: '#fff',
    card: 'red',
    text: 'red',
    border: 'red',
    notification: 'red',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.4)',
  dark: true,
  colors: {
    primary: '#5856d6',
    background: '#bbb',
    card: 'red',
    text: 'red',
    border: 'red',
    notification: 'red',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
      break;

    case 'set_dark_theme':
      return {...darkTheme};
      break;

    default:
      return state;
      break;
  }
};
