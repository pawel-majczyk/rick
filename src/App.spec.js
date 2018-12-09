import { shallowMount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.html()).toBeTruthy();
  });
  describe('toggles "is-visible" class on click', () => {
    const wrapper = shallowMount(App);
    const burger = wrapper.find('[data-test="buger"');
    const nav = wrapper.find('[data-test="nav"]');

    it('Does not have is-visible class at start', () => {
      expect(nav.classes('is-visible')).toBe(false);
      expect(wrapper.emitted('navToggled')).toBeTruthy();
      expect(wrapper.emitted('navToggled')).toHaveLength(1);
      expect(wrapper.emitted('navToggled'))[0].toEqual([true]);
    });

    it('Adds is-visible class on click', () => {
      burger.trigger('click');
      expect(nav.classes('is-visible')).toBe(true)
    })
  })
})
