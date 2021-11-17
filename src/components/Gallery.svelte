<script>
  import { PLACEHOLDER_GIF } from 'src/constants/placeholder';
  import { preloadImages } from 'src/utils/preloadImages';
  import { withCloudinary } from 'src/utils/withCloudinary';
  import { onMount } from 'svelte';

  import LazyImage from './LazyImage.svelte';

  export let images = [];

  $: activeIndex = 0;

  const incrementIndex = () => {
    const value = activeIndex + 1;
    activeIndex = value >= images.length ? 0 : value;
  };

  const decrementIndex = () => {
    const value = activeIndex - 1;
    activeIndex = value < 0 ? images.length - 1 : value;
  };

  onMount(() => {
    if (!Boolean(images.length)) {
      return;
    }
    preloadImages(images.map(({ resource_url }) => resource_url));
  });
</script>

<section class="gallery">
  <LazyImage
    loading="eager"
    src={Boolean(images.length)
      ? withCloudinary(images[activeIndex].resource_url)
      : PLACEHOLDER_GIF}
  />

  {#if images.length > 1}
    <aside class="gallery__controls">
      <div class="gallery__status">
        {`${activeIndex + 1} / ${images.length}`}
      </div>
      <button class="gallery__button " on:click={decrementIndex}>
        <i class="fa-solid fa-arrow-left" />
      </button>
      <button class="gallery__button " on:click={incrementIndex}>
        <i class="fa-solid fa-arrow-right" />
      </button>
    </aside>
  {/if}
</section>

<style>
  .gallery {
    position: relative;
    text-align: center;
  }

  .gallery__controls {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--color-gray-1);
    color: var(--color-gray-7);
    display: flex;
    flex-wrap: wrap;
    width: var(--spacing-3);
    aspect-ratio: 1;
  }

  .gallery__button {
    border-width: 0;
    background-color: var(--color-gray-7);
    inline-display: block;
    flex-basis: 50%;
    margin: 0;
    padding: 0;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .gallery__button:hover,
  .gallery__button:active {
    background-color: var(--color-gray-5);
  }

  .gallery__status {
    flex-basis: 100%;
    padding: var(--spacing-n5) 0;
  }
</style>
