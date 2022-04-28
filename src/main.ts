import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { createPinia } from 'pinia';

import Header from '@/components/Header.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import InputWrapper from '@/components/InputWrapper.vue';
import Select from '@/components/Select.vue';
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonicVue, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.scss';

const app = createApp(App)
    .use(IonicVue, {
        backButtonText: null,
    })
    .use(createPinia())
    .use(router);

app.component('ion-input', IonInput)
    .component('ion-label', IonLabel)
    .component('ion-page', IonPage)
    .component('ion-item', IonItem)
    .component('ion-icon', IonIcon)
    .component('ion-button', IonButton)
    .component('ion-grid', IonGrid)
    .component('ion-row', IonRow)
    .component('ion-col', IonCol)
    .component('ion-list', IonList)
    .component('ion-header', IonHeader)
    .component('ion-toolbar', IonToolbar)
    .component('ion-title', IonTitle)
    .component('ion-buttons', IonButtons)
    .component('ion-back-button', IonBackButton)
    .component('ion-content', IonContent)
    .component('se-input', Input)
    .component('se-button', Button)
    .component('se-select', Select)
    .component('se-input-wrapper', InputWrapper)
    .component('se-header', Header);
  
router.isReady().then(() => {
  app.mount('#app');
});

defineCustomElements(window);