<template>
  <ion-page>

    <se-header title="Sun Energy - Installation" />
    
    <ion-content :fullscreen="true" class="ion-padding">
        <ion-list>
            <se-input-wrapper>
                <ion-list-header class="section">
                    Toiture
                </ion-list-header>

                <se-select v-model="installation.toiture.type" label="Type" :options="enumToOptions(TypeToiture)" required/>
                <se-select v-model="installation.toiture.etat" label="Etat" :options="enumToOptions(TypeEtat)" />
                <se-input v-model="installation.inclinaison" label="Inclinaison" type="number" suffix="degrés" />
                <se-select v-model="installation.orientation" label="Orientation" :options="enumToOptions(TypeOrientation)" />
                <se-input v-model="installation.hauteurGouttiere" label="Hauteur gouttière" type="number" suffix="m" />
                <se-input v-model="installation.longueurGouttiere" label="Longueur gouttière" type="number" suffix="m" />
                <se-input v-model="installation.hauteurRempants" label="Hauteur rempants" type="number" suffix="m" />
                <se-select v-model="installation.implantation" label="Implentation" :options="enumToOptions(TypeImplantation)" />
                
                <ion-list-header class="section">
                    Couverture
                </ion-list-header>

                <se-select v-model="installation.couverture.type" label="Type" :options="enumToOptions(TypeCouverture)" />
                <se-select v-model="installation.couverture.etat" label="Etat" :options="enumToOptions(TypeEtat)" />
                
                <ion-list-header class="section">
                    Informations générales
                </ion-list-header>

                <se-input v-model="installation.puissanceKit" label="Puissance du kit" type="number" suffix="kW/h" required/>
                <se-input v-model="installation.nbPanneaux" label="Nombre de panneaux" type="number" required />
                <se-input v-model="installation.distributeur" label="Distributeur" />
                <se-select v-model="installation.alimentation" label="Alimentation" :options="enumToOptions(TypeAlimentation)" />
                <se-select v-model="installation.compteur" label="Compteur" :options="enumToOptions(TypeCompteur)" />
                <se-select v-model="installation.puissanceSouscrite" label="Puissance souscrite"  suffix="kW/h" :options="enumToOptions(TypePuissanceSouscrite)"/>

                <!-- <se-input label="Adresse" v-model="chantier.client.address.address" :icon="home" :validator="minLength(3)" required /> -->

                <se-button class="validation-button" @click="onValidate()" label="Valider" />
            </se-input-wrapper>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useStore } from '@/hooks/store';
import { Installation, TypeToiture, TypeEtat, TypeAlimentation, TypeCompteur, TypeCouverture, TypeImplantation, TypeOrientation, TypePuissanceSouscrite } from '@/models/installation';
import { enumToOptions } from '@/utils/select';
import { IonListHeader, useIonRouter } from '@ionic/vue';
import { reactive } from 'vue';

const store = useStore();
const ionRouter = useIonRouter();
const installation: Installation = reactive(JSON.parse(JSON.stringify(store.getFormInstallation)));

const onValidate = () => {
    store.$patch({
        formInstallation: {
            ...installation,
        },
    });
    ionRouter.navigate('/home', 'back', 'pop');
}
</script>

<style lang="scss" scoped>
    
</style>