<script lang="ts">
  import { makeParticles } from '../particles';
  export let visible: boolean;

  let canvas: HTMLCanvasElement;
  let particles: ReturnType<typeof makeParticles>;
  let width: number;
  let height: number;

  import { onMount } from 'svelte';

  import { secondary as color } from '../stores/colors';

  $: {
    if (particles) {
      particles.color($color);
    }
  }

  function handleClick() {
    particles.click();
  }
  function handleMove(e: MouseEvent) {
    particles.mousemove({ x: e.clientX, y: e.clientY });
  }

  onMount(() => {
    particles = makeParticles(canvas);
  });

  $: {
    if (particles) {
      particles.resize({ width, height });
    }
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
  on:click={handleClick}
  on:mousemove={handleMove}
  id="particles"
  class:visible
  class:not-visible={!visible}
>
  <canvas class="canvas" bind:this={canvas} />
</div>

<style>
  .canvas {
    width: 100%;
    height: 100%;
  }

  #particles {
    height: 100%;
    animation: disappear 1s;
  }

  #particles.visible {
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

  @keyframes disappear {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0);
      opacity: 0;
    }
  }
</style>
