<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<div on:click={handleClick} class="icon">
  <slot class="svg" />
</div>

<style>
  .svg {
    fill: currentColor;
    height: calc(var(--font-size) * 0.8);
  }

  .icon {
    padding: calc(var(--space) * 0.7);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
