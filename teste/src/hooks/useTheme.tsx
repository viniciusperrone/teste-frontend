import { useContext } from 'react';
import { Context } from '.';

type ThemeProps = {
  theme: boolean;
  setTheme: Function;
};

export function useTheme() {
  const context = useContext(Context);

  const { theme, setTheme } = context as ThemeProps;

  return {
    theme,
    setTheme,
  };
}
