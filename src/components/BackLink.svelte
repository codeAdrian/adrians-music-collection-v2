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
    background: var(--color-gray-7);
    border: var(--spacing-n2) double var(--color-gray-1);
    z-index: 2;
    transform: rotate3d(0, 0, 1, -45deg);
    line-height: 1;
    text-decoration: none;
    color: var(--color-gray-1);
    height: var(--spacing-1);
    width: var(--spacing-1);

    @media (--mq-tablet-min) {
      bottom: var(--spacing-2);
      left: var(--spacing-1);
      font-size: var(--font-size-medium);
      height: var(--spacing-2);
      width: var(--spacing-2);
    }
  }

  .backlink:hover,
  .backlink:active {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-3);
  }

  .backlink:visited {
    color: var(--color-gray-1);
  }

  .backlink__icon {
    transform: rotate3d(0, 0, 1, 45deg);
  }
</style>
