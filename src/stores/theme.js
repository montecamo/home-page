import { writable } from "svelte/store";

const STORAGE_KEY = "theme";

const getCachedTheme = () => localStorage.getItem(STORAGE_KEY);
const updateCachedTheme = (theme) => localStorage.setItem(STORAGE_KEY, theme);

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const theme = writable(getCachedTheme() ?? getSystemTheme());

theme.subscribe(updateCachedTheme);

export { theme };
