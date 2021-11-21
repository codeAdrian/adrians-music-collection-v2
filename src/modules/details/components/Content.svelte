<script>
  import Credits from './Credits.svelte';
  import Identifiers from './Identifiers.svelte';
  import Notes from './Notes.svelte';
  import Tracklist from './Tracklist.svelte';
  import Video from './Video.svelte';

  export let title = '';
  export let extraartists = [];
  export let tracklist = [];
  export let identifiers = [];
  export let notes = '';
  export let videos = [];
</script>

<article class="album__content">
  <Video {videos} {title} />

  <dl class="album__section album__section--long">
    <Tracklist {tracklist} />
    <Notes {notes} />
    <Credits {extraartists} />
    <Identifiers {identifiers} />
  </dl>
</article>

<style>
  .album__section {
    padding: var(--spacing-1);
    margin: 0;
    transition: color 0.3s ease;
  }

  .album__section > :global(dt) {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-medium);
    transition: color 0.3s ease;
  }

  :global(.theme--light) .album__section > :global(dt) {
    color: var(--color-cta);
  }

  :global(.theme--dark) .album__section > :global(dt) {
    color: var(--color-cta-lighter);
  }

  :global(.theme--dark) .album__section {
    color: var(--color-gray-5);
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
