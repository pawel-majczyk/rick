<template>
  <div>
    <h1>Episode</h1>
    <a
      href="/"
      class="go-back-link"
    >
      <IconBackArrow /> Search results
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
            <GenericItem
              :title="character.name"
              :subtitle="character | extractCharacterBrief"
              :image="character.image"
            />
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
        <section class="comments">
          <GenericItem>
            <form class="comments__form">
              <textarea placeholder="Your comment here" />
              <div class="comments__bar">
                <input
                  type="text"
                  placeholder="Username"
                >
                <button type="submit">
                  <IconPlusSign />
                </button>
              </div>
            </form>
          </GenericItem>
          <!-- Comments -->
          <div
            v-for="comment in comments"
            :key="comment.id"
          >
            <GenericItem
              :title="comment.author"
              :subtitle="comment.created | timeDistanceToNow"
            >
              Someinfo
            </GenericItem>
            <!--  -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeItem from '@/components/EpisodeItem.vue'
import GenericItem from '@/components/GenericItem.vue'
import IconBackArrow from '@/assets/icon-arrow-left.svg';
import IconPlusSign from '../assets/icon-add.svg';


  export default {
    components: {
      EpisodeItem, GenericItem, IconBackArrow, IconPlusSign
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
        comments: [],
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
      await this.retrieveComments();
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
      async retrieveComments() {
        this.comments = await fetch(`http://tiny-rick.tk/api/episode/${this.id}/comments`)
          .then(response => response.json())
          .then(data => data.results);
      },
    }
  }
</script>
