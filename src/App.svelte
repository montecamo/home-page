<script>
  import Header from "./components/Header.svelte";
  import Theme from "./components/Theme.svelte";
  import Particles from "./components/Particles.svelte";
  import Icon from "./components/Icon.svelte";
  import Link from "./components/Link.svelte";

  import {
    LIGHT_COLOR,
    DARK_COLOR,
    CV_URL,
    GITHUB_URL,
    LINKEDIN_URL,
    EMAIL_URL,
    TELEGRAM_URL,
  } from "./constants";

  let theme = "dark";

  $: secondaryColor = theme === "light" ? DARK_COLOR : LIGHT_COLOR;
  $: backgroundColor = theme === "light" ? LIGHT_COLOR : DARK_COLOR;

  function handleThemeChange() {
    theme = theme === "dark" ? "light" : "dark";
  }
</script>

<Particles color={secondaryColor} background={backgroundColor} />

<div
  class="wrapper"
  style="
    --secondary: {secondaryColor};
    --background: {backgroundColor};
  "
>
  <div class="container">
    <Header text="Hey." />
    <Header text="I'm montecamo." />
    <Header text="Frontend developer." />

    <Link href={CV_URL} inverted className="cv">.cv</Link>

    <div class="icons">
      <Link href={GITHUB_URL}>
        <Icon type="fab fa-github" />
      </Link>
      <Link href={TELEGRAM_URL}>
        <Icon type="fab fa-telegram-plane" />
      </Link>
      <Link href={LINKEDIN_URL}>
        <Icon type="fab fa-linkedin-in" />
      </Link>
      <Link href={EMAIL_URL}>
        <Icon type="fas fa-envelope" />
      </Link>
    </div>
  </div>

  <Theme on:click={handleThemeChange} {theme} />
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
    animation: appear 1s;
    animation-fill-mode: forwards;
  }

  .icons {
    display: flex;
  }

  :global(.cv) {
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
