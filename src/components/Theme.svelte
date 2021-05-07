<script>
  import Icon from "./Icon.svelte";
  import { theme, toggleTheme } from "../stores/theme";
</script>

<div class="container">
  <Icon
    type="theme hoverable {$theme === 'dark' ? 'fas' : 'far'} fa-lightbulb"
    on:click={toggleTheme}
  />
</div>

<style>
  .container {
    position: absolute;
    right: 1%;
    top: 1%;
  }
</style>
