import { writable } from 'svelte/store';

const activeLetters = writable<{ [key: string]: boolean }>({});

const toggleLetter = (key: string) => {
  activeLetters.update((letters) => {
    letters[key] = !letters[key];

    return letters;
  });
};

export { activeLetters, toggleLetter };
