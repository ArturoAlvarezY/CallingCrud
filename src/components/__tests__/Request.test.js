import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Request from '@/views/Request.vue'
import RequestComponent from '../RequestComponent.vue';

  
describe('Request.vue', () => {
  it('should render the RequestComponent', () => {
    const wrapper = mount(Request);
    const requestComponentWrapper = wrapper.findComponent(RequestComponent);
    expect(requestComponentWrapper.exists()).toBe(true);
  });
});