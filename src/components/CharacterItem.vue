<template>
  <div class="base-item">
    <header class="base-item__header">
      <img
        :src="character.image"
        class="base-item__img"
      >
      <div class="base-item__header-content">
        <h3 class="base-item__title">
          {{ character.name }}
        </h3>
        <span class="base-item__subtitle">
          {{ character.species }} from {{ character.origin.name }}
        </span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    }
  // },
  // created() {
  //   this.retrieveAPIData();
  // },
  // methods: {
  //   async retrieveAPIData() {
  //     this.episode = await fetch(`http://tiny-rick.tk/api/character`)
  //       .then(response => response.json());
  //     this.isLoading = false;
  //   }
  }
}
</script>
