<template>
    <teleport to="body">
        <v-dialog
            :model-value="isVisible"
            @update:modelValue="!$event && closeCalendar()"
            width="auto"
        >
        <v-date-picker
            v-model="date"
            calendarIcon="mdi-calendar-account"
            collapseIcon="mdi-calendar-collapse-horizontal"
            expandIcon="mdi-calendar-expand-horizontal"
            keyboardIcon="mdi-keyboard"
            showAdjacentMonths
            elevation="20"
            color="primary"
            @click:save="saveValue"
            @click:cancel="closeCalendar"
            :min="1900"
            :max="2024"
        >
        </v-date-picker>
    </v-dialog>
</teleport>
</template>
  
<script setup>
import { ref, defineEmits, watch } from 'vue';

const emit = defineEmits(['update:isVisible', 'update:dateOfBirth','dave'])
const date = ref();
watch(
    () => date.value,
    (value) => {
        emit('update:dateOfBirth' , value)
    }
)

// const getComputedDate = computed(() => {
//     if (!date.value) return '';
//     const dateObj = new Date(date.value);
//     console.log(dateObj)
//     const year = dateObj.getFullYear();
//     const month = String(dateObj.getMonth() + 1).padStart(2, '0');
//     const day = String(dateObj.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// })

defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
    dateOfBirth: {
        type: [String, Date],
        required: true,
    },
    // range:{
    //     type: Boolean,
    //     default: false
    // }
});


// watchEffect(() => date.value = props.dateOfBirth ?? '');

const closeCalendar = () => {
    console.log('close')
    emit('update:isVisible', false);
};


// const pickerUpdate = (value) => {
//     console.log(value)
// }


const saveValue = () => {
    // emit('update:dateOfBirth', getComputedDate);
    console.log('date.value' , date.value)
    emit('save' , date.value)
    closeCalendar();
};


</script>

