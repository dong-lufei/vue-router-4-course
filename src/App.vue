<script setup>
import TheNavigation from "@/components/TheNavigation.vue"
</script>

<template>
  <TheNavigation />

  <div class="the-navigation-container">
    <!-- Sidebar -->
    <RouterView v-slot="{ Component }" name="LeftSidebar" class="view left-sidebar">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>

    <!-- main -->
    <RouterView v-slot="{ Component }" class="main-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.the-navigation-container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 80%;
  margin: 0 auto;
}
/* .slide-enter-active,
.slide-leave-active{
  transition: opacity 1s,transform 1s;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform:translateX(-30%);
} */

/* .moveUp-enter-active{
  animation:fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
}

.moveUp-leave-active{
  animation:moveUp .3s ease-in;
}
@keyframes moveUp {
  0% {transform: translateY(0);}
  100%{transform: translateY(-400px);}
} */
</style>
