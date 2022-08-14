import Home from "@/views/Home.vue"
import sourceData from "@/data.json"

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: "/home"
  },
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import("@/views/Protected.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue")
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/invoices",
    name: "invoices",
    components: {
      default: () => import("@/views/Invoices.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue")
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/example/:id(\\d+)?",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id)
    }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        (des) => des.id === parseInt(to.params.id)
      )
      if (!exists) {
        return {
          name: "NotFound",
          // 保留url上的以下参数
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash
        }
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id)
        })
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
]
