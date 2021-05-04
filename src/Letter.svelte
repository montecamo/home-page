<script>
  export let active;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<div class="letter" class:active on:click={handleClick}>
  <slot />
</div>

<style>
  .letter {
    font-style: normal;
    cursor: default;

    background: linear-gradient(
      to bottom,
      var(--secondary) 0%,
      var(--secondary) 100%
    );

    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 100% 0;
    text-decoration: none;
    transition: background-size 0.2s, color 0.2s;
  }
  .letter:hover {
    color: var(--primary);
    background-size: 100% 50%;
  }

  .active {
    color: var(--primary);
    background: linear-gradient(
      to bottom,
      var(--primary) 0%,
      var(--primary) 100%
    );
  }
  .active:hover {
    color: var(--secondary);
  }
</style>
