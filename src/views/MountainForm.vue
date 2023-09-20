<template>
  <div class="mountainForm">
    <v-row no-gutters>
      <v-col class="pa-2" v-for="(item, index) in formData" :key="index" cols="12" sm="4">
        <MountainFormText :item="item" :type="item.type" :field="item.field" :data="items" />
      </v-col>

      <pre>values: {{ values }}</pre>
      <pre>errors: {{ errors }}</pre>
    </v-row>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
// import { useField, useForm } from 'vee-validate'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import MountainFormText from '../components/MountainFormText.vue'

// const name = useField('name')
// const phone = useField('phone')
// const email = useField('email')
// const select = useField('select')
// const checkbox = useField('checkbox')

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
const { values, errors, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required()
  })
})

const email = defineInputBinds('email', {
  validateOnInput: true
})

const formData = ref([
  {
    label: '爬山地點',
    type: 'text',
    field: true,
    key: email
  },
  {
    label: '所在縣市',
    type: 'checkbox',
    field: true,
    key: ''
  },
  {
    label: '起登地點',
    type: 'select',
    field: true,
    key: ''
  },
  {
    label: '日期',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '聯絡資訊',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '交通方式',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '集合地點',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '起登時間',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '能力要求',
    type: 'text',
    field: true,
    key: ''
  },
  {
    label: '揪團類型',
    type: 'text',
    field: true,
    key: ''
  }
])
</script>
<style lang="scss" scoped>
.mountainForm {
  width: 100%;
  margin: 0 auto;
}
</style>
