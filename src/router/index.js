import Vue from 'vue'
import Router from 'vue-router'
import HomeRoute from '../modules/home' 

Vue.use(Router)

let lazyImport = (moduleName) => {
  return import("../modules/" + moduleName);
}

export default new Router({
  routes: [
    { path: '', component: HomeRoute, },
    {
      path: '/test', component: () => {
          return lazyImport('test');
      },
    }
  ],
  mode: 'history'
})
