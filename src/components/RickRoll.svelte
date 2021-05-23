<script lang="ts">
  import YoutubePlayer from 'youtube-player';
  import { onMount } from 'svelte';
  import { theme } from '../stores/theme';
  import { rickrollPlaying } from '../stores/rickroll';
  import { sineIn } from 'svelte/easing';

  const PLAYING = 1;

  let width = 0;
  let height = 0;
  let player: ReturnType<typeof YoutubePlayer>;
  let element: HTMLElement;

  onMount(() => {
    player = YoutubePlayer(element, {
      videoId: 'dQw4w9WgXcQ',
      width,
      height,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
      },
    });

    player.on('stateChange', ({ data }) => {
      if (data === PLAYING) {
        $rickrollPlaying = true;
      }
    });

    return () => {
      $rickrollPlaying = false;
      player.destroy();
    };
  });

  function disappear(_: HTMLElement, { duration }) {
    return {
      duration,
      css: (t: number) => {
        const eased = sineIn(t);

        return `opacity: ${eased}; filter: blur(${(1 - eased) * 20}px);`;
      },
    };
  }

  $: {
    if (player) {
      player.setSize(width, height);
    }
  }

  $: {
    if ($rickrollPlaying) {
      $theme = 'dark';
    }
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
  class="container"
  class:ready={$rickrollPlaying}
  out:disappear={{ duration: 1000 }}
>
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
