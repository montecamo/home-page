import { writable } from "svelte/store";

const fontLoaded = writable(false);

document.fonts
  .load('bold 12px "Poppins"')
  .then((fonts: FontFace[]) => fonts.length > 0)
  .then(fontLoaded.set);

export { fontLoaded };
