import { get } from "svelte/store";
import { theme } from "./stores/theme";
import { dark, light } from "./index.module.css";

document.documentElement.style.background =
  get(theme) === "light" ? light : dark;
