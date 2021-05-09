<script>
  import YoutubePlayer from "youtube-player";
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

  const PLAYING = 1;

  let ready = false;

  let width = 0;
  let height = 0;
  let player;
  let element;

  onMount(() => {
    player = new YoutubePlayer(element, {
      videoId: "dQw4w9WgXcQ",
      width,
      height,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
      },
    });

    player.on("stateChange", ({ data }) => {
      if (data === PLAYING) {
        ready = true;
      }
    });

    return () => player.destroy();
  });

  $: {
    if (player) {
      player.setSize(width, height);
    }
  }

  $: {
    if (ready) {
      $theme = "dark";
    }
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div class="container" class:ready>
  <div bind:this={element} id="player" />
</div>

<style>
  .container {
    position: absolute;
    pointer-events: auto;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0;
    filter: blur(20px);

    transition: opacity 2s, filter 2s;
  }

  .container.ready {
    opacity: 1;
    filter: unset;
  }
</style>
