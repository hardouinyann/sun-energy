<template>
    <ion-page>
        <se-header />
        <ion-content>
            <div id="test" class="home__container ion-padding">
                <ion-item v-for="(item, index) in homeTiles" class="home__tile" lines="none" @click="onItemClicked(item)" :key="index">
                    <ion-icon :icon="item.icon"/>
                    <ion-label>{{ item.label }}</ion-label>
                    <ion-icon v-if="item.isValid.value" :icon="checkmark" slot="end"/>
                </ion-item>
            </div>
            <constat ref="template" /> 
            <!-- <ion-button expand="full" size="large" :disabled="!canGenerate">Génerer le PDF</ion-button>             -->
            <ion-button expand="full" size="large" @click="generatePDF()">Génerer le PDF</ion-button>    
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { construct, mail, checkmark, camera } from 'ionicons/icons';
import { useIonRouter } from '@ionic/vue';
import { computed, Ref, ref } from 'vue';
import { useStore } from '@/hooks/store';
import { isChantierValid, isInstallationValid } from '@/utils/valdiators';
import { jsPDF } from "jspdf";
import constat from '@/templates/constat.vue';


export interface HomeTile {
    url: string;
    icon: string;
    isValid: any;
    label: string;
}

export type HomeTiles = HomeTile[];

const ionRouter = useIonRouter();
const store = useStore();
const template: Ref<InstanceType<typeof constat> | null> = ref(null);
const isChantierFormValid = computed(() => isChantierValid(store.getFormChantierClient));
const isInstallationFormValid = computed(() => isInstallationValid(store.getFormInstallation));
const isPiecesJointesFormValid = computed(() => true);
const emplacementPhoto = computed(() => store.annexes.photos.emplacement);

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
        url: '/annexes',
        icon: camera,
        label: 'Annexes',
        isValid: isPiecesJointesFormValid,
    },
];

const canGenerate = isChantierFormValid;//&& isInstallationFormValid && isPiecesJointesFormValid;

const onItemClicked = (tile: HomeTile) => ionRouter.push(tile.url);


const generatePDF = async () => {
    const doc = new jsPDF();
    //console.log('El :', template.value?.$el.outerHTML.toString())
    
   /*  const canvas = document.createElement("canvas");
    // ctx.canvas.width = 100;
    // ctx.canvas.height = 100;
    const img = new Image();
    img.src = store.annexes.photos.emplacement!;
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        console.log(img.height);
            

        const canvasImg = canvas.toDataURL();

        document.getElementById('test')?.appendChild(canvas);
        */ //document.getElementById('test')?.appendChild(img);

        doc.html(template.value!.$el.outerHTML, {
            callback: async (doc) => {
                const res = await getPhotoFromB64(store.annexes.photos.emplacement);
                //doc.addPage();
                //doc.addImage(store.annexes.photos.emplacement , "PNG", 0, 200, res.width/8, res.height/8);
                doc.addImage(res.img , "PNG", 0, 100, res.width/8, res.height/8);
                doc.save()
            },
            // image: {
            //     type: 'jpeg',
            //     quality: 90,
            // }
        });
    };

const getPhotoFromB64 = (b64: string): Promise<{img: string, width: number, height: number, ratio: number }> => {
    return new Promise((resolve) => {

        const canvas = document.createElement("canvas");
        // ctx.canvas.width = 100;
        // ctx.canvas.height = 100;
        const img = new Image();
        img.src = b64;
        img.onload = function(){
            console.log('img ', img.height, img.width);
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d")!;
            ctx.canvas.width = img.width;
            ctx.canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            resolve({
                img: canvas.toDataURL(),
                width: img.width,
                height: img.height,
                ratio: img.width/img.height,
            });
        };
    });
}
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