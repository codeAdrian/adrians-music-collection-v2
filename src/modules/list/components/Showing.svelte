<script>
  export let items = 0;
  export let page = 0;
  export let per_page = 0;

  const start = (page - 1) * per_page + 1;
  const end = start + per_page - 1;
</script>

<span class="showing" class:showing--loading={!items || !page || !per_page}>
  Showing <strong>{start || 1}</strong> -
  <strong>{end > items ? items || 48 : end || 48} </strong>of
  <strong>
    {items || 283}
  </strong>
  items
</span>

<style>
  .showing {
    color: var(--color-gray-1);
    transition: color 0.3s ease;

    @media (--mq-tablet-max) {
      display: none;
    }
  }
  :global(.theme--dark) .showing {
    color: var(--color-gray-4);
  }

  :global(.theme--dark) .showing strong {
    color: var(--color-gray-5);
  }

  :global(.theme--light) .showing--loading {
    background-color: var(--color-gray-7);
  }

  :global(.theme--dark) .showing--loading {
    background-color: var(--color-gray-4);
  }

  .showing--loading,
  .showing--loading * {
    color: transparent !important;
  }
</style>
