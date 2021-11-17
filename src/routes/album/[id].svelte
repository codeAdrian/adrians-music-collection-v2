<script context="module">
  export async function load({
    page: {
      params: { id },
    },
  }) {
    const album = await fetchDetails(id);
    return {
      props: {
        album,
      },
    };
  }
</script>

<script>
  import Album from 'src/modules/details/components/Album.svelte';
  import { fetchDetails } from 'src/modules/details/services/fetchDetails';
  import { onDestroy } from 'svelte';
  import { activePage } from 'src/stores/activePage';
  import Header from 'src/components/Header.svelte';
  import { MetaTags } from 'svelte-meta-tags';

  export let album;

  let currentPage;

  let pageUnsub = activePage.subscribe((value) => (currentPage = value));

  onDestroy(() => {
    pageUnsub();
  });
</script>

<Header href={currentPage > 1 ? `/page/${currentPage}` : '/'} />

{#key album.id}
  <MetaTags
    openGraph={{
      site_name: "Adrian's Music Collection",
      images: [{ url: album.images[0].resource_url }],
      title: `${album.artists_sort?.replace(/\(.\d?\)/, '')} - ${
        album.title
      } | Adrian's Music Collection`,
      description: `${album.formats.map(
        ({ name }) => name,
      )} from Adrian Bece's personal collection. This is "${
        album.title
      }" album by ${album.artists_sort?.replace(
        /\(.\d?\)/,
        '',
      )}. This version of the ${album.formats.map(
        ({ name }) => name,
      )} has been released on ${album.year || 'an unknown date'} in ${
        album.country || 'all regions of the world'
      }. Genre(s): ${album.styles?.join(', ')}`,
    }}
    title={`${album.artists_sort?.replace(/\(.\d?\)/, '')} - ${
      album.title
    } | Adrian's Music Collection`}
    description={`${album.formats.map(
      ({ name }) => name,
    )} from Adrian Bece's personal collection. This is "${
      album.title
    }" album by ${album.artists_sort?.replace(
      /\(.\d?\)/,
      '',
    )}. This version of the ${album.formats.map(
      ({ name }) => name,
    )} has been released on ${album.year || 'an unknown date'} in ${
      album.country || 'all regions of the world'
    }. Genre(s): ${album.styles?.join(', ')}`}
    twitter={{
      cardType: 'summary_large_image',
      handle: '@AdrianBeceDev',
    }}
    facebook={{
      appId: '298638565596264',
    }}
  />
{/key}

<main>
  <Album {...album} {currentPage} />
</main>
