<script>
  import { MetaTags } from 'svelte-meta-tags';
  import Header from 'src/components/Header.svelte';
  import AlbumList from 'src/modules/list/components/AlbumList.svelte';
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { sortBy, sortDirection } from 'src/stores/sort';
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
  description="Adrian's Music Collection is a website containing the entire CD and vinyl collection of Adrian Bece (codeadrian.github.io)."
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
