<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-search-web" v-bind="props"></v-btn>
        </template>
        <v-card>
            <v-card-text>
                <v-select
                    :value="text"
                    @input="event => text = event.target.value"
                    :items="item"
                    :label="label"
                    multiple
                    persistent-hint
                ></v-select>
                <v-text-field v-model="search" label="關鍵字"></v-text-field>
                <v-btn @click="$emit('sendForst')">送出</v-btn>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup> 
import { ref} from 'vue'

const props = {
    item: {
        type: Array,
        default: []
    },
    label:{
        type: String,
        default:"default"
    }
}

const dialog = ref('false')



</script>