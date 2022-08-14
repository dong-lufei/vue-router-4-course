<script>
export default {
  inheritAttrs: false
}
</script>

<script setup name="AppLink">
import { RouterLink, useRouter } from 'vue-router'
import { computed, getCurrentInstance } from "vue"
const router = useRouter()
const instance = getCurrentInstance()

const props = defineProps({
  ...RouterLink.props,
  inactiveClass: String,
})

const isExternal = computed(() => {
  return typeof instance.ctx.to === 'string' && instance.ctx.to.startsWith('http')
})
</script>

<template>
  <a
    v-if="isExternal"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    rel="noopener"
    class="external-link"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    v-bind="$props"
    class="external-link"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? 'router-link-active' : inactiveClass"
    >
      <slot />
    </a>
  </RouterLink>
</template>

