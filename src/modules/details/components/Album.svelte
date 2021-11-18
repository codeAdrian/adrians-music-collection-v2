<script>
  import BackLink from 'src/components/BackLink.svelte';
  import Gallery from 'src/components/Gallery.svelte';

  export let artists_sort = '';
  export let title = '';
  export let currentPage = 1;
  export let extraartists = [];
  export let styles = [];
  export let images = [];
  export let tracklist = [];
  export let videos = [];
  export let year = 'Unknown';
  export let labels = [];
  export let country = '';
  export let community;
  export let formats = [];
  export let identifiers = [];
  export let notes = '';

  console.log(tracklist);

  const hasVideo = Boolean(videos.length);
  const videoId = hasVideo && videos[0].uri.split('v=')[1];

  const artists = artists_sort?.replace(/\(.\d?\)/, '');

  const allFormats = [
    ...formats.map(({ name }) => name),
    ...formats.map(({ text }) => text),
  ].filter((item) => !!item);
</script>

<section class="album">
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
        {formats
          ?.map(({ descriptions }) => descriptions?.join(', '))
          .filter((item) => !!item)
          .join(', ')}
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

  <article class="album__content">
    {#if hasVideo}
      <iframe
        class="album__video-frame"
        src={`https://www.youtube.com/embed/${videoId || ''}`}
        {title}
        data-modestbranding="1"
        data-showinfo="0"
        data-controls="0"
        data-fs="0"
      />
    {:else}
      <div class="album__video-frame" />
    {/if}

    <dl class="album__section album__section--long">
      <dt>Tracklist</dt>
      <dd>
        <ol class="album__list album__tracklist album__wrapper">
          {#each tracklist as { position, title, duration, type_ }}
            {#if type_ === 'heading'}
              <li class="album__tracklist-title">
                {title}
              </li>
            {:else}
              <li>
                <span>
                  {position}
                </span>
                <span>
                  {title}
                </span>
                <span class="album__tracklist-duration">
                  {duration || 'n/a'}
                </span>
              </li>
            {/if}
          {/each}
        </ol>
      </dd>

      {#if notes}
        <dt>Notes</dt>
        <dd>{notes}</dd>
      {/if}

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
    </dl>
  </article>
</section>

<BackLink {currentPage} />

<style>
  .album {
    display: grid;
    grid-gap: 0;
    @media (--mq-desktop-min) {
      grid-template-columns: 36% auto;
    }
  }

  .album :global(img) {
    width: 100%;
    max-width: none;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top center;
  }

  .album__video-frame {
    display: block;
    border: 0;
    width: 100%;
    aspect-ratio: 16/9;
    background-color: var(--color-gray-7);
  }

  .album__summary {
    background: var(--color-pattern);
    background-size: var(--spacing-n2) var(--spacing-n2);
    @media (--mq-desktop-min) {
      text-align: right;
    }
  }

  .album__section {
    padding: var(--spacing-1);
    margin: 0;
  }

  .album__section > dt {
    color: var(--color-cta);
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-medium);
  }

  .album__section > dd {
    font-size: var(--font-size-medium);
    margin: 0;
  }

  .album__section--long {
    max-width: var(--container-large);
  }

  .album__section--long > dd {
    font-size: var(--font-size-base);
    word-break: break-word;
  }

  .album__section > dd + dt {
    margin-top: var(--spacing-1);
  }

  .album__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .album__tracklist > li:not(.album__tracklist-title) {
    display: grid;
    grid-template-columns: minmax(5ch, max-content) auto minmax(
        7ch,
        max-content
      );
    grid-gap: var(--spacing-1);
    margin-top: var(--spacing-n3);
    padding-bottom: var(--spacing-n3);
    align-items: flex-end;
    border-bottom: calc(var(--spacing-n4) / 2) solid var(--color-gray-7);
  }

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

  .album__tracklist-duration {
    font-size: var(--font-size-small);
    color: var(--color-gray-3);
  }

  .album__wrapper {
    max-width: var(--container-medium);
  }

  .album__tracklist-title {
    font-family: var(--font-family-primary);
    margin: var(--spacing-n1) 0;
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-base);
  }

  figure {
    margin: 0;
  }

  .album__summary dl {
    @media (--mq-desktop-min) {
      max-width: var(--container-small);
      margin-left: auto;
    }
  }
</style>
