<script lang="ts">
  export let type = "";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<i on:click={handleClick} class="icon {type}" />

<style>
  .icon {
    font-size: calc(var(--font-size) * 0.8);
    cursor: pointer;
    padding: calc(var(--space) * 0.7);
  }
</style>
