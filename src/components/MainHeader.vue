<!-- <script setup>
import { ref, defineProps, defineEmits, computed, shallowRef } from 'vue'
import Tickets from '../views/Tickets.vue'
import Past from './Past.vue'
import Waitlist from './Waitlist.vue'
const tabs = ref([
  { title: 'Tickets', isActive: true, view: shallowRef(Tickets) },
  { title: 'Past', isActive: false, view: shallowRef(Past) },
  { title: 'Waitlist', isActive: false, view: shallowRef(Waitlist) }
])
const props = defineProps({
  activeTab: {
    type: String,
    default: 'Ticket'
  }
})

const emit = defineEmits(['fouce'])
const currentTabView = computed(() => {
  return tabs.value.find((tab) => tab.isActive).view
})
const setActiveTab = (stab) => {
  tabs.value.forEach((tab) => {
    tab.isActive = tab.title == stab.title
  })
}
</script> -->
<!-- <template>
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
  <component :is="currentTabView"> </component>
</template> -->
<!-- <style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: rgb(33 135 234);
  height: 4vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &__title {
    width: 200px;
    color: white;
  }
}
.active {
  border-bottom: 4.3px solid white;
}
</style> -->
