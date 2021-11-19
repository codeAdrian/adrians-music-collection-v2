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
    min-height: calc(100vh - 38px - 175px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }

  .not-found__subtitle {
    font-size: var(--font-size-large);
  }

  .not-found__link {
    display: inline-flex;
    text-decoration: none;
    padding: var(--spacing-n1) var(--spacing-1);
    background-color: var(--color-gray-1);
    color: var(--color-gray-8);
  }

  .not-found__link:hover {
    background-color: var(--color-gray-2);
  }

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(359deg);
    }
  }
</style>
