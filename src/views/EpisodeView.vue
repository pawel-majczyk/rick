<template>
  <div>
    <h1>Episode: {{ id }}</h1>
    <EpisodeDetails
      :episode="episode"
    />
  </div>
</template>

<script>
import EpisodeDetails from '@/components/EpisodeDetails.vue';

  export default {
    components: {
      EpisodeDetails,
    },
    props: {
      id: {
        type: [Number, String], // ? kiedy klikam, jest to Number, kiedy odświeżam - String
        required: true,
      }
    },
    data() {
      return {
        episode: {}
      }
    },
    created() {
      this.retrieveAPIData();
    },
    methods: {
      async retrieveAPIData() {
        this.episode = await fetch(`http://tiny-rick.tk/api/episode/${this.id}`)
      .then(response => response.json())
      }
    }
  }
</script>
