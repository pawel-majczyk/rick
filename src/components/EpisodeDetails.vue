<template>
  <div>
    <h1>Episode</h1>
    <!-- {{ episode.name }} -->
    <a
      href="/"
      class="go-back-link"
    >
      <!-- arrow icon -->
      &lt;== Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <!-- Episode Item with extra info -->

        <h2>Characters</h2>

        <div class="characters-list">
          <!-- Character Items -->
          <div class="link-container">
            <button class="primary-link is-big">
              Show more
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

  export default {
    props: {
      episode: {
        type: Object,
        required: true,
      }
    }
  }
</script>
