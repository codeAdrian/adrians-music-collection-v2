<script>
  import Switcher from 'src/modules/theme/components/Switcher.svelte';

  export let href = '/';
</script>

<header class="header">
  <a class="header__link" {href}>
    <h1 class="header__logo">Adrian's Music Collection</h1>
  </a>

  <Switcher />
</header>

<style>
  .header {
    background-color: var(--color-gray-1);
    color: var(--color-gray-8);
    display: flex;
    justify-content: space-between;

    padding: var(--spacing-n2) var(--spacing-1);

    @media (--mq-tablet-min) {
      padding: var(--spacing-1) var(--spacing-2);
    }
  }

  .header__link {
    color: var(--color-gray-7);
    text-decoration: none;
    display: inline-block;
  }
</style>
