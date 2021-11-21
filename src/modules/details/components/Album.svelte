<script>
  import BackLink from 'src/components/BackLink.svelte';
  import Content from './Content.svelte';
  import Sidebar from './Sidebar.svelte';

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

  const sidebarProps = {
    styles,
    images,
    year,
    labels,
    country,
    community,
    formats,
    artists_sort,
    title,
  };

  const contentProps = {
    title,
    extraartists,
    tracklist,
    identifiers,
    notes,
    videos,
  };
</script>

<section class="album">
  <Sidebar {...sidebarProps} />
  <Content {...contentProps} />
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
</style>
