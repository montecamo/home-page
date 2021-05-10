import { derived, writable } from "svelte/store";
import { HEADINGS } from "../constants";
import { activeLetters } from "./activeLetters";

const allLettersLength = HEADINGS.join("").replace(/ /g, "").length;

const rickroll = derived(
  activeLetters,
  (letters$) =>
    Object.values(letters$).filter(Boolean).length === allLettersLength
);
const rickrollPlaying = writable(false);

export { rickroll, rickrollPlaying };
