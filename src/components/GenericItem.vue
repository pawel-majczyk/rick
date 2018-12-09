<template>
  <div
    class="base-item"
  >
    <header class="base-item__header">
      <img
        v-if="image"
        :src="image"
        class="base-item__img"
        data-test="image"
      >
      <div class="base-item__header-content">
        <h3
          data-test="title"
          class="base-item__title"
        >
          {{ title }}
        </h3>
        <span
          class="base-item__subtitle"
          data-test="subtitle"
        >
          {{ subtitle }}
        </span>
      </div>
    </header>
    <div
      data-test="content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>
