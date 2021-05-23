<script lang="ts">
  export let active: boolean;
  export let letter: string;
  export let key: string;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click', key);
  }
</script>

<div class="letter hoverable" class:inverted={active} on:click={handleClick}>
  {letter}
</div>

<style>
  .letter {
    font-style: normal;
    cursor: pointer;
  }
</style>
