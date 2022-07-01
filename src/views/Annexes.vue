<template>
    <ion-page>
        <se-header title="Annexes" />
        <ion-content>
            <ion-button @click="takePicture()" class="picture-button" expand="block" fill="clear"> Ajouter une Photo </ion-button>
            <img :src="emplacementPhoto"  v-if="emplacementPhoto"/>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { Camera, CameraResultType } from '@capacitor/camera';
import { useStore } from '@/hooks/store';
import { computed } from 'vue';

const store = useStore();
const emplacementPhoto = computed(() => store.annexes.photos.emplacement);
const takePicture = async () => {
    const image = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    store.annexes.photos.emplacement = 'data:image/jpeg;base64,' + image.base64String;
    console.log('image', image)
}
</script>

<style lang="scss" scoped>
    
</style>