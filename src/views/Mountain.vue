<template>
  <div class="mountain">
    <v-row no-gutters class="d-flex justify-center">
      <v-col class="ma-2" v-for="(item, i) in mountainData" :key="i" cols="12" sm="12" md="3">
        <div>
          <v-card class="mx-auto">
            <v-img
              :src="item.images"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              style="object-fit: cover"
              max-height="250"
              cover
              class="bg-grey-lighten-2 align-end text-white"
            >
              <!-- <v-card-text class="text-black" v-text="item.name"></v-card-text> -->
              <v-card-title>{{ item.name }} {{ item.height }}</v-card-title>
              <v-card-text>
                <div>{{ item.location }}</div>
              </v-card-text>
            </v-img>
            <!-- <v-card-title>{{ item.height }}</v-card-title>
            <v-card-text>
              <div>{{ item.location }}</div>
            </v-card-text> -->
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

<style>
.mountain {
  /*width: 100%;
  overflow: auto;
  height: calc(100vh - 100px);
  margin: 0 auto;*/
}

</style>
