import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import Home from "./Client/Home.vue";
import Login from "./Auther/login.vue";
import ForgotPassword from "./Auther/forgotPassword.vue";
import Register from "./Auther/register.vue";
import Reissue from "./Auther/reissue.vue";
import Product from "./Client/product.vue";
import Cart from "./Client/cart.vue";
import Thanks from "./Client/thanks.vue";
import Orders from "./Client/Orders.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/reissue",
    component: Reissue,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/thanks",
    component: Thanks,
  },
  {
    path: "/Orders",
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
