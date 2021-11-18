<script>
  import Pagination from 'src/components/Pagination.svelte';
  import Sort from 'src/components/Sort.svelte';

  export let isLoading = false;
  export let pagination = {};
</script>

<aside class="controls">
  <div>
    <Sort />
  </div>
  <Pagination {isLoading} {...pagination} />
</aside>

<style>
  .controls {
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-1) 0;

    @media (--mq-tablet-min) {
      display: flex;
    }
  }

  .controls > :global(div) {
    @media (--mq-tablet-max) {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-1);
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
