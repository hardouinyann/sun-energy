<template> 
    <div class="constat__wrapper">
        <div class="constat__container">
            <div class="section-title">
                Client
            </div>
            <div>{{ fullName }}</div>
            <div>{{ clientForm.client.mail }}</div>
            <div>{{ clientForm.client.tel }}</div>
            <div>{{ clientForm.client.address?.address + ', ' + clientForm.client.address?.city }}</div>
            <div class="section-title">
                Installation
            </div>
            <div class="section-title">
                Annexes
            </div>
            Emplacement :
            <img :src="emplacementPhoto" v-if="emplacementPhoto"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/hooks/store';
import { computed } from 'vue';

const store = useStore();
const emplacementPhoto = computed(() => store.annexes.photos.emplacement);
const clientForm = computed(() => store.getFormChantierClient);
const fullName = computed(() => clientForm.value.client.prenom + ' ' + clientForm.value.client.nom);
</script>

<style lang="scss" scoped>
.constat__wrapper {
    transform: scale(0.2);
    background: blue;
    font-family: 'Nunito Sans', sans-serif;
}

.constat__container {
    // width / height = 21 * 29.7 (a4)   scaled by 0.2
    width: 1050px;
    // height: 1485px;
    font-size: 30px;
    padding: 30px;
    color: black;
    position: absolute;
    left: 0;
    top: 0;
}

.section-title {
    border: solid 0.1rem rgb(150, 150, 150);
    padding: 10px 20px;
    background: rgb(230, 230, 230);
    text-align: center;
    margin-bottom: 40px;
    background-size: cover;
}

img {
    z-index: 9999;
    max-width: 30%;
}
</style>