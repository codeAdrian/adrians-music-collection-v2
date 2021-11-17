<script lang="ts">
  export let src = '';
  export let alt = '';
  export let decoding: 'sync' | 'async' = 'sync';
  export let rest = {};
  export let loading: 'lazy' | 'eager' = 'lazy';
</script>

<img {src} {alt} {decoding} {loading} {...rest} />

<style>
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
</style>
