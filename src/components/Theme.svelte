<script>
  import Icon from "./Icon.svelte";

  export let theme;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<Icon
  type="theme hoverable {theme === 'dark' ? 'fas' : 'far'} fa-lightbulb"
  className="theme"
  on:click={handleClick}
/>

<style>
  :global(.theme) {
    position: absolute;
    right: 1%;
    top: 1%;
  }
</style>
