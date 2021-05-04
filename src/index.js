import "./index.css";

import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "particles.js";
import config from "./particles.json";

import App from "./App.svelte";

function replaceContainer(Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component({ ...options, target: frag });

  console.warn("options", options);
  options.target.replaceWith(frag);

  return component;
}

replaceContainer(App, {
  target: document.getElementById("svelte"),
});

particlesJS("particles", config);
