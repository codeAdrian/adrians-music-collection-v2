<script>
  export let tracklist = [];
</script>

<dt>Tracklist</dt>
<dd>
  <ol class="album__list album__tracklist album__wrapper">
    {#each tracklist as { position, title, duration, type_, sub_tracks }, i}
      {#if type_ === 'heading'}
        <li class="album__tracklist-title">
          {title}
        </li>
      {:else}
        <li>
          <span>
            {position
              .replace('CD-', '')
              .replace('DVD-', '')
              .replace('BD-', '') || i + 1}
          </span>
          <span>
            {title}
            {#if type_ === 'index'}
              <ul>
                {#each sub_tracks as track}
                  <li>{track.title}</li>
                {/each}
              </ul>
            {/if}
          </span>
          <span class="album__tracklist-duration">
            {duration || 'n/a'}
          </span>
        </li>
      {/if}
    {/each}
  </ol>
</dd>

<style>
  .album__tracklist > li:not(.album__tracklist-title) {
    display: grid;
    align-items: baseline;
    grid-template-columns: minmax(4ch, max-content) auto minmax(
        50px,
        max-content
      );
    grid-gap: var(--spacing-n1);
    margin-top: var(--spacing-n3);
    padding-bottom: var(--spacing-n3);
    transition: border-color 0.3s ease;
  }

  :global(.theme--light) .album__tracklist > li:not(.album__tracklist-title) {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-6);
  }

  :global(.theme--dark) .album__tracklist > li:not(.album__tracklist-title) {
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-3);
  }

  .album__tracklist-duration {
    font-size: var(--font-size-small);
    text-align: right;
    transition: color 0.3s ease;
  }

  :global(.theme--light) .album__tracklist-duration {
    color: var(--color-gray-3);
  }

  :global(.theme--dark) .album__tracklist-duration {
    color: var(--color-gray-4);
  }

  .album__tracklist-title {
    font-family: var(--font-family-primary);
    margin: var(--spacing-n1) 0;
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-base);
  }

  .album__wrapper {
    max-width: var(--container-medium);
  }

  .album__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
