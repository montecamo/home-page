import { get } from "svelte/store";
import { theme } from "./stores/theme";
import { LIGHT_COLOR, DARK_COLOR } from "./constants";

document.documentElement.style.background =
  get(theme) === "light" ? LIGHT_COLOR : DARK_COLOR;
