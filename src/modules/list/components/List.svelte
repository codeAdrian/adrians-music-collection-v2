<script>
  import { API_PER_PAGE } from 'src/constants/api';
  import Card from './Card.svelte';

  export let releases = [];
  export let isLoading = false;
</script>

<ul class="album-list">
  {#if isLoading}
    {#each [...new Array(API_PER_PAGE)] as _}
      <Card isLoading />
    {/each}
  {:else}
    {#each releases as album, i}
      <Card {...album} isFirst={i === 0} />
    {/each}
  {/if}
</ul>

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
</style>
