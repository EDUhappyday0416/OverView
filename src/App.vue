<script setup>
import topMenu from './components/Setting.vue'
import { useRoute, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import { useLogin } from './stores/login'
import cookie from 'js-cookie'
import Header from './components/Header.vue'
const route = useRoute()
const storeLogout = useLogin()

const isLogin = computed(() => {
  return route.path
})
// const getInitImage = ref(localStorage.getItem('imageName') || '')
// if (cookie.get('token') !== undefined && cookie.get('token') !== '') {
//   storeLogout.getUserData()
// }

// let getRoute = router.currentRoute.value
// console.log(getRoute)
</script>
<!-- <template>
  <v-card class="mx-auto" color="grey-lighten-3">
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Welcome">
        <topMenu v-if="isLogin !== '/login' && isLogin !== '/register'" />
      </v-app-bar>
      <v-main class="d-flex align-center justify-center" style="min-height: 300px">
        <v-container fluid>
          <RouterView /> 
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template> -->
<template>
  <!--  <v-card class="mx-auto">-->
  <!--  -->
  <!--  </v-card>-->
  <v-layout>
    <v-app-bar color="teal-darken-4" v-if="isLogin !== '/login' && isLogin !== '/register'">
      <template v-slot:prepend>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <Header />
      </template>
      <!-- <v-app-bar-title>Title</v-app-bar-title> -->
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid style="max-width: 1250px">
        <!-- <v-row dense>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="12"
            >
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
              ></v-card>
            </v-col>
          </v-row> -->
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>
<!-- <template> -->
<!-- @/assets/logo.svg -->
<!-- {{ getRoute }} -->
<!-- {{ router.currentRoute.value.path }} -->
<!-- <topMenu v-if="isLogin !== '/login' && isLogin !== '/register'" />
  <RouterView /> -->

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
<!-- </template> -->

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
