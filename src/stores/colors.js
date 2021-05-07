import { derived, readable } from "svelte/store";
import { COLORS } from "../constants";
import { theme } from "./theme";

const background = derived(theme, (theme$) =>
  theme$ === "light" ? COLORS.LIGHT : COLORS.DARK
);
const secondary = derived(theme, (theme$) =>
  theme$ === "light" ? COLORS.DARK : COLORS.LIGHT
);

const primary = readable(COLORS.PRIMARY);

export { background, secondary, primary };
