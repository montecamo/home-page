<script lang="ts">
  export let inverted = false;
  export let aria = "";
  export let href: string;
</script>

<a
  class="link hoverable"
  class:inverted
  {href}
  aria-label={aria}
  target="_blank"
  rel="noopener"
>
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
