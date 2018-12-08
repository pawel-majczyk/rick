<template>
  <div class="episode-item">
    <h3 class="episode-item__num">
      Episode 1
    </h3>
    <h2 class="episode-item__name">
      {{ episode.name }}
    </h2>
    <span class="episode-item__season-badge">
      {{ seasonBadge }}
    </span>

  <!-- optional info -->
  <!-- <div class="episode-info">
    <span class="episode-info__label">Air date</span>
    <span class="episode-info__value">December 2, 2013</span> -->
  </div>
</template>

<script>
  const extractEpisodeNumber = (episode) => {
    const [seasonNumber, episodeNumber] = episode.slice(1).split('E');
    return ({
      seasonNumber: +seasonNumber,
      episodeNumber: +episodeNumber
    })
  }

  export default {
    props: {
      episode: {
        type: Object,
        required: true,
      }
    },
    computed: {
      seasonBadge() {
        // const regexp = /S(\d+)E(\d+)/gm;
        return `Season: ${extractEpisodeNumber(this.episode.episode).seasonNumber}`
      }
    }
  }
</script>
