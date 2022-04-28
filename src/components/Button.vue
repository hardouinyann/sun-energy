<template>
    <ion-button expand="full" :disabled="isButtonDisabled">{{ label }}</ion-button>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, ref, Ref } from 'vue';
import { InputWrapperExposed } from './InputWrapper.vue';

defineProps<{
    disabled?: boolean,
    label: string,
}>();

const parent: Ref<InputWrapperExposed> = ref(getCurrentInstance()?.parent?.exposed) as Ref<InputWrapperExposed>;

const isButtonDisabled = computed(() => !parent?.value?.isFormValid);
</script>

<style lang="scss" scoped>
    
</style>