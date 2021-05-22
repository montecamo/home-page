import "./index.css";
import "./backgroundSetter";

import App from "./App.svelte";

function replaceContainer(Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component({ ...options, target: frag });

  options.target.replaceWith(frag);

  return component;
}

replaceContainer(App, {
  target: document.getElementById("root"),
});
