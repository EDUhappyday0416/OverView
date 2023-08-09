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
    emit("activeHeader" , stab.title)  
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
    padding: 10px;
}
.active {
    border-bottom: 1px solid black;
}
</style>
