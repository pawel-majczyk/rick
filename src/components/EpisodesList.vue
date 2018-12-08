<template>
  <div>
    <h1 class="episodes__title">
      Episodes
    </h1>
    <div class="episodes__search">
      <!-- search icon -->
      <input
        type="text"
        placeholder="Search"
      >
    </div>
    <ul class="episodes__list">
      <li
        v-for="episode in episodes"
        :key="episode.id"
      >
        <EpisodeItem :episode="episode" />
      </li>
      <!-- ... -->
    </ul>
    <div
      class="episodes__loader"
    >
      Loading more
    </div>
  </div>
</template>

<script>
import EpisodeItem from './EpisodeItem.vue';
  export default {
    components: {
      EpisodeItem
    },
    data() {
      return {
        isFetchingData: true,
        episodes: [],
        urlAPI: 'http://tiny-rick.tk/api/episode/',
        nextPage: '',
        currentPage: 0,
      }
    },
    created() {
      this.retrieveAPIData(this.urlAPI);
    },
    methods: {
      retrieveAPIData(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.nextPage = data.info.next;
          return data.results
          })
        .then(data => {
          this.episodes = data;
          this.isFetchingData = false
        });
      }
    }
  }
</script>
