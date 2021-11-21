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
    transition: border-color 0.3s ease;

    @media (--mq-tablet-min) {
      padding-bottom: var(--spacing-n3);
    }
  }

  :global(.theme--light) .album__details > dt {
    @media (--mq-tablet-min) {
      border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-7);
    }
  }

  :global(.theme--dark) .album__details > dt {
    @media (--mq-tablet-min) {
      border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-3);
    }
  }

  .album__details > dd {
    padding-bottom: var(--spacing-n3);
    word-break: break-word;
    transition: border-color 0.3s ease;
  }

  :global(.theme--light) .album__details > dd {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-7);
  }

  :global(.theme--dark) .album__details > dd {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-3);
  }
</style>
