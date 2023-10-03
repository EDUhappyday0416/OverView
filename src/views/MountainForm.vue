<template>
  <!-- <h4 class="pa-3">
    申請表單
  </h4> -->
  <v-parallax scale="1.1" height="400" src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">申請表單</h1>
      <v-divider :thickness="3" class="ma-4 w-50"></v-divider>
    </div>
  </v-parallax>
  <v-divider class="pa-3"></v-divider>
  <div class="mountainForm">
    <v-row no-gutters class="d-flex justify-start">
      <v-col v-for="(item, index) in formData" :key="index" cols="12" sm="12" md="6" class="pa-4">
        <MountainFormText
          :item="item"
          :label="item.label"
          :validate="item.validate"
          :field="item.field"
          :name="item.name"
          :type="item.type"
          :model-value="item.value"
          :Placeholder="item.Placeholder"
          :error="item.field == true ? error : false"
          @update:model-value="(newValue) => (item.value = newValue)"
          :isDelete="item.isDelete"
          :index="index"
          @deleteItem="deleteItem"
        />
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn class="text-none ma-4" color="grey-lighten-2" @click="prompt = true"> 新增欄位 </v-btn>
      <v-btn class="text-none ma-4" color="teal-darken-4" @click="onSubmit()"> 確認 </v-btn>
    </div>
  </div>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">新增欄位</div>
      </q-card-section>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-input label="輸入欄位" v-model="field1" />
          <q-input label="輸入提示文字" v-model="inputPromptText" />
        </div>
      </div>
      <div class="q-px-sm">
        是否開啟輸入多行文字: <strong>{{ openTextArea }}</strong>
      </div>
      <div class="q-gutter-sm">
        <q-radio v-model="openTextArea" val="Yes" label="Yes" />
        <q-radio v-model="openTextArea" val="No" label="No" />
      </div>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="關閉" v-close-popup />
        <q-btn flat label="新增" v-close-popup @click="addForm" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="sendData" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">確認欄位</div>
      </q-card-section>
      <div class="q-pa-md">
        <div v-for="(item, i) in formData" :key="i">
          <div class="q-gutter-md">
            <div>{{ item.label }} ： {{ item.value }}</div>
          </div>
        </div>
      </div>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="關閉" v-close-popup />
        <q-btn flat label="送出" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import MountainFormText from '../components/MountainFormText.vue'
const openTextArea = ref('No')
// const name = useField('name')
// const phone = useField('phone')
// const email = useField('email')
// const select = useField('select')
// const checkbox = useField('checkbox')
const prompt = ref(false)
const field1 = ref('')
const inputPromptText = ref('')
const sendData = ref(false)
import { useForestData } from '../stores/forest'
const forest = useForestData()
const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
// const isValid = computed(() => modelValue.value.length >= 1)
// const { handleSubmit } = useForm({
//   validationSchema: yup.object({
//     firstName: yup.string().required()
//   })
// })
const error = computed(() => {
  if (isError.value) return
  for (let item of formData.value) {
    if (item.field) {
      //針對某一個欄位做判斷
      if (item.name === 'firstName') {
        if (item.value.length <= 3) {
          return true
        }
      }
    }
  }
  return false // 沒有任何錯誤
})

// const onSubmit = handleSubmit((values) => {
//   console.log(values)
//   alert(JSON.stringify(values, null, 2))
// })

const addForm = () => {
  const newItem = {
    label: field1.value,
    type: openTextArea.value == 'Yes' ? 'textarea' : 'text',
    field: false,
    key: '',
    validate: 'text',
    name: `field${formData.value.length + 1}`,
    value: '',
    Placeholder: inputPromptText.value,
    isDelete: true
  }

  formData.value.push(newItem)

  field1.value = ''
  inputPromptText.value = ''
}

const deleteItem = (index) => {
  formData.value.splice(index, 1)
}
const onSubmit = () => {
  console.log(formData.value)
  sendData.value = true
  const data = {
    UnitsName: '33333'
  }
  forest
    .postMountainTripList(formData.value)
    .then((res) => {
      // routeArray.value = []
      // routeArray.value.push(...res.data)
      console.log(res)
      // $q.loading.hide()
    })
    .catch((error) => {
      // $q.loading.hide()
      console.log(error)
    })
  //console.log(modelValue.value)
}

const isError = ref(true) //載入頁面預設是否要先判斷錯誤

const formData = ref([
  {
    label: '爬山地點',
    type: 'text',
    field: true,
    key: '',
    validate: 'text',
    name: 'firstName',
    value: '',
    Placeholder: '北大武（單攻）',
    deleteItem: false
  },
  {
    label: '日期',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: 'date',
    value: '',
    Placeholder: 'ex: 9/30',
    deleteItem: false
  },
  {
    label: '聯絡資訊',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: 'content',
    value: '',
    Placeholder: 'ex: 9/30',
    deleteItem: false
  },
  {
    label: '山岳等級',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: 'content',
    value: '',
    Placeholder: 'A/B/C 或 百岳雲海級山岳',
    deleteItem: false
  },
  {
    label: '集合地點',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: '',
    value: '',
    Placeholder: '台北火車站',
    deleteItem: false
  },
  {
    label: '活動人數',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: '',
    value: '',
    Placeholder: '滿7人開團',
    deleteItem: false
  },
  {
    label: '交通方式',
    type: 'text',
    field: false,
    key: '',
    validate: 'text',
    name: 'train',
    value: '',
    Placeholder: '包車/再議',
    deleteItem: false
  }
])
</script>
<style lang="scss" scoped>
.mountainForm {
  width: 90%;
  margin: 0 auto;
}
</style>
