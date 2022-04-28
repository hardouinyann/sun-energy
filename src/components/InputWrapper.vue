<template>
    <slot></slot>
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref, watch } from 'vue';

const inputsValidators = ref(new Map<number, boolean>());
const isFormValid: ComputedRef<boolean> = computed(() => Array.from(inputsValidators.value.values()).every(Boolean));

const updateValid = (inputId: number, value: boolean) => inputsValidators.value.set(inputId, value);

watch(inputsValidators, newVal => console.log('Inputs validators :', newVal), { deep: true });

defineExpose({
    updateValid,
    isFormValid,
    inputsValidators,
});
</script>

<style lang="scss">
    
</style>