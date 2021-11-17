<script>
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { sortBy, sortDirection } from 'src/stores/sort';
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
  description="Adrian's Music Collection is a website containing the entire CD and vinyl collection of Adrian Bece (codeadrian.github.io)."
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
      "Adrian's Music Collection is a website containing the entire CD and vinyl collection of Adrian Bece (codeadrian.github.io).",
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
