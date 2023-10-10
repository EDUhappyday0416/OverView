<template>
  <template v-if="type == 'text'">
    <!-- <v-text-field
      @input="$emit('update:modelValue', $event.target.value)"
      :vj;alue="modelValue"
      :type="validate || 'text'"
      :label="label"
    ></v-text-field> -->
    <!-- <input
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :type="validate || 'text'"
      :label="label"
    /> -->
    <q-input
      @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
      :model-value="modelValue"
      :label="label"
      filled
      :placeholder="Placeholder"
      :error="error"
      bottom-slots
      :errmsg="errmsg"
      after
    >
      <template v-slot:error> {{ errmsg }}</template>

      <template v-slot:after>
        <q-btn round dense flat icon="delete" @click="$emit('deleteItem', index)" v-if="isDelete">
        </q-btn>
      </template>
    </q-input>
  </template>
  <template v-if="type == 'textarea'">
    <q-input
      :label="label"
      filled
      type="textarea"
      @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
      :model-value="modelValue"
    >
      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="$emit('deleteItem', index)" v-if="isDelete">
          刪除
        </q-btn>
      </template>
    </q-input>
  </template>
  <template v-if="type == 'checkbox'">
    <v-checkbox :label="label" type="checkbox"></v-checkbox>
  </template>
  <template v-if="type == 'select'">
    <v-select :label="label" :items="data"></v-select>
  </template>
  <template v-if="type == 'date'">
    <q-input
      filled
      :error="error"
      :type="type"
      :model-value="modelValue"
      :errmsg="errmsg"
      @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
    >
      <template v-slot:error> {{ errmsg }}</template>
    </q-input>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['update:modelValue', 'update:error', 'deleteItem'])

const props = defineProps({
  isDelete: Boolean,
  index: Number,
  Placeholder: {
    type: String
  },
  label: {
    type: String
  },
  item: {
    type: Object
  },
  modelValue: String,
  type: {
    type: String
  },
  field: {
    type: Boolean
  },
  data: {
    type: Array
  },
  vee: {
    type: [String, Array]
  },
  name: String,
  validate: String,
  error: {
    type: Boolean,
    default: false
  },
  errmsg: {
    type: String,
    default: '請輸入正確格式或內容'
  }
})
</script>

<style lang="scss" scoped></style>
