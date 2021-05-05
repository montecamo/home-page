<script>
  const LIGHT_COLOR = "#ffffff";
  const DARK_COLOR = "#373a42";

  import Header from "./Header.svelte";
  import Theme from "./Theme.svelte";
  import Particles from "./Particles.svelte";
  import Icons from "./Icons.svelte";
  import Link from "./Link.svelte";

  let theme = "light";

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

    <Link href="https://cv.montecamo.dev" inverted className="cv">.cv</Link>

    <Icons />
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
  }

  :global(.cv) {
    margin: calc(var(--space) * 5) 0;
  }
</style>
