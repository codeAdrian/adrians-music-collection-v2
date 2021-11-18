<script>
  export let identifiers = [];
</script>

{#if Boolean(identifiers.length)}
  <dt>Identifiers</dt>
  <dd>
    <dl class="album__details">
      {#each identifiers as { type, value }}
        <dt>{type}</dt>
        <dd>{value}</dd>
      {/each}
    </dl>
  </dd>
{/if}

<style>
  .album__details {
    display: grid;
    grid-gap: var(--spacing-n2) 0;

    @media (--mq-tablet-min) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .album__details > * {
    margin: 0;
  }

  .album__details > dt {
    font-weight: var(--font-weight-bold);

    @media (--mq-tablet-min) {
      border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-7);
      padding-bottom: var(--spacing-n3);
    }
  }

  .album__details > dd {
    padding-bottom: var(--spacing-n3);
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-7);
    word-break: break-word;
  }
</style>
