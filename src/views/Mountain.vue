<template>
  <div style="overflow-y: auto; height: 100vh">
    <v-row no-gutters style="height: 150px" class="d-flex justify-center">
      <v-col class="ma-6" v-for="(item, i) in mountainData" :key="i" cols="12" sm="12" md="3">
        <div class="ma-3">
          <v-card class="mx-auto">
            <v-img
              :src="item.images"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              style="object-fit: cover"
              max-height="250"
              cover
              class="bg-grey-lighten-2"
            >
            </v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>
              <div>{{ item.location }}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useForestData } from '../stores/forest'
const forest = useForestData()
const mountainData = computed(() => forest.MountainData.data)
forest.getQueryMountainData()
</script>
