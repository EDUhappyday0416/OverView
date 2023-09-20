<template>
  <template v-if="item.type == 'text'">
    <!-- <v-text-field
      :label="item.label"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    ></v-text-field> -->
    <v-text-field :label="item.label"></v-text-field>
  </template>
  <template v-if="item.type == 'checkbox'">
    <v-checkbox :label="item.label" type="checkbox"></v-checkbox>
  </template>
  <template v-if="item.type == 'select'">
    <v-select :label="item.label" :items="data"></v-select>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
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
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
