<script>
  export let active;
  export let index;
  export let letter;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click", index);
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
