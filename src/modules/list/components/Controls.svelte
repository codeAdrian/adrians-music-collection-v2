<script>
  import Album from 'src/modules/details/components/Album.svelte';
  import Pagination from 'src/modules/list/components/Pagination.svelte';
  import Sort from 'src/modules/list/components/Sort.svelte';
  import Showing from './Showing.svelte';

  export let isLoading = false;
  export let pagination = {};
</script>

<aside class="controls">
  <div>
    <Sort />
  </div>
  <Showing {...pagination} />

  <Pagination {isLoading} {...pagination} />
</aside>

<style>
  .controls {
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-1) 0;

    @media (--mq-desktop-min) {
      display: flex;
      justify-content: space-between;
    }
  }

  .controls > :global(div) {
    margin-bottom: var(--spacing-1);

    @media (--mq-tablet-max) {
      display: flex;
      justify-content: space-between;
    }

    @media (--mq-tablet-min) {
      margin-bottom: 0;
    }
  }

  .controls > :global(.pagination) {
    @media (--mq-tablet-max) {
      justify-content: center;
    }
  }

  .controls :global(select + select) {
    @media (--mq-tablet-min) {
      margin-left: var(--spacing-n2);
    }
  }
</style>
