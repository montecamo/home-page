<script>
  import Letter from "./Letter.svelte";

  export let text;
  let actives = {};

  function handleClick(data) {
    actives[data.detail] = !actives[data.detail];
  }
</script>

<div class="header">
  {#each text as letter, i}
    {#if letter === " "}
      &nbsp;
    {:else}
      <Letter on:click={handleClick} index={i} {letter} active={actives[i]} />
    {/if}
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
