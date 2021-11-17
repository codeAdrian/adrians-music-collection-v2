<script>
  import Album from 'src/modules/details/components/Album.svelte';
  import { page } from '$app/stores';
  import { fetchDetails } from 'src/modules/details/services/fetchDetails';
  import { onDestroy } from 'svelte';
  import { activePage } from 'src/stores/activePage';
  import Header from 'src/components/Header.svelte';
  import { MetaTags } from 'svelte-meta-tags';

  let album = {};
  let currentPage;

  let urlUnsub = page.subscribe(({ params: { id } }) => {
    album = fetchDetails(id);
  });

  let pageUnsub = activePage.subscribe((value) => (currentPage = value));

  onDestroy(() => {
    pageUnsub();
    urlUnsub();
  });
</script>

<Header href={currentPage > 1 ? `/page/${currentPage}` : '/'} />

{#await album then data}
  {#key data.id}
    <MetaTags
      openGraph={{
        site_name: "Adrian's Music Collection",
        images: [{ url: data.images[0].resource_url }],
        title: `${data.artists_sort?.replace(/\(.\d?\)/, '')} - ${
          data.title
        } | Adrian's Music Collection`,
        description: `${data.formats.map(
          ({ name }) => name,
        )} from Adrian Bece's personal collection. This is "${
          data.title
        }" album by ${data.artists_sort?.replace(
          /\(.\d?\)/,
          '',
        )}. This version of the ${data.formats.map(
          ({ name }) => name,
        )} has been released on ${data.year || 'an unknown date'} in ${
          data.country || 'all regions of the world'
        }. Genre(s): ${data.styles?.join(', ')}`,
      }}
      title={`${data.artists_sort?.replace(/\(.\d?\)/, '')} - ${
        data.title
      } | Adrian's Music Collection`}
      description={`${data.formats.map(
        ({ name }) => name,
      )} from Adrian Bece's personal collection. This is "${
        data.title
      }" album by ${data.artists_sort?.replace(
        /\(.\d?\)/,
        '',
      )}. This version of the ${data.formats.map(
        ({ name }) => name,
      )} has been released on ${data.year || 'an unknown date'} in ${
        data.country || 'all regions of the world'
      }. Genre(s): ${data.styles?.join(', ')}`}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@AdrianBeceDev',
      }}
      facebook={{
        appId: '298638565596264',
      }}
    />
  {/key}
{/await}

<main>
  {#await album}
    <Album isLoading {currentPage} />
  {:then data}
    <Album {...data} {currentPage} />
  {/await}
</main>
