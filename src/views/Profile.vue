<template>
    <div class="profile">
        <v-row justify="center ma-6">
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-sheet class="pa-2 ma-2">
                    <div class="profile__img">
                        <v-parallax
                            height="350"
                            src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                        >
                        </v-parallax>
                    </div>
                    <div class="profile__card">
                        <div class="profile__card___avatar">
                            <div class="d-flex justify-start align-center">
                                <v-avatar image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" color="surface-variant" size="160"></v-avatar>
                            </div>
                        </div>
                        <v-card>
                            <v-divider></v-divider>
                                <div class="pa-4 d-flex align-center">
                                <v-spacer></v-spacer>
                                <v-btn icon="mdi-dots-horizontal" variant="text"></v-btn>
                                <v-btn class="me-2 text-none" color="#4f545c" prepend-icon="mdi-export-variant" variant="flat" >
                                    Share
                                </v-btn>
                                <v-btn
                                    border
                                    class="text-none"
                                    prepend-icon="mdi-check"
                                    variant="text"
                                    >
                                    Interested
                                </v-btn>
                            </div>
                            <v-spacer></v-spacer>
                        </v-card>
                    </div>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="3">
                <v-sheet class="pa-2 ma-2">
                    <v-card
                        class="mx-auto"
                        title="Strengthen your passwords"
                        text="Update your weak or re-used passwords with Password Checkup. It's free and only takes a few minutes. Click the Take Checkup button to get started."
                    >
                    
                        <template v-slot:actions>
                        <v-btn height="48">
                            No Thanks
                        </v-btn>
                    
                        <v-btn
                            :loading="loading"
                            class="flex-grow-1"
                            height="48"
                            variant="tonal"
                        >
                            Take Checkup
                        </v-btn>
                        </template>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="9">
                <v-sheet class="pa-2 ma-2">
                    <v-row justify="center ">
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <v-card
                                class="mx-auto"
                                max-width="400"
                            >
                                <v-img
                                class="align-end text-white"
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover
                                >
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pt-4">
                                Number 10
                                </v-card-subtitle>

                                <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                                </v-card-text>

                                <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange">
                                    Explore
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <v-card
                                class="mx-auto"
                                max-width="400"
                            >
                                <v-img
                                class="align-end text-white"
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover
                                >
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pt-4">
                                Number 10
                                </v-card-subtitle>

                                <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                                </v-card-text>

                                <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange">
                                    Explore
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="4">
                            <v-card
                                class="mx-auto"
                                max-width="400"
                            >
                                <v-img
                                class="align-end text-white"
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover
                                >
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pt-4">
                                Number 10
                                </v-card-subtitle>

                                <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                                </v-card-text>

                                <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange">
                                    Explore
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <!-- <v-card
                        class="mx-auto"
                        title="Strengthen your passwords"
                        text="Update your weak or re-used passwords with Password Checkup. It's free and only takes a few minutes. Click the Take Checkup button to get started."
                    >
                    
                        <template v-slot:actions>
                        <v-btn height="48">
                            No Thanks
                        </v-btn>
                    
                        <v-btn
                            :loading="loading"
                            class="flex-grow-1"
                            height="48"
                            variant="tonal"
                        >
                            Take Checkup
                        </v-btn>
                        </template>
                    </v-card> -->
                    <v-card>

                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-sheet class="pa-2 ma-2">
                    <div class="text-h5">
                        活動
                    </div>
                    <v-card
                        title="吃大便吃大便"
                        subtitle="吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便"
                        text="大便好吃"
                        
                    >
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
                <v-sheet class="pa-2 ma-2">
                    <v-card
                        title="吃大便吃大便"
                        subtitle="吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便"
                        text="大便好吃"
                        
                    >
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
                <v-sheet class="pa-2 ma-2">
                    <v-card
                        title="吃大便吃大便"
                        subtitle="吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便吃大便"
                        text="大便好吃"
                        
                    >
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
    </div>
</template>

<script setup>
</script>

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

    &__card{
        position: relative;

        &___avatar {
            bottom: 1rem;
            left: 1rem;
            position: absolute;
            width: calc(100% - 2rem);
            z-index: 1;
        }

        &___title {
            font-size: 2vw;
            color:#FFFFFF;
        }
    }
}
</style>
