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
  export let isFirst = false;

  $: isClickedOn = false;

  const { cover_image, artists, formats, title } = basic_information;

  const allDescriptions = formats
    .flatMap(({ descriptions }) => descriptions?.join(',') ?? '')
    .toString()
    .toLowerCase()
    .split(',');

  const isRepress = allDescriptions.includes('repress');
  const isReissue = allDescriptions.includes('reissue');
  const isRemaster =
    allDescriptions.includes('remaster') ||
    allDescriptions.includes('remastered');

  const isCompilation = allDescriptions.includes('compilation');

  const isOriginal =
    !isLoading &&
    ((isCompilation && !isRepress && !isReissue) ||
      [isReissue, isRepress, isRemaster].every((i) => !i));

  const isLimited = allDescriptions.includes('limited edition');

  const isClubEdition = allDescriptions.includes('club edition');

  const isDeluxe = allDescriptions.includes('deluxe edition');

  const isBoxSet = formats.some(({ name = '' }) => name === 'Box Set');

  const isOCard = formats.some(
    ({ text }) => text?.includes('O-Card') || text?.includes('O-card'),
  );

  const isPromo = allDescriptions.includes('promo');

  const isTourEdition = formats.some(
    ({ text }) =>
      text?.includes('Tour Edition') || text?.includes('Tour edition'),
  );

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

<li class="card" class:card--original={isOriginal}>
  <a
    on:click={handleClick}
    href={isLoading ? '#' : `/album/${id}`}
    class:card--clicked={isClickedOn}
    class="card__link"
    sveltekit:prefetch
  >
    <figure class="card__figure">
      <i class="fa-solid fa-compact-disc card__spinner" />
      <LazyImage
        src={isLoading ? PLACEHOLDER_GIF : withCloudinary(cover_image, true)}
        alt={`Image cover of ${title} album by ${parseArtistsNames(artists)}`}
        rest={{ width: '400', height: '400' }}
        decoding="async"
        loading={isFirst ? 'eager' : 'lazy'}
      />

      <p class="card__note">
        {#if isLoading}
          &nbsp;
        {:else if isCompilation}
          Compilation
        {:else if isOriginal}
          First release
        {:else if isRepress}
          Repress
        {:else if isRemaster}
          Remaster
        {:else if isReissue}
          Reissue
        {/if}
      </p>

      <figcaption class="card__content">
        <h2 class:skeleton={isLoading}>
          {parseArtistsNames(artists)}
        </h2>
        <h3 class:skeleton={isLoading} class="card__title">
          {title}
        </h3>
        <span class:skeleton={isLoading}>
          {format?.name ?? formats[0]?.name}
        </span>
        {#if isLimited || isDeluxe || isBoxSet || isClubEdition || isTourEdition || isOCard || isPromo}
          <div class="card__banner">
            {#if isLimited}
              Limited
            {:else if isDeluxe}
              Deluxe
            {:else if isBoxSet}
              Box Set
            {:else if isClubEdition}
              Club Edition
            {:else if isTourEdition}
              Tour Edition
            {:else if isOCard}
              O-Card
            {:else if isPromo}
              Promo copy
            {/if}
          </div>
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

  .card__note {
    line-height: 1;
    letter-spacing: 0.02rem;
    padding: var(--spacing-n3) var(--spacing-n2);
  }

  :global(.theme--dark) .card__note {
    color: var(--color-gray-7);
    background-color: var(--color-gray-4);
  }

  :global(.theme--light) .card__note {
    color: var(--color-gray-7);
    background-color: var(--color-gray-1);
  }

  :global(.theme--dark) .card.card--original .card__note {
    color: var(--color-gray-1);
    background-color: var(--color-gold-lighter);
  }

  :global(.theme--light) .card.card--original .card__note {
    background-color: var(--color-gold-darker);
  }

  .card__figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: background-color 0.3s ease;
  }

  :global(.theme--light) .card__link {
    background-color: var(--color-gray-7);
  }

  :global(.theme--dark) .card__link {
    background-color: var(--color-gray-3);
  }

  .card__figure :global(img) {
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top center;
    width: 100%;
    max-width: none;
    z-index: 2;
    position: relative;
  }

  .card__content {
    padding: var(--spacing-1) var(--spacing-n2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: var(--spacing-n2) var(--spacing-n2);
    flex-grow: 1;
  }

  :global(.theme--light) .card__content {
    background-image: var(--color-pattern-light);
  }

  :global(.theme--dark) .card__content {
    background-image: var(--color-pattern-dark);
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

  :global(.theme--light) a,
  :global(.theme--light) a:visited {
    color: var(--color-gray-1);
  }

  :global(.theme--dark) a,
  :global(.theme--dark) a:visited {
    color: var(--color-gray-6);
  }

  .card {
    text-align: center;
    transition: border-color 0.3s ease;
  }

  :global(.theme--light) .card {
    border: var(--spacing-n1) double var(--color-gray-1);
  }

  :global(.theme--dark) .card {
    border: var(--spacing-n1) double var(--color-gray-4);
  }

  :global(.theme--light) .card.card--original {
    border-color: var(--color-gold-darker);
  }

  :global(.theme--dark) .card.card--original {
    border-color: var(--color-gold-lighter);
  }

  .card.card--original .card__content {
    --color-pattern-dark: linear-gradient(
      -45deg,
      var(--color-gold-darker) 25%,
      var(--color-gray-2) 0,
      var(--color-gray-2) 50%,
      var(--color-gold-darker) 0,
      var(--color-gold-darker) 75%,
      var(--color-gray-2) 0,
      var(--color-gray-2)
    );

    --color-pattern-light: linear-gradient(
      -45deg,
      var(--color-gold-lighter) 25%,
      var(--color-gray-7) 0,
      var(--color-gray-7) 50%,
      var(--color-gold-lighter) 0,
      var(--color-gold-lighter) 75%,
      var(--color-gray-7) 0,
      var(--color-gray-7)
    );
  }

  :global(.theme--light) .card:hover {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-3);
  }

  :global(.theme--dark) .card:hover {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gray-4);
  }

  :global(.theme--light) .card.card--original:hover {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gold-darker);
  }

  :global(.theme--dark) .card.card--original:hover {
    box-shadow: 0 0 var(--spacing-n3) calc(var(--spacing-n5) / 3)
      var(--color-gold-lighter);
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

  .card__banner {
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
    backface-visibility: hidden;
    letter-spacing: 0.02rem;
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

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(359deg);
    }
  }
</style>
