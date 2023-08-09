<script setup>
import { ref, defineEmits, computed, shallowRef } from 'vue'
const tabs = ref([
  { title: 'currect', isActive: true },
  { title: 'Past', isActive: false },
  { title: 'Waitlist', isActive: false }
])

const emit = defineEmits(['activeHeader'])
const currentTabView = computed(() => {
  return tabs.value.find((tab) => tab.isActive).view
})
const setActiveTab = (stab) => {
  emit('activeHeader', stab.title)
  tabs.value.forEach((tab) => {
    tab.isActive = tab.title == stab.title
  })
}
</script>
<template>
  <div class="header">
    <div
      class="header__title"
      @click="setActiveTab(tab)"
      v-for="(tab, i) in tabs"
      :key="i"
      :class="{ active: tab.isActive }"
    >
      {{ tab.title }}
    </div>
  </div>
  {{ currentTabView }}
  <!-- <component :is="currentTabView"> </component> -->
</template>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  &__title {
    cursor: pointer;
    font-weight: 500;
    color: var(--secondary-color);
    border-bottom: 1px solid #ddd;
    transition: 0.4s ease-in;
    padding: 20px 30px;
    border-bottom: 1px solid transparent;
  }
}
.active {
  border-bottom: 1px solid black;
}
</style>
