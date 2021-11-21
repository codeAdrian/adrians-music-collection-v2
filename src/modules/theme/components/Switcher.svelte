<script>
  import { theme } from '../store/store';

  import { onDestroy } from 'svelte';
  import { setTheme } from '../store/actions';

  var currentTheme = 'light';

  const unsubscribe = theme.subscribe((value) => {
    currentTheme = value;
  });

  var newTheme = {
    light: 'dark',
    dark: 'light',
  };

  const handleClick = (e) => {
    const newValue = e.currentTarget.value;
    document.body.classList.remove(`theme--${currentTheme}`);
    setTheme(newValue);
  };

  onDestroy(unsubscribe);
</script>

{#if currentTheme}
  <div>
    <button
      class="switcher__button"
      on:click={handleClick}
      value={newTheme[currentTheme]}
    >
      <span
        class={`switcher__indicator switcher__indicator--${currentTheme}`}
      />
      <span class="switcher__wrapper">
        <i class="fa-solid fa-moon switcher__icon" />
        <i class="fa-solid fa-sun switcher__icon" />
      </span>
    </button>
  </div>
{/if}

<style>
  .switcher__button {
    background: transparent;
    color: var(--color-gray-8);
    cursor: pointer;
    position: relative;
    height: 100%;
    border-width: 0;
    padding: 0;
    line-height: 1;

    @media (--mq-mobileLandscape-min) {
      line-height: 1.5;
    }

    @media (--mq-tablet-min) {
      border: calc(var(--spacing-n3) / 2) solid var(--color-gray-7);
      font-size: var(--font-size-medium);
    }
  }

  .switcher__wrapper {
    display: flex;
  }

  .switcher__icon {
    width: calc(var(--spacing-1) + var(--spacing-n2));
    z-index: 1;
    position: relative;

    @media (--mq-mobileLandscape-min) {
      width: var(--spacing-2);
    }
  }

  .switcher__indicator {
    background: var(--color-gray-3);
    z-index: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    transition: transform 0.3s ease;
  }

  .switcher__indicator--dark {
    transform: translate3d(0, -50%, 0);
  }

  .switcher__indicator--light {
    transform: translate3d(100%, -50%, 0);
  }
</style>
