<script lang="ts">
  import "@theboringindustries/particles.js";

  import { onMount } from "svelte";

  import { secondary as color } from "../stores/colors";

  const config = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: $color,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: $color,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  $: {
    if (window["pJSDom"].length > 0) {
      // fucking undocumented lib 🤬🤬🤬
      // @ts-ignore
      window.pJSDom[0].pJS.particles.line_linked.color = $color;
      // @ts-ignore
      window.pJSDom[0].pJS.particles.color.value = $color;
      // @ts-ignore
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  onMount(() => {
    setTimeout(() => {
      // @ts-ignore
      particlesJS("particles", config);
    });
  });
</script>

<div id="particles" />

<style>
  #particles {
    height: 100%;
  }

  :global(#particles canvas) {
    animation: appear 1s;
  }

  @keyframes appear {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
