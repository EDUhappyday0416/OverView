<template>
  <div class="profile">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-sheet class="pa-2 ma-2">
          <div class="profile__img">
            <v-parallax height="350" src="https://cdn.vuetifyjs.com/images/cards/plane.jpg">
            </v-parallax>
          </div>
          <div class="profile__card">
            <div class="profile__card___avatar">
              <div class="d-flex justify-start align-center">
                <v-avatar
                  image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  color="surface-variant"
                ></v-avatar>
              </div>
            </div>
            <v-card>
              <v-divider></v-divider>
              <div class="pa-4 d-flex align-center">
                <v-spacer></v-spacer>
                <v-btn icon="mdi-dots-horizontal" variant="text"></v-btn>
                <v-btn
                  class="me-2 text-none"
                  color="#4f545c"
                  prepend-icon="mdi-export-variant"
                  variant="flat"
                >
                  分享
                </v-btn>
                <v-btn border class="text-none" prepend-icon="mdi-check" variant="text">
                  好友
                </v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-card>
          </div>
        </v-sheet>
      </v-col>
      <v-row no-gutters>
        <v-col cols="3">
          <v-sheet class="pa-3 ma-3">
            <v-card class="mx-auto">
              <template v-slot:title> 簡介 </template>
              <v-card-text> 簡介簡介簡介簡介簡介簡介簡介簡介簡介 </v-card-text>
            </v-card>
          </v-sheet>
          <v-sheet class="pa-3 ma-3">
            <v-card>
              <div class="d-flex justify-space-around ma-6 text-center">
                <div class="align-self-center">
                  <div class="pa-1">粉絲</div>
                  <div class="pa-1">30000</div>
                </div>
                <v-divider scolor="black" vertical></v-divider>
                <div class="align-self-center">
                  <div class="pa-1">粉絲</div>
                  <div class="pa-1">100000</div>
                </div>
              </div>
              <!-- <v-card-text> 簡介簡介簡介簡介簡介簡介簡介簡介簡介 </v-card-text>
              <v-divider :thickness="13" class="ms-3" inset vertical></v-divider>
              <v-card-text> 簡介簡介簡介簡介簡介簡介簡介簡介簡介 </v-card-text> -->
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="9">
          <v-row no-gutters>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4" lg="4">
              <v-sheet class="pa-1 ma-1">
                <v-card max-width="290px" class="mx-auto">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                  </v-img>
                  <v-card-text>
                    <div class="font-weight-black text-h6">畢羊縱走重裝全自理兩日1120929-30</div>
                    <i class="fa-solid fa-arrows-left-right"></i>17 km
                    <i class="fa-solid fa-arrow-trend-up"></i> 1559m
                    <i class="fa-regular fa-clock"></i> 14h51m
                  </v-card-text>
                  <v-card-actions>
                    <!-- <v-btn>Click me</v-btn> -->
                    <div class="d-flex justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
          <!-- <v-sheet class="pa-2 ma-2"> .v-col-4 </v-sheet> -->
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile {
  &__img {
    /* height: 350px;
        position: relative;*/
  }
  &__avatar {
    /* bottom: 1rem;
        left: 1rem;
        position: absolute;
        width: calc(100% - 2rem);*/
  }

  &__card {
    position: relative;

    &___avatar {
      bottom: 1rem;
      left: 1rem;
      position: absolute;
      width: calc(100% - 2rem);
      z-index: 1;
      bottom: 40px;

      .v-avatar {
        width: 20vw;
        height: 20vw;
        max-width: 160px;
        max-height: 160px;
        min-width: 60px;
        min-height: 60px;
      }
    }

    &___title {
      font-size: 2vw;
      color: #ffffff;
    }
  }
}
</style>
