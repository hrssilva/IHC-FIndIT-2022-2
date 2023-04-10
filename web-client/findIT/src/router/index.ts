import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewPlaceView.vue')
    },
    {
      path: '/see',
      name: 'see',
      component: () => import('../views/SeePlacesView.vue')
    },
    {
      path: '/see/:id',
      name: 'seeMap',
      component: () => import('../views/PlaceView.vue')
    }
  ]
});

export default router;
