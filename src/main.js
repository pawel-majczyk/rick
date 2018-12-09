import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import VueContentPlaceholders from 'vue-content-placeholders'
import formatDistance from 'date-fns/distance_in_words_to_now';

Vue.config.productionTip = false

Vue.use(VueContentPlaceholders);
Vue.use(infiniteScroll);
Vue.use(formatDistance);

Vue.filter('timeDistanceToNow', function(value) {
  return formatDistance(new Date(value), {addSuffix: true})
});
Vue.filter('extractCharacterBrief', function(character) {
  return character.species + ' from ' + character.origin.name
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
