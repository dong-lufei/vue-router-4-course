import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "dlf",
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: "smooth" })
        }, 500)
      })
    ) // 平滑滚动到顶部
    // return{
    //   top:null,
    //   left:null,
    //   behavior:null
    // }
  }
})

router.beforeEach((to, from) => {
  // 要跳转的路由元数据存在requiresAuth此字段，并且没有登录，那么就跳转到登录页面
  if (to.meta.requiresAuth && !window.user) {
    return {
      name: "login",
      // 并且返回一个查询参数redirect
      query: {
        redirect: to.fullPath
      }
    }
  }
})
export default router
