<script lang="ts">
  import Header from "./components/Header.svelte";
  import Theme from "./components/Theme.svelte";
  import Particles from "./components/Particles.svelte";
  import Icon from "./components/Icon.svelte";
  import Link from "./components/Link.svelte";
  import RickRoll from "./components/RickRoll.svelte";

  import { URLS, HEADINGS } from "./constants";

  import { background, secondary, primary } from "./stores/colors";
  import { fontLoaded } from "./stores/fontLoaded";
  import { rickroll } from "./stores/rickroll";
</script>

<Particles />

{#if $rickroll}
  <RickRoll />
{/if}

<div
  class="wrapper"
  style="
    --secondary: {$secondary};
    --background: {$background};
    --primary: {$primary};
  "
>
  <div class="container" class:font-loaded={$fontLoaded}>
    {#each HEADINGS as heading}
      <Header text={heading} />
    {/each}

    <div class="cv-container">
      <Link href={URLS.CV} inverted aria="cv link">.cv</Link>
    </div>

    <div class="icons">
      <Link href={URLS.GITHUB} aria="Github link">
        <Icon type="fab fa-github" />
      </Link>
      <Link href={URLS.TELEGRAM} aria="Telegram link">
        <Icon type="fab fa-telegram-plane" />
      </Link>
      <Link href={URLS.LINKEDIN} aria="Linkedin link">
        <Icon type="fab fa-linkedin-in" />
      </Link>
      <Link href={URLS.EMAIL} aria="Email link">
        <Icon type="fas fa-envelope" />
      </Link>
    </div>
  </div>

  {#if !$rickroll}
    <Theme />
  {/if}
</div>

<style>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    padding: 2%;

    pointer-events: none;

    display: flex;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: auto 50% auto auto;
    opacity: 0;
  }

  .container.font-loaded {
    animation: appear 0.6s;
    animation-fill-mode: forwards;
  }

  .icons {
    display: flex;
  }

  .cv-container {
    margin: calc(var(--space) * 5) 0;
  }

  @keyframes appear {
    from {
      transform: scale(2);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
