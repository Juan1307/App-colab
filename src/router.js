import { createWebHistory, createRouter } from 'vue-router';

const HomePage = () => new Promise((resolve) => {
    setTimeout(() => resolve(import('@pages/HomePage.vue')), 1000);
});
const NotFound = () => new Promise((resolve) => {
    setTimeout(() => resolve(import('@pages/NotFound.vue')), 1000);
});

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
        { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound }
    ],
    strict: true
});