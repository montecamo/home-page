<script>
  import Letter from "./Letter.svelte";

  export let text;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<div class="header">
  {#each text as letter}
    <Letter>
      {letter}
    </Letter>
  {/each}
</div>

<style>
  .header {
    color: var(--secondary);
    white-space: nowrap;
    line-height: var(--line-height);
    display: flex;
    pointer-events: auto;

    font-family: "Poppins", sans-serif;
    font-size: var(--font-size);
    font-weight: 600;
  }
</style>
