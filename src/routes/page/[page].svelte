<script context="module">
  export const prerender = true;
</script>

<script>
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { sortBy, sortDirection } from 'src/modules/list/store/store';
  import AlbumList from 'src/modules/list/components/AlbumList.svelte';
  import Header from 'src/components/Header.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { BASE_URL, PAGE_URL } from 'src/constants/hosting';

  let query;
  let sortByValue;
  let sortDirectionValue;
  let currentPage;

  const sortByUnsub = sortBy.subscribe((value) => {
    sortByValue = value;
  });

  const sortDirectionUnsub = sortDirection.subscribe((value) => {
    sortDirectionValue = value;
  });

  const pageUnsub = page.subscribe(({ params }) => {
    const pageNum = parseInt(params.page);

    if (isNaN(pageNum)) {
      currentPage = 1;
      return;
    }

    currentPage = pageNum;
  });

  $: {
    query = fetchAlbums(currentPage, sortByValue, sortDirectionValue);
  }

  onDestroy(() => {
    pageUnsub();
    sortByUnsub();
    sortDirectionUnsub();
  });
</script>

<MetaTags
  title={`Adrian's Music Collection | Page ${currentPage}`}
  description="Adrian's Music Collection contains up-to-date list of Adrian Bece's LP and CD collection with detailed information about each collection item."
  openGraph={{
    url: `${PAGE_URL}/${currentPage}`,
    images: [
      {
        url: `${BASE_URL}/default.jpg`,
      },
    ],
    type: 'website',
    title: `Adrian's Music Collection | Page ${currentPage}`,
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
