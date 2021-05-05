<script>
  export let type = "";
  export let className = "";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }

  $: console.warn("type", type);
</script>

<div on:click={handleClick}>
  <i class="icon {type} {className}" />
</div>

<style>
  .icon {
    font-size: calc(var(--font-size) * 0.8);
    cursor: pointer;
    padding: calc(var(--space) * 0.7);
  }
</style>
