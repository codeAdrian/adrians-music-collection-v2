<script>
  import { SORT_DIRECTIONS, SORT_OPTIONS } from 'src/constants/sort';
  import { sortBy, sortDirection } from 'src/modules/list/store/store';
</script>

<select bind:value={$sortBy}>
  {#each SORT_OPTIONS as { label, value }}
    <option {value}>{label}</option>
  {/each}
</select>

<select bind:value={$sortDirection}>
  {#each SORT_DIRECTIONS as { label, value }}
    <option {value}>{label}</option>
  {/each}
</select>
