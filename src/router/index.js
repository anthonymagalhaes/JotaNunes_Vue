import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import { useAuth } from "../services/auth";

const routes = [
  { path: "/", component: Home , meta: { auth: true ,layout:"DefaultLayout"} },
  { path: "/login", component: Login,name: 'Login', meta: { auth: false,layout:"BlankLayout" } },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from,next) => {
  if(to.meta?.auth){
    const auth = useAuth();
    if(auth.token && auth.user){
      const isAuthenticated = auth.checkToken()
      if(isAuthenticated){
        next()
      }else{
        next({name:'Login'})
      }
    }else{
      next({name:'Login'})
    }
  }else{
    next()
  }
  
})
export default router;
