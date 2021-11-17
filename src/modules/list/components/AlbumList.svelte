<script>
  import Sort from 'src/components/Sort.svelte';
  import Pagination from 'src/components/Pagination.svelte';
  import Card from './Card.svelte';
  import { API_PER_PAGE } from 'src/constants/api';

  export let query;
</script>

{#await query}
  <aside class="controls">
    <div>
      <Sort />
    </div>
    <Pagination isLoading />
  </aside>
  <ul class="album-list">
    {#each [...new Array(API_PER_PAGE)] as _, index}
      <Card id={`card-${index}`} isLoading={true} />
    {/each}
  </ul>
  <aside class="controls">
    <div>
      <Sort />
    </div>
    <Pagination isLoading />
  </aside>
{:then { releases, pagination }}
  <aside class="controls">
    <div>
      <Sort />
    </div>
    <Pagination {...pagination} />
  </aside>
  <ul class="album-list">
    {#each releases as album}
      <Card {...album} />
    {/each}
  </ul>
  <aside class="controls">
    <div>
      <Sort />
    </div>
    <Pagination {...pagination} />
  </aside>
{/await}

<style>
  .album-list {
    margin: 0;
    padding: 0;
    display: grid;
    list-style: none;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: var(--spacing-2) var(--spacing-1);

    @media (--mq-desktop-min) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (--mq-desktopLarge-min) {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1vw;
    }
  }

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
