<script>
  import Header from "./components/Header.svelte";
  import Theme from "./components/Theme.svelte";
  import Particles from "./components/Particles.svelte";
  import Icon from "./components/Icon.svelte";
  import Link from "./components/Link.svelte";

  import { URLS } from "./constants";

  import { background, secondary, primary } from "./stores/colors";
</script>

<Particles />

<div
  class="wrapper"
  style="
    --secondary: {$secondary};
    --background: {$background};
    --primary: {$primary};
  "
>
  <div class="container">
    <Header text="Hey." />
    <Header text="I'm montecamo." />
    <Header text="Frontend developer." />

    <div class="cv-container">
      <Link href={URLS.CV} inverted>.cv</Link>
    </div>

    <div class="icons">
      <Link href={URLS.GITHUB}>
        <Icon type="fab fa-github" />
      </Link>
      <Link href={URLS.TELEGRAM}>
        <Icon type="fab fa-telegram-plane" />
      </Link>
      <Link href={URLS.LINKEDIN}>
        <Icon type="fab fa-linkedin-in" />
      </Link>
      <Link href={URLS.EMAIL}>
        <Icon type="fas fa-envelope" />
      </Link>
    </div>
  </div>

  <Theme />
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
      filter: blur(12px);
      transform: scale(2);
      opacity: 0;
    }
    to {
      filter: blur(0px);
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
