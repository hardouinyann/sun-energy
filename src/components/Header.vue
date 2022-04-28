<template>
    <ion-header color="primary">
        <ion-toolbar>
            <ion-buttons slot="start" v-if="ionRouter.canGoBack() && !isHome">
                <ion-back-button default-href="home"></ion-back-button>
            </ion-buttons>
            <ion-title color="primary"> {{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { useIonRouter } from '@ionic/vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

withDefaults(defineProps<{ title?: string }>(), {
    title: 'Sun Energy',
});

const ionRouter = useIonRouter();
const route = useRoute();
const isHome = ref(false);

watch(() => route.fullPath, val => isHome.value = val === '/home', { immediate: true });
</script>

<style lang="scss">
    ion-header {
        box-shadow: var(--box-shadow--light);

        ion-toolbar {
            --background: var(--ion-color-primary);
        }

        ion-title {
            color: white;
            font-size: 20px;
        }

        ion-back-button {
            --color: white;
        }
    }
</style>