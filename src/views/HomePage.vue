<template>
    <ion-page>
        <se-header />
        <ion-content>
            <div class="home__container ion-padding">
                <ion-item v-for="(item, index) in homeTiles" class="home__tile" lines="none" @click="onItemClicked(item)" :key="index">
                    <ion-icon :icon="item.icon"/>
                    <ion-label>{{ item.label }}</ion-label>
                    <ion-icon v-if="item.isValid.value" :icon="checkmark" slot="end"/>
                </ion-item>
            </div>  
            <ion-button expand="full" size="large" :disabled="!canGenerate">Génerer le PDF</ion-button>            
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { construct, mail, checkmark, camera } from 'ionicons/icons';
import { useIonRouter } from '@ionic/vue';
import { computed } from 'vue';
import { useStore } from '@/hooks/store';
import { isChantierValid } from '@/utils/valdiators';

export interface HomeTile {
    url: string;
    icon: string;
    isValid: any;
    label: string;
}

export type HomeTiles = HomeTile[];

const ionRouter = useIonRouter();
const store = useStore();
const isChantierFormValid = computed(() => {
    const isValid = isChantierValid(store.getFormChantierClient);
    console.log('Is valid: ', isValid);
    return isValid;
});
const isInstallationFormValid = computed(() => false);
const isPiecesJointesFormValid = computed(() => false);

const homeTiles: HomeTiles = [
    {
        url: '/client-chantier',
        icon: mail,
        label: 'Client et Chantier',
        isValid: isChantierFormValid,
    },
    {
        url: '/installation',
        icon: construct,
        label: 'Installation',
        isValid: isInstallationFormValid,
    },
    {
        url: '/pieces-jointes',
        icon: camera,
        label: 'Pièces jointes',
        isValid: isPiecesJointesFormValid,
    },
];

const canGenerate = isChantierFormValid;//&& isInstallationFormValid && isPiecesJointesFormValid;

const onItemClicked = (tile: HomeTile) => ionRouter.push(tile.url);
</script>

<style lang="scss" scoped>

.home {
    &__container {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        width: 100%;
        height: 100%;
    }

    &__tile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
        box-shadow: var(--box-shadow);
        height: 100px;
        border-radius: 8px;
        width: 100%;
        margin-bottom: 20px;
        padding: 5px 0x;
        color: var(--ion-color-medium);
        --inner-padding-end: 0;

        ion-icon {
            font-size: 40px;
            // margin-bottom: 15px;;
            &[slot="end"] {
                color: var(--ion-color-success);
            }
        }

        ion-label {
            font-weight: bold;
            font-size: 20px;
            margin-left: 15px;
        }
    }
}

ion-button {
    margin: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 2 * 20px);
    &::part(native) {
        padding: 0;
    }
}
</style>