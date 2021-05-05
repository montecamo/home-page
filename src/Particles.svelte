<script>
  import "particles.js";
  import { onMount } from "svelte";
  import config from "./particles.json";

  export let color;
  export let background;

  $: {
    if (window["pJSDom"].length > 0) {
      // fucking undocumented lib 🤬🤬🤬
      pJSDom[0].pJS.particles.line_linked.color = color;
      pJSDom[0].pJS.particles.color.value = color;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  onMount(() => {
    setTimeout(() => {
      particlesJS("particles", config);
    });
  });
</script>

<div id="particles" style="background: {background}" />

<style>
  #particles {
    transition: background 0.2s;
  }
</style>
