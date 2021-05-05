<script>
  import Link from "./Link.svelte";
  import Icon from "./Icon.svelte";
</script>

<div class="icons">
  <Link href="https://github.com/montecamo">
    <Icon type="fab fa-github" />
  </Link>
  <Link href="https://t.me/montecamo">
    <Icon type="fab fa-telegram-plane" />
  </Link>
  <Link href="https://linkedin.com/in/montecamo">
    <Icon type="fab fa-linkedin-in" />
  </Link>
  <Link href="mailto:merrychristek@gmail.com">
    <Icon type="fas fa-envelope" />
  </Link>
</div>

<style>
  .icons {
    display: flex;
  }
</style>
