import { writable } from "svelte/store";

const activeLetters = writable({});

const toggleLetter = (key) => {
  activeLetters.update((letters) => {
    letters[key] = !letters[key];

    return letters;
  });
};

export { activeLetters, toggleLetter };
