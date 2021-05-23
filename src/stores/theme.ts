import { writable, get } from 'svelte/store';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

const getCachedTheme = (): Theme | null => {
  const theme = localStorage.getItem(STORAGE_KEY);

  if (theme === 'light' || theme === 'dark') {
    return theme;
  }

  return null;
};

const updateCachedTheme = (theme: Theme) =>
  localStorage.setItem(STORAGE_KEY, theme);

const getSystemTheme = (): Theme =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const theme = writable<Theme>(getCachedTheme() ?? getSystemTheme());

theme.subscribe(updateCachedTheme);

const toggleTheme = () => {
  theme.set(get(theme) === 'light' ? 'dark' : 'light');
};

export { theme, toggleTheme };
