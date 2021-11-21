import { theme } from './store';

export const setTheme = (value: string) => {
  theme.set(value);
  localStorage?.setItem('theme', value);
  document.body.classList.add(`theme--${value}`);
  document.body.dataset.theme = value;
};
