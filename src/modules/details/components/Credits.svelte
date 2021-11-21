<script>
  export let extraartists = [];
</script>

{#if Boolean(extraartists.length)}
  <dt>Credits</dt>
  <dd>
    <dl class="album__details">
      {#each extraartists as { name, role }}
        <dt>{role}</dt>
        <dd>{name}</dd>
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
      padding-bottom: var(--spacing-n3);
    }
  }

  :global(.theme--light) .album__details > dt {
    @media (--mq-tablet-min) {
      border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-6);
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
  }

  :global(.theme--light) .album__details > dd {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-6);
  }

  :global(.theme--dark) .album__details > dd {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-3);
  }
</style>
