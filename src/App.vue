<script setup>
import topMenu from './components/Setting.vue'
import { useRoute, RouterView } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isLogin = computed(() => {
  return route.path
})
// let getRoute = router.currentRoute.value
// console.log(getRoute)
</script>

<template>
  <!-- @/assets/logo.svg -->
  <!-- {{ getRoute }} -->
  <!-- {{ router.currentRoute.value.path }} -->
  <topMenu v-if="isLogin !== '/' && isLogin !== '/register'" />
  <RouterView />

  <!-- <DataTable :paginatedData="paginatedData" :columns="columns">
    <template #action="props">
      <button class="edit1" @click="showEditForm(props.index)" >
        <img src="../assets/icons/ico_edit.png" />
      </button>
      <button class="delt1" @click="delAPI('header', props.index, item.equipment_type_id, '')">
          <img src="../assets/icons/ico_delete.png" />
      </button>
      <button id="edit2" class="btn" @click="showLinkFrom(props.index)">
          <img src="../assets/icons/ico_attach.png" />
      </button>
    </template>
  </DataTable> -->
</template>

<!-- <script setup>
// const columns = ref([
//   { key: 'equipment_type', name: 'AIoT設備類型', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null , type: ''},
//   { key: 'equipment_name', name: 'AIoT設備名稱', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null , type: ''},
//   { key: 'emission_type', name: '排放型式', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null ,type: '' },
//   { key: 'emission_source_type', name: '排放類型', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null, type: ''},
//   { key: 'emission_source', name: '燃料別', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null, type: ''},
//   { key: 'creation_date', name: '建立日期', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null , type: 'date'},
//   { key: 'last_updated_date', name: '上次更新日期', colWidth: 'width: 100px;', class: 'text-cell', sortable: true, sorted: null , type: 'date'},
//   { key: 'action', name: '動作', colWidth: 'width: 100px;', class: 'text-cell center-table-text', sortable: false, sorted: null , type: 'action'}
// ]);
</script> -->

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
