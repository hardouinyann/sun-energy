<template>
    <ion-item lines="full" mode="md">
        <ion-label position="floating">Orientation</ion-label>
        <ion-select interface="popover">
            <ion-select-option value="Nord">Nord</ion-select-option>
            <ion-select-option value="Est">Est</ion-select-option>
            <ion-select-option value="Sud">Sud</ion-select-option>
            <ion-select-option value="Ouest">Ouest</ion-select-option>
        </ion-select>
    </ion-item>        
</template>

<script setup lang="ts">

// use Input ?
defineProps<{
    label: string,
    options: { value: string, label: string }[],
}>();

</script>

<style lang="scss" scoped>
    
</style>