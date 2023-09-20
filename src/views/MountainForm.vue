<template>
    <div class="mountainForm">
        <v-row no-gutters>
        <v-col
            class="pa-2"
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
        >
            <v-text-field
                label="爬山地點"
            ></v-text-field>
        </v-col>
        </v-row>
        <!-- <v-row no-gutters class="d-flex justify-space-between mx-auto">
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="爬山地點"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="所在縣市"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="起登地點"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="日期"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="聯絡資訊"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="交通方式"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="集合地點"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="起登時間"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="能力要求"
                ></v-text-field>
            </v-col>
            <v-col class="ma-2" cols="12" sm="12" md="3">
                <v-text-field
                    label="揪團類型"
                ></v-text-field>
            </v-col>
        </v-row> -->
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
    name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
    },
    phone (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
    },
    email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
    },
    select (value) {
        if (value) return true

        return 'Select an item.'
    },
    checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
    },
    },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>
<style lang="scss" scoped>
.mountainForm {
    width: 100%;
    margin: 0 auto;
}
</style>