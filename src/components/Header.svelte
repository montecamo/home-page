<script>
  import Letter from "./Letter.svelte";

  export let text;

  import { activeLetters, toggleLetter } from "../stores/activeLetters";

  function handleClick(data) {
    toggleLetter(data.detail);
  }

  function getKey(i) {
    return `${text}-${i}`;
  }
</script>

<div class="header">
  {#each text as letter, i}
    {#if letter === " "}
      &nbsp;
    {:else}
      <Letter
        on:click={handleClick}
        key={getKey(i)}
        {letter}
        active={$activeLetters[getKey(i)]}
      />
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

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-bold);
  }
</style>
