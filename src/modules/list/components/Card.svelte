<script lang="ts">
  import { parseArtistsNames } from 'src/utils/parseArtistsNames';
  import LazyImage from 'src/components/LazyImage.svelte';
  import { PLACEHOLDER_GIF } from 'src/constants/placeholder';
  import { withCloudinary } from 'src/utils/withCloudinary';

  export let basic_information = {
    cover_image: '',
    artists: [],
    formats: [],
    title: '',
  };
  export let id = '';
  export let isLoading = false;
  export let index = 0;

  $: isClickedOn = false;

  const { cover_image, artists, formats, title } = basic_information;

  const isLimited = formats.some(({ descriptions }) =>
    descriptions?.includes('Limited Edition'),
  );

  const isDeluxe = formats.some(({ descriptions }) =>
    descriptions?.includes('Deluxe Edition'),
  );

  const isBoxSet = formats.some(({ name = '' }) => name === 'Box Set');

  const format = formats.find(
    (item) => item?.name && ['CD', 'Vinyl'].includes(item.name),
  );

  const handleClick = () => {
    if (isLoading) {
      return;
    }

    isClickedOn = true;
  };
</script>

<li class:optimize-render={index > 7}>
  <a
    on:click={handleClick}
    href={isLoading ? '#' : `/album/${id}`}
    class:card--clicked={isClickedOn}
    sveltekit:prefetch
  >
    <figure>
      <i class="fa-solid fa-compact-disc card__spinner" />
      <LazyImage
        src={isLoading ? PLACEHOLDER_GIF : withCloudinary(cover_image, true)}
        alt={`Image cover of ${title} album by ${parseArtistsNames(artists)}`}
        rest={{ width: '400', height: '400' }}
        decoding="async"
        loading={index === 0 ? 'eager' : 'lazy'}
      />

      <figcaption>
        <h2 class:skeleton={isLoading}>
          {parseArtistsNames(artists)}
        </h2>
        <h3 class:skeleton={isLoading} class="card__title">
          {title}
        </h3>
        <span class:skeleton={isLoading}>
          {format?.name ?? formats[0]?.name}
        </span>
        {#if isLimited}
          <div class="banner">Limited</div>
        {:else if isDeluxe}
          <div class="banner">Deluxe</div>
        {:else if isBoxSet}
          <div class="banner">Box Set</div>
        {/if}
      </figcaption>
    </figure>
  </a>
</li>

<style>
  .card--clicked :global(img) {
    opacity: 0.2;
    z-index: 0;
  }

  figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--color-gray-7);
  }

  figure :global(img) {
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top center;
    width: 100%;
    max-width: none;
    z-index: 2;
    position: relative;
  }

  figcaption {
    padding: var(--spacing-1) var(--spacing-n2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-pattern);
    background-size: var(--spacing-n2) var(--spacing-n2);
    flex-grow: 1;
  }

  a,
  a:visited {
    display: block;
    overflow: hidden;
    position: relative;
    color: var(--color-gray-1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  li {
    text-align: center;
    border: var(--spacing-n1) double var(--color-gray-1);
  }

  li:hover {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-3);
  }

  h2 {
    margin-bottom: var(--spacing-n2);
    font-size: var(--font-size-large);
    line-height: 1.1;
  }

  h3 {
    margin-bottom: var(--spacing-n3);
    font-size: var(--font-size-medium);
  }

  .banner {
    display: block;
    white-space: nowrap;
    position: absolute;
    font-size: var(--font-size-small);
    background-color: var(--color-cta-darker);
    color: var(--color-gray-8);
    top: 0;
    right: 0;
    transform: rotate3D(0, 0, 1, 45deg) translate3d(30%, -25%, 0);
    padding: var(--spacing-n3) var(--spacing-2);
    z-index: 2;
  }

  .card__spinner {
    z-index: 1;
    position: absolute;
    aspect-ratio: 1/1;
    width: 100%;
    font-size: var(--font-size-xxlarge);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin 1s ease infinite;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .optimize-render {
    content-visibility: auto;
    contain-intrinsic-size: 200px;
  }

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(359deg);
    }
  }
</style>
