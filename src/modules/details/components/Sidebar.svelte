<script lang="ts">
  import Gallery from 'src/components/Gallery.svelte';

  export let images = [];
  export let artists_sort = '';
  export let title = '';
  export let year = 'Unknown';
  export let country = 'Unknown / Worldwide';
  export let formats = [];
  export let styles = [];
  export let labels = [];
  export let community;

  const artists = artists_sort?.replace(/\(.\d?\)/, '');

  const allFormats = [
    ...formats.map(({ name }) => name),
    ...formats.map(({ text }) => text),
  ].filter((item) => !!item);

  const formatDetails = formats
    ?.map(({ descriptions }) => descriptions?.join(', '))
    .filter((item) => !!item)
    .join(', ');
</script>

<aside class="album__summary">
  <figure>
    <Gallery {images} />
  </figure>

  <dl class="album__section">
    <dt>Artist(s)</dt>
    <dd>{artists}</dd>

    <dt>Title</dt>
    <dd>{title}</dd>

    <dt>Release year</dt>
    <dd>{year || 'Unknown'}</dd>

    <dt>Country / Region</dt>
    <dd>{country || 'Unknown / Worldwide'}</dd>

    <dt>Format</dt>
    <dd>
      {allFormats.join(', ')}<br />
    </dd>

    <dt>Format details</dt>
    <dd>
      {formatDetails}
    </dd>

    <dt>Genre(s)</dt>
    <dd>{styles?.join(', ')}</dd>

    <dt>Label(s)</dt>
    <dd>
      <ul class="album__list">
        {#each labels as { catno, name }}
          <li>{name} - {catno}</li>
        {/each}
      </ul>
    </dd>

    <dt>Community rating</dt>
    <dd>{community?.rating?.average || '?'} / 5</dd>
  </dl>
</aside>

<style>
  figure {
    margin: 0;
  }

  .album__summary {
    background: var(--color-pattern);
    background-size: var(--spacing-n2) var(--spacing-n2);
    @media (--mq-desktop-min) {
      text-align: right;
    }
  }

  .album__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .album__summary dl {
    @media (--mq-desktop-min) {
      max-width: var(--container-small);
      margin-left: auto;
    }
  }

  .album__section {
    padding: var(--spacing-1);
    margin: 0;
  }

  .album__section > :global(dt) {
    color: var(--color-cta);
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-medium);
  }

  .album__section > :global(dd) {
    font-size: var(--font-size-medium);
    margin: 0;
  }

  .album__section--long {
    max-width: var(--container-large);
  }

  .album__section--long > :global(dd) {
    font-size: var(--font-size-base);
    word-break: break-word;
  }

  .album__section > :global(dd + dt) {
    margin-top: var(--spacing-1);
  }
</style>
