<script>
  import Sort from 'src/components/Sort.svelte';
  import Pagination from 'src/components/Pagination.svelte';
  import Card from './Card.svelte';
  import { API_PER_PAGE } from 'src/constants/api';
  import Controls from './Controls.svelte';
  import List from './List.svelte';

  export let query;
</script>

{#await query}
  <Controls isLoading />
  <List isLoading />
  <Controls isLoading />
{:then { releases, pagination }}
  <Controls {...pagination} />
  <List {releases} />
  <Controls {...pagination} />
{/await}
