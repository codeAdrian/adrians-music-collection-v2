<script>
  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <section class="footer__wrapper">
    <article class="footer__content">
      Created with <i class="fa-solid fa-heart footer__icon" /> and
      <i class="fa-solid fa-music footer__icon" />
      by
      <a
        class="footer__content-link"
        href="https://codeadrian.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adrian Bece
      </a>
    </article>
    <ul class="footer__links">
      <li class="footer__item">
        <a
          href="https://twitter.com/AdrianBeceDev"
          target="_blank"
          class="footer__link"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitter" />
        </a>
      </li>
      <li class="footer__item">
        <a
          href="https://www.linkedin.com/in/adrianbece/"
          target="_blank"
          class="footer__link"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin-in" />
        </a>
      </li>
      <li class="footer__item">
        <a
          href="https://github.com/codeAdrian"
          target="_blank"
          class="footer__link"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github-alt" />
        </a>
      </li>
    </ul>
  </section>
</footer>

<style>
  .footer {
    background-color: var(--color-gray-1);
    color: var(--color-gray-8);
    text-align: center;
  }

  .footer__wrapper {
    padding: var(--spacing-1) var(--spacing-1);
    margin: 0 auto;

    @media (--mq-phablet-min) {
      padding: var(--spacing-2) var(--spacing-1);
    }
  }

  .footer__links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: var(--font-size-medium);
    margin-top: var(--spacing-1);
  }

  .footer__item {
    padding: 0 var(--spacing-n1);
  }

  .footer__icon {
    display: inline-block;
    padding: 0 var(--spacing-n5);
    color: var(--color-cta-lighter);
  }

  .footer__link {
    color: var(--color-gray-8);
  }

  .footer__link:hover {
    color: var(--color-gray-5);
    box-shadow: 0 calc(var(--spacing-n5) / 2) 0 0 var(--color-gray-5);
  }

  .footer__content-link {
    text-decoration: underline;
    color: var(--color-gray-8);
  }
</style>
