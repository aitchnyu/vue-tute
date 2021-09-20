import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { greeting: 'Hola', name: 'Joe' }
    })
    expect(wrapper.text()).toMatch('Hola, Joe')
  })
})
