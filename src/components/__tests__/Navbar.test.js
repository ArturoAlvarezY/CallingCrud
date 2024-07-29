import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { RouterLink } from 'vue-router';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/support', name: 'Support' },
  { path: '/request', name: 'Request' },
  { path: '/edit', name: 'Edit' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('NavBar.vue', () => {
  it('should render all navigation links', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    const links = wrapper.findAllComponents(RouterLink);
    expect(links.length).toBe(4);
    expect(links[0].text()).toBe('Home');
    expect(links[1].text()).toBe('Support');
    expect(links[2].text()).toBe('Request');
    expect(links[3].text()).toBe('Edit');
  });

  it('should have correct to props', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    const links = wrapper.findAllComponents(RouterLink);
    expect(links[0].props('to')).toBe('/');
    expect(links[1].props('to')).toBe('/support');
    expect(links[2].props('to')).toBe('/request');
    expect(links[3].props('to')).toBe('/edit');
  });
});
