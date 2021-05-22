<script lang="ts">
  import Icon from "./Icon.svelte";

  import ActiveBulbIcon from "@fortawesome/fontawesome-free/svgs/solid/lightbulb.svg?component";
  import InactiveBulbIcon from "@fortawesome/fontawesome-free/svgs/regular/lightbulb.svg?component";

  import { theme, toggleTheme } from "../stores/theme";
</script>

<div class="container hoverable" on:click={toggleTheme}>
  <Icon let:class={c}>
    {#if $theme === "dark"}
      <ActiveBulbIcon class={c} />
    {:else}
      <InactiveBulbIcon class={c} />
    {/if}
  </Icon>
</div>

<style>
  .container {
    position: absolute;
    right: 1%;
    top: 1%;
  }
</style>
