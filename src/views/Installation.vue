<template>
  <ion-page>

    <se-header title="Sun Energy - Installation" />
    
    <ion-content :fullscreen="true" class="ion-padding">
        <ion-list>
            <se-input-wrapper>
                <ion-list-header class="section">
                    Toiture
                </ion-list-header>

                <!-- <se-select v-model="" label="" :options=""/> -->

                <!-- <se-input label="Adresse" v-model="chantier.client.address.address" :icon="home" :validator="minLength(3)" required /> -->

                <se-button class="validation-button" @click="onValidate()" label="Valider" />
            </se-input-wrapper>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonListHeader, useIonRouter } from '@ionic/vue';

const onValidate = () => {
    console.log('Validate')
}
</script>

<style lang="scss" scoped>
    
</style>