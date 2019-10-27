import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false

const vueOptions = {
    el: "#vue",
    router,
    store,
    render: h => h(App)
};

// 判断当前页面使用singleSpa应用
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export default vueLifecycles;
