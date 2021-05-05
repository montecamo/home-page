import "./index.css";

import "@fortawesome/fontawesome-free/css/brands";
import "@fortawesome/fontawesome-free/css/solid";
import "@fortawesome/fontawesome-free/css/regular";
import "@fortawesome/fontawesome-free/css/fontawesome";

import "particles.js";

import App from "./App.svelte";

function replaceContainer(Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component({ ...options, target: frag });

  options.target.replaceWith(frag);

  return component;
}

replaceContainer(App, {
  target: document.getElementById("svelte"),
});
