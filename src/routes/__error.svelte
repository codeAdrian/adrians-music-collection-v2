<script>
  import Header from 'src/components/Header.svelte';
</script>

<Header />
<section class="not-found">
  <h2 class="not-found__title">Broken record</h2>
  <h3 class="not-found__subtitle">Page not found</h3>
  <i class="fa-solid fa-compact-disc not-found__icon" />

  <a href="/" class="not-found__link" sveltekit:prefetch>Return to homepage</a>
</section>

<style>
  .not-found {
    min-height: calc(100vh - 38px - 176px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  :global(.theme--dark) .not-found {
    color: var(--color-gray-5);
  }

  .not-found__icon {
    font-size: var(--font-size-xxlarge);
    display: block;
    margin: var(--spacing-1) 0 var(--spacing-2);
    animation: spin 1s ease infinite;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .not-found__title {
    font-size: var(--font-size-xxlarge);
    line-height: 1.1;
  }

  .not-found__subtitle {
    font-size: var(--font-size-large);
    margin: var(--spacing-n1) 0;
  }

  .not-found__link {
    display: inline-flex;
    text-decoration: none;
    padding: var(--spacing-n1) var(--spacing-1);
  }

  :global(.theme--light) .not-found__link {
    background-color: var(--color-gray-1);
    color: var(--color-gray-8);
  }

  :global(.theme--light) .not-found__link:hover {
    background-color: var(--color-gray-2);
  }

  :global(.theme--dark) .not-found__link {
    background-color: var(--color-gray-7);
    color: var(--color-gray-2);
  }

  :global(.theme--dark) .not-found__link:hover {
    background-color: var(--color-gray-5);
  }

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(359deg);
    }
  }

  @media (--mq-tablet-min) {
    .not-found {
      min-height: calc(100vh - 86px - 175px);
    }
  }
</style>
