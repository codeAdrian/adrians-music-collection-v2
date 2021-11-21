<script context="module">
  export const prerender = true;
</script>

<script>
  import { MetaTags } from 'svelte-meta-tags';
  import Header from 'src/components/Header.svelte';
  import AlbumList from 'src/modules/list/components/AlbumList.svelte';
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { sortBy, sortDirection } from 'src/modules/list/store/store';
  import { onDestroy } from 'svelte';
  import { BASE_URL } from 'src/constants/hosting';

  let sortByValue;
  let sortDirectionValue;
  let query;

  const sortByUnsub = sortBy.subscribe((value) => {
    sortByValue = value;
  });

  const sortDirectionUnsub = sortDirection.subscribe((value) => {
    sortDirectionValue = value;
  });

  $: {
    query = fetchAlbums(1, sortByValue, sortDirectionValue);
  }

  onDestroy(() => {
    sortDirectionUnsub();
    sortByUnsub();
  });
</script>

<MetaTags
  title={`Adrian's Music Collection`}
  description="Adrian's Music Collection contains up-to-date list of Adrian Bece's LP and CD collection with detailed information about each collection item."
  openGraph={{
    type: 'website',
    title: `Adrian's Music Collection`,
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/default.jpg`,
      },
    ],
    description:
      "Adrian's Music Collection contains up-to-date list of Adrian Bece's LP and CD collection with detailed information about each collection item.",
    site_name: "Adrian's Music Collection",
  }}
  twitter={{
    cardType: 'summary_large_image',
    handle: '@AdrianBeceDev',
  }}
  facebook={{
    appId: '298638565596264',
  }}
/>
<Header />
<main class="main">
  <AlbumList {query} />
</main>
