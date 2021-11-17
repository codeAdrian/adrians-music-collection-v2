<script lang="ts">
  export let src = '';
  export let alt = '';
  export let decoding: 'sync' | 'async' = 'sync';
  export let rest = {};
</script>

<img {src} {alt} {...rest} {decoding} loading="lazy" />

<style>
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
</style>
