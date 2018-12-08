<template>
  <div
    v-infinite-scroll="retrieveAPIData"
    infinite-scroll-disabled="isInifiniteScrollDisabled"
    infinite-scroll-distance="10"
  >
    <h1 class="episodes__title">
      Episodes
    </h1>
    <div class="episodes__search">
      <!-- search icon -->
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search"
        @input="runSearch"
      >
    </div>
    <ul class="episodes__list">
      <li
        v-for="episode in episodes"
        :key="episode.id"
      >
        <RouterLink :to="{ name: 'episode', params: { id: episode.id, episode }}">
          <EpisodeItem :episode="episode" />
        </RouterLink>
      </li>
      <!-- ... -->
    </ul>
    <div
      v-show="hasNextPage"
      class="episodes__loader"
    >
      Loading more
    </div>
  </div>
</template>

<script>
import EpisodeItem from '@/components/EpisodeItem.vue';
import debounce from 'lodash.debounce';

  export default {
    components: {
      EpisodeItem
    },
    data() {
      return {
        isFetchingData: true,
        episodes: [],
        urlAPI: 'http://tiny-rick.tk/api',
        hasNextPage: true,
        currentPage: 0,
        busy: false,
        searchInput: '',
      }
    },
    computed: {
      isInifiniteScrollDisabled() {
        return this.busy || !this.hasNextPage;
      }
    },
    created() {
      this.retrieveAPIData(this.urlAPI + '/episode');
    },
    methods: {
      async retrieveAPIData() {
        this.busy = true;
        this.currentPage++

        try {
          const data = await fetch(`${this.urlAPI}/episode?page=${this.currentPage}&name=${this.searchInput}`)
            .then(response => response.json());

          if (data.info.pages === this.currentPage) {
            this.hasNextPage = false;
          }

          this.episodes = this.episodes.concat(data.results);
          this.isFetchingData = false;
          this.busy = false;
        }
        catch(err) {
          this.episodes = []
        }
      },
      runSearch: debounce(function () {
        this.episodes = [];
        this.hasNextPage = true;
        this.currentPage = 0;
        this.retrieveAPIData();
      }, 1000)
    }
  }
</script>
