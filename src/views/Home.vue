
<script setup>
import sourceData from "@/data.json"
import { ref } from "vue"
import { useRouter, isNavigationFailure, NavigationFailureType } from "vue-router"

const destinations = ref(sourceData.destinations)
const router = useRouter()

// 动态添加路由
const addDynamicRoute = () => {
  const removeSelf = router.addRoute({
    path: '/dynamic',
    name: 'dynamic',
    component: () => import("@/views/Login.vue")
  })
  setInterval(() => {
    // 删除路由
    removeSelf()
    // router.removeRoute("dynamic")
  }, 2000)
}
// // 触发路由器错误
// const triggerRouterErr = async () => {
//   const navFail = await router.push("/")
//   if (isNavigationFailure(navFail, NavigationFailureType.duplicated)) {
//     // if (isNavigationFailure(navFail, NavigationFailureType.aborted)) {
//     // if (isNavigationFailure(navFail, NavigationFailureType.cancelled)) {
//     console.log(navFail.to)
//     console.log(navFail.from)
//   } else {
//     // 成功
//   }
// }
</script>

<template>
  <div class="home-container">
    <h1>所有目的地</h1>
    <button @click="addDynamicRoute">添加动态路由</button>

    <RouterLink to="/dynamic">
      <button>访问动态路由（添加动态路由了没？)</button>
    </RouterLink>

    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name:'destination.show',params:{ id:destination.id ,slug:destination.slug}}"
      >
        <h2>{{destination.name}}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>




