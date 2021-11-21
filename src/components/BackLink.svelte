<script>
  export let currentPage = 0;
</script>

<a class="backlink" href={currentPage > 1 ? `/page/${currentPage}` : '/'}>
  <i class="fas fa-arrow-left backlink__icon" />
</a>

<style>
  .backlink {
    position: fixed;
    bottom: var(--spacing-2);
    left: var(--spacing-1);
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transform: rotate3d(0, 0, 1, -45deg);
    line-height: 1;
    text-decoration: none;
    height: var(--spacing-2);
    width: var(--spacing-2);
    transition: background-color 0.3s ease, color 0.3s ease,
      border-color 0.3s ease;

    @media (--mq-tablet-min) {
      bottom: var(--spacing-2);
      left: var(--spacing-1);
      font-size: var(--font-size-medium);
    }
  }

  :global(.theme--light) .backlink,
  :global(.theme--light) .backlink:visited {
    background-color: var(--color-gray-7);
    color: var(--color-gray-1);
    border: var(--spacing-n2) double var(--color-gray-1);
  }

  :global(.theme--dark) .backlink,
  :global(.theme--dark) .backlink:visited {
    background-color: var(--color-gray-2);
    color: var(--color-gray-7);
    border: var(--spacing-n2) double var(--color-gray-4);
  }

  :global(.theme--light) .backlink:hover,
  :global(.theme--light) .backlink:active {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-3);
  }

  :global(.theme--dark) .backlink:hover,
  :global(.theme--dark) .backlink:active {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-4);
  }

  .backlink__icon {
    transform: rotate3d(0, 0, 1, 45deg);
  }
</style>
