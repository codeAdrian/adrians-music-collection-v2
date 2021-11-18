<script>
  import Controls from './Controls.svelte';
  import List from './List.svelte';

  export let query;
</script>

{#await query}
  <Controls isLoading />
  <List isLoading />
  <Controls isLoading />
{:then { releases, pagination }}
  <Controls {pagination} />
  <List {releases} />
  <Controls {pagination} />
{/await}
