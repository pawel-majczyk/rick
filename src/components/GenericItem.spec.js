import { shallowMount } from '@vue/test-utils'
import BaseItem from './GenericItem.vue'

const setup = (props = {}, options = {}) => {
  const wrapper = shallowMount(BaseItem, {
    propsData: {
      title: 'Lorem',
      subtitle: 'Ipsum',
      ...props
    },
    ...options
  })

  return wrapper;
}

describe('BaseItem', () => {
  describe('with an image', () => {
    const wrapper = setup({
      image: 'dog.jpg'
    });

    const title = wrapper.find('[data-test="title"]')
    const subtitle = wrapper.find('[data-test="subtitle"]')
    const image = wrapper.find('[data-test="image"]')

    it('Renders title', () => {
      expect(title.text()).toBe('Lorem');
    });

    it('Renders subtitle', () => {
      expect(subtitle.text()).toBe('Ipsum');
    });

    it('Renders image with proper src', () => {
      expect(image.exists()).toBe(true);
      expect(image.attributes('src')).toBe('dog.jpg');
    });
  });

  describe('without an image', () => {
    const wrapper = setup();

    const title = wrapper.find('[data-test="title"]')
    const subtitle = wrapper.find('[data-test="subtitle"]')
    const image = wrapper.find('[data-test="image"]')

    it('Renders title', () => {
      expect(title.text()).toBe('Lorem');
    });

    it('Renders subtitle', () => {
      expect(subtitle.text()).toBe('Ipsum');
    });

    it('Does not render image', () => {
      expect(image.exists()).toBe(false);
    });
  });

  it('Renders default slot', () => {
    const wrapper = setup({}, {
      slots: {
        default: '<span>Hello there</span>'
      }
    })

    const content = wrapper.find('[data-test="content"]');

    expect(content.exists()).toBe(true);
    expect(content.element.innerHTML).toBe('<span>Hello there</span>');
  });
});
