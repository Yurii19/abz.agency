import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
// import HomePage  from './layouts/HomePage.vue';
// import  LoginPage  from './layouts/LoginPage.vue';

// const routes = [
//   { path: '/', component: HomePage },
//   { path: '/login', component: LoginPage },
// ];
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
const pinia = createPinia();
const app = createApp(App);
// app.use(router)
app.use(pinia);
app.mount('#app');
