<template>
    <input v-model="value" :class="{ 'validation-failed' : validationMsg}" class="form-control form-in" type="text" :name="name" :placeholder="placeholder"/>
    <label class="font-weight-bold ml-2 mt-1 text-danger" v-if="validationMsg">{{ validationMsg }}</label>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        name: String,
        placeholder: String,
        modelValue: String
    },
    computed: {
        validationMsg(){
            return this.value.match(/^\d*$/) ? '' : 'Not a number!!!'
        },
        value: {
            get(){
                return this.modelValue;
            },
            set(value){
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>