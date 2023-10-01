<template>
  <!-- <v-parallax
    class="auto-zoom-in"
    scale="1.1"
    height="400"
    src="https://templates.themekit.dev/alpins/media/hd-3.jpg"
  >
  </v-parallax> -->
  <v-parallax scale="1.1" height="400" src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">百岳</h1>
      <v-divider :thickness="3" class="ma-4 w-50"></v-divider>
    </div>
  </v-parallax>
  <div class="mountain">
    <v-row no-gutters class="d-flex justify-center pa-7">
      <v-col cols="12" sm="12" md="12">
        <v-alert variant="outlined" type="warning" prominent border="top" class="mx-auto">
          一般季節分成 4 級
          <br />A 級：一般健行路線，活動天數約需 1-3 天。 <br />B 級：中級縱走路線，活動天數約需 4-5
          天或活動天數約需 1-3 天但有危險地形。 <br />C 級：高級縱走路線，活動天數約需 5 天以上。
          <br />C+級：高級縱走路線，有垂降及攀岩地形。
        </v-alert>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-chip-group filter v-model="selectedGrades">
          <v-chip
            v-for="grade in gradeList"
            :key="grade"
            :value="grade"
            @click="toggleGrade(grade)"
          >
            {{ grade }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-row no-gutters class="d-flex justify-center">
      <v-col
        class="ma-2 pa-7"
        v-for="(item, i) in filteredMountains"
        :key="i"
        cols="12"
        sm="12"
        md="3"
      >
        <div>
          <v-card class="mx-auto" min-height="350">
            <v-img
              :src="item.ImageURL"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              class="bg-grey-lighten-2 align-end text-white"
              min-height="100"
            >
            </v-img>
            <v-card-title
              >{{ item.MountainName }} {{ item.Height_m }}
              <v-chip>{{ item.Grade }} Level</v-chip></v-card-title
            >
            <v-card-text>
              <div>{{ item.AdministrativeArea }}</div>
              <div>所屬國家公園：{{ item.NationalPark }}</div>
              <div>{{ item.Remarks }}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useForestData } from '../stores/forest'

const $q = useQuasar()
const forest = useForestData()

const toggleGrade = (grade) => {
  forest.selectGrade(grade)
}
const selectedGrades = computed(() => forest.selectedGrades)
const filteredMountains = computed(() => forest.filteredMountains)
const gradeList = ref(['A', 'B', 'C', 'C+'])
onMounted(() => {
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })
  forest
    .getMonutainInfoLevel()
    .then((res) => {
      $q.loading.hide()
    })
    .catch((err) => {
      console.log(err)
    })

  forest
    .getQueryMountainLocation()
    .then((res) => {
      $q.loading.hide()
    })
    .catch((err) => {
      console.log(err)
    })
  // forest
  //   .getMonutainInfoLevel()
  //   .then((res) => {
  //     info.value = res
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
})
</script>

<style></style>
