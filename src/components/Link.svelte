<script>
  export let inverted = false;
  export let href;
  export let className = "";
</script>

<a class="link hoverable {className}" class:inverted {href} target="_blank">
  <slot />
</a>

<style>
  .link {
    text-decoration: inherit;
    display: block;

    cursor: pointer;
    pointer-events: auto;

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-bold);
  }
</style>
