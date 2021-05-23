<script lang="ts">
  import Letter from './Letter.svelte';

  export let text: string;

  import { activeLetters, toggleLetter } from '../stores/activeLetters';

  function handleClick(data: CustomEvent<string>) {
    toggleLetter(data.detail);
  }

  function getKey(i: number): string {
    return `${text}-${i}`;
  }
</script>

<div class="header">
  {#each text as letter, i}
    {#if letter === ' '}
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
