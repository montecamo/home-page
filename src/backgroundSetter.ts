import { background } from './stores/colors';

background.subscribe((color) => {
  document.documentElement.style.background = color;
});
