<template>
  <div>
    <h1>Episode</h1>
    <a
      href="/"
      class="go-back-link"
    >
      <BackArrow /> Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <div
          v-if="isLoading"
          class="episode-item"
        >
          <ContentPlaceholders>
            <ContentPlaceholdersHeading />
            <ContentPlaceholdersText :lines="3" />
          </ContentPlaceholders>
        </div>
        <EpisodeItem
          v-else
          :episode="episode"
        >
          <div class="episode-info">
            <span class="episode-info__label">
              Air date
            </span>
            <span class="episode-info__value">
              December 2, 2013
            </span>
          </div>
        </EpisodeItem>

        <h2>Characters</h2>

        <div class="characters-list">
          <div
            v-for="character in charactersListFiltered"
            :key="character.id"
          >
            <CharacterItem :character="character" />
          </div>
          <div class="link-container">
            <button
              class="primary-link is-big"
              @click="charactersListExpanded = !charactersListExpanded"
            >
              {{ charactersListExpanded ? "Show less" : "Show more" }}
            </button>
          </div>
        </div>
      </div>

      <div class="episode__right-col">
        <h2>Comments</h2>
      <!-- Comments -->
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeItem from '@/components/EpisodeItem.vue'
import CharacterItem from '@/components/CharacterItem.vue'
import BackArrow from '@/assets/icon-arrow-left.svg';


  export default {
    components: {
      EpisodeItem, BackArrow, CharacterItem
    },
    props: {
      id: {
        type: [Number, String],
        required: true,
      }
    },
    data() {
      return {
        episode: {},
        isLoading: true,
        charactersList: [],
        charactersListExpanded: false,
      }
    },
    computed: {
      characters() {
        return this.episode.characters && this.episode.characters
            .map(url => url.split('/').reverse()[0]).join(',');
      },
      charactersListFiltered() {
        if (this.charactersListExpanded) {
          return this.charactersList
        }
        return this.charactersList.slice(0,8);
        },
    },
    async created() {
      await this.retrieveAPIData();
      await this.retrieveCharacters();
    },
    methods: {
      async retrieveAPIData() {
        this.episode = await fetch(`http://tiny-rick.tk/api/episode/${this.id}`)
          .then(response => response.json());
      this.isLoading = false;
      },
      async retrieveCharacters() {
        this.charactersList = await fetch(`http://tiny-rick.tk/api/character/${this.characters}`)
          .then(response => response.json());
      },
    }
  }
</script>
