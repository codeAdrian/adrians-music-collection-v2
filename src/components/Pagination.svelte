<script>
  import { activePage } from 'src/stores/activePage';

  export let pages = 11;
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

  .pagination--loading {
    background-color: var(--color-gray-7);
  }

  .pagination__link {
    padding: 0 var(--spacing-n4);
    color: var(--color-gray-1);
    text-decoration: none;
  }

  .pagination__link:not(.pagination__link--current):hover {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-5);
  }

  .pagination__link--current {
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-1);
  }

  .pagination--loading *,
  .pagination--loading:hover {
    color: transparent;
    box-shadow: 0 0 0 0 transparent !important;
    pointer-events: none;
  }
</style>
