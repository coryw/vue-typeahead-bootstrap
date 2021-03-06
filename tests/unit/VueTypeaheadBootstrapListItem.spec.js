import { shallowMount } from '@vue/test-utils'
import VueTypeaheadBootstrapListItem from '@/components/VueTypeaheadBootstrapListItem.vue'

describe('VueTypeaheadBootstrapListItem.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(VueTypeaheadBootstrapListItem)
  })

  it('Mounts and renders an <a> tag', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.contains('a')).toBe(true)
  })

  it('Renders textVariant classes properly', () => {
    wrapper.setProps({textVariant: 'dark'})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['text-dark']))
  })

  it('Renders backgroundVariant classes properly', () => {
    wrapper.setProps({backgroundVariant: 'light'})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['bg-light']))
  })
})
