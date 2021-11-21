<script>
  export let videos = [];
  export let title = '';

  const hasVideo = Boolean(videos.length);
  const videoId = hasVideo && videos[0].uri.split('v=')[1];
</script>

{#if hasVideo}
  <iframe
    class="album__video-frame"
    loading="lazy"
    src={`https://www.youtube.com/embed/${videoId || ''}`}
    {title}
    data-modestbranding="1"
    data-showinfo="0"
    data-controls="0"
    data-fs="0"
  />
{:else}
  <div class="album__video-frame" />
{/if}

<style>
  .album__video-frame {
    display: block;
    border: 0;
    width: 100%;
    aspect-ratio: 16/9;
    background-color: var(--color-gray-7);
  }
</style>
