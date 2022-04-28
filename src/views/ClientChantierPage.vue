<template>
  <ion-page>

    <se-header title="Sun Energy - Chantier & Client" />
    
    <ion-content :fullscreen="true" class="ion-padding">
        <ion-list>
            <se-input-wrapper>
                <ion-list-header class="section">
                    Informations client
                </ion-list-header>
                
                <se-input label="Prenom" v-model="chantier.client.prenom" :validator="minLength(3)" required />
                
                <se-input label="Nom" v-model="chantier.client.nom" :validator="minLength(3)" required />

                <se-input label="Adresse" v-model="chantier.client.address.address" :icon="home" :validator="minLength(3)" required />

                <se-input label="Code Postal" class="cp" v-model="chantier.client.address.postal" :validator="isPostal" type="number" required />

                <se-input label="Ville" class="ville" v-model="chantier.client.address.city" :validator="minLength(3)" required />

                <se-input label="Mail" :icon="mail" v-model="chantier.client.mail" :validator="isEmail" type="email" required />

                <se-input label="Tel" :icon="phonePortrait" v-model="chantier.client.tel" />

                <!-- <ion-item lines="full" mode="md">
                    <ion-label position="floating">Orientation</ion-label>
                    <ion-select interface="popover">
                        <ion-select-option value="Nord">Nord</ion-select-option>
                        <ion-select-option value="Est">Est</ion-select-option>
                        <ion-select-option value="Sud">Sud</ion-select-option>
                        <ion-select-option value="Ouest">Ouest</ion-select-option>
                    </ion-select>
                </ion-item>         -->

            <!-- <ion-item  lines="full" mode="md">
                <ion-label position="floating">Surface</ion-label>
                <ion-input type="number" v-model="surface" required/>
                <div slot="end" style="top: 0; bottom: 0; margin: auto">m2</div>
            </ion-item> -->

                <ion-list-header class="section">
                    Devis
                </ion-list-header>

                <se-input label="Numéro" v-model="chantier.devis.num" type="number" />

                <se-input label="Objet" v-model="chantier.devis.obj" />

                <se-input label="Surface totale" v-model="chantier.surfaceTotale" type="number" />

                
                <!-- <ion-button @click="takePicture()" class="picture-button" expand="block" fill="clear" >
                    <div class="picture-button__content" :style="{ backgroundImage: `url('${installationImg}')` }">
                        <div class="picture-button__overlay">
                            <ion-icon :icon="camera" />
                            <div>Photo de l'installation</div>  
                        </div>          
                    </div>
                    <img ref="imgRef" />
                </ion-button> -->



        
                <!-- <ion-item  lines="full" mode="md">
                    <ion-label position="stacked">Stacked Label</ion-label>
                    <ion-input></ion-input>
                </ion-item> -->
                <se-button class="validation-button" @click="onValidate()" label="Valider" />
            </se-input-wrapper>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonListHeader, useIonRouter } from '@ionic/vue';
import { mail, phonePortrait, home } from 'ionicons/icons';
// import { Camera, CameraResultType } from '@capacitor/camera';
import { Chantier } from '@/models/chantier-client';
import { useStore } from '@/hooks/store';
import { reactive } from 'vue';
import { minLength, isEmail, isPostal } from '@/utils/input-validators';

const store = useStore();
const ionRouter = useIonRouter();
const chantier: Chantier = reactive(JSON.parse(JSON.stringify(store.formChantierClient)));

const onValidate = () => {
    store.$patch({
        formChantierClient: {
            ...chantier,
        },
    });
    ionRouter.navigate('/home', 'back', 'pop');
};

// const installationImg: Ref<string | undefined> = ref();

// const imageBackrgoundColor: ComputedRef<string> = computed(() => installationImg.value ? 'rgba(255, 255, 255, 0.5)' : 'transparent');

// const takePicture = async () => {
//     const image = await Camera.getPhoto({
//         quality: 90,
//         allowEditing: true,
//         resultType: CameraResultType.Uri
//     });

//     // image.webPath will contain a path that can be set as an image src.
//     // You can access the original file using image.path, which can be
//     // passed to the Filesystem API to read the raw data of the image,
//     // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
//     installationImg.value =  image.webPath;
// }
</script>

<style lang="scss" scoped>
// #container {
//   text-align: center;
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 50%;
//   transform: translateY(-50%);
// }

// #container strong {
//   font-size: 20px;
//   line-height: 26px;
// }

// #container p {
//   font-size: 16px;
//   line-height: 22px;
//   color: #8c8c8c;
//   margin: 0;
// }

// #container a {
//   text-decoration: none;
// }

ion-content {
    padding-bottom: 50px;
}

ion-item {
    margin-bottom: 20px;
    border: solid 1px #bcbcbc;
    border-radius: 9px;
}

ion-grid, ion-row, ion-col {
    padding: 0;
    margin: 0;
}

.cp {
    display: inline-block;
    width: 40%;
    margin-right: 10px;
}

.ville {
    display: inline-block;
    width: calc(60% - 10px);
}

// .picture-button {
//     margin: 0;
//     border: dashed 2px var(--ion-color-medium);
//     border-radius: 10px;
//     height: 140px;
//     color: grey;
//     font-weight: bold;

//     &__content {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         background-size: cover;
//         width: 100%;
//         height: 100%;
//     }

//     &__overlay {
//         width: 100%;
//         height: 100%;
//         // background: v-bind(imageBackrgoundColor);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         border-radius: 10px;
//     }

//     ion-icon {
//         margin-left: 10px;
//         font-size: 40px;
//         margin-bottom: 20px;;
//     }

//     img {
//         width: 100%;
//         position: absolute;
//         left: 0;
//         top: 0;
//     }

//     &::part(native) {
//         padding: 0;
//     }
// }

</style>
