<template>
  <div id="app">
    <header class="header">
      <a
        href="/"
        class="header__logo"
      >
        <AppLogo />
      </a>
      <button class="header__nav-trigger">
        <!-- Hamburger Icon -->
      </button>

      <nav class="header__nav">
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
    </main>
  </div>
</template>

<script>
  import AppLogo from './assets/logo.svg';

  export default {
    components: {
      AppLogo,
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
</style>
