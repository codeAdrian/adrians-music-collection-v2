<script>
  import { activePage } from 'src/modules/list/store/store';

  export let pages = 8;
  export let page = 1;
  export let isLoading = false;

  const handleClick = (e) => {
    const { page } = e.currentTarget.dataset;

    const nextPage = parseInt(page);

    if (isNaN(nextPage)) {
      return;
    }

    activePage.set(nextPage);
  };
</script>

{#if pages > 1}
  <ul class:pagination--loading={isLoading} class="pagination">
    <li>
      <a class="pagination__link" href={page > 1 ? `/` : null}
        ><i class="fa-solid fa-angles-left" /></a
      >
    </li>
    <li>
      <a class="pagination__link" href={page > 1 ? `/page/${page - 1}` : null}
        ><i class="fa-solid fa-angle-left" /></a
      >
    </li>
    {#each [...new Array(pages)] as _, index}
      <li>
        <a
          class="pagination__link"
          href={index > 0 ? `/page/${index + 1}` : '/'}
          class:pagination__link--current={page === index + 1}
          sveltekit:prefetch
          data-page={index + 1}
          on:click={handleClick}
        >
          {index + 1}
        </a>
      </li>
    {/each}
    <li>
      <a
        class="pagination__link"
        href={page < pages ? `/page/${page + 1}` : null}
        ><i class="fa-solid fa-angle-right" /></a
      >
    </li>
    <li>
      <a class="pagination__link" href={page < pages ? `/page/${pages}` : null}
        ><i class="fa-solid fa-angles-right" /></a
      >
    </li>
  </ul>
{/if}

<style>
  .pagination {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  .pagination__link {
    padding: 0 var(--spacing-n4);
    text-decoration: none;
    transition: color 0.3s ease, box-shadow 0.3s ease;
  }

  .pagination__link:not([href]) {
    opacity: 0.25;
    cursor: not-allowed;
  }

  :global(.theme--light) .pagination__link {
    color: var(--color-gray-1);
  }

  :global(.theme--dark) .pagination__link {
    color: var(--color-gray-5);
  }

  :global(.theme--light)
    .pagination__link[href]:not(.pagination__link--current):hover {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-5);
  }

  :global(.theme--light) .pagination__link--current {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-1);
  }

  :global(.theme--dark)
    .pagination__link[href]:not(.pagination__link--current):hover {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-4);
  }

  :global(.theme--dark) .pagination__link--current {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-7);
  }

  :global(.theme--light) .pagination--loading {
    background-color: var(--color-gray-7);
  }

  :global(.theme--dark) .pagination--loading {
    background-color: var(--color-gray-4);
  }

  .pagination--loading *,
  .pagination--loading:hover {
    color: transparent !important;
    box-shadow: 0 0 0 0 transparent !important;
    pointer-events: none !important;
  }
</style>
