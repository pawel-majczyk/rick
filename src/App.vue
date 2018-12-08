<template>
  <div id="app">
    <header class="header">
      <a
        href="/"
        class="header__logo"
      >
        <AppLogo />
      </a>
      <button class="header__nav-trigger" @click="toggleHamburgerMenu">
        🍔
      </button>
      <nav
        class="header__nav"
        :class="{
          'is-visible': isVisible
        }"
      >
        <!-- .is-visible -->
        <a
          class="header__nav-link"
          href="/"
        >
          Episodes
        </a>
        <a
          class="header__nav-link"
          href="/quiz"
        >
          Quiz
        </a>
      </nav>
    </header>
    <main class="main">
      <!-- content -->
      <EpisodesList />
    </main>
  </div>
</template>

<script>
  import AppLogo from './assets/logo.svg';
  import EpisodesList from './components/EpisodesList.vue';

  export default {
    components: {
      AppLogo, EpisodesList
    },
    data() {
      return {
        isVisible: false,
      }
    },
    methods: {
      toggleHamburgerMenu() {
        this.isVisible = !this.isVisible;
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
.header__nav-trigger {
  font-size: 2em;
}
</style>
