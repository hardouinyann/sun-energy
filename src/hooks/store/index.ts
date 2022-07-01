import { Annexes } from '@/models/annexes';
import { Chantier } from '@/models/chantier-client';
import { Installation } from '@/models/installation';
import { defineStore } from 'pinia'

export interface MainStoreState {
    formInstallation: Installation;
    formChantierClient: Chantier;
    annexes: Annexes;
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
   state: (): MainStoreState => {
       return {
            formChantierClient: {
                client: {
                    address: {
                        address: undefined,
                        city: undefined,
                        postal: undefined
                    },
                    mail: undefined,
                    prenom: undefined,
                    nom: undefined,
                    tel: undefined,
                },
                address: {
                    address: undefined,
                    city: undefined,
                    postal: undefined,
                },
                devis: {
                    obj: undefined,
                    num: undefined,
                },
                link: undefined,
                surfaceTotale: undefined,
            },
            formInstallation: {
                toiture: {
                    etat: undefined,
                    type: undefined,
                },
                couverture: {
                    etat: undefined,
                    type: undefined,
                    typeAutre: undefined, 
                },
                alimentation: undefined,
                compteur: undefined,
                distributeur: undefined,
                hauteurGouttiere: undefined,
                hauteurRempants: undefined,
                implantation: undefined,
                inclinaison: undefined,
                longueurGouttiere: undefined,
                nbPanneaux: undefined,
                orientation: undefined,
                puissanceKit: undefined,
                puissanceSouscrite: undefined,
            },
            annexes: {
                photos: {
                    emplacement: undefined,
                },
            },
       };
   },
   getters: {
        getFormChantierClient: (state: MainStoreState) => state.formChantierClient,
        getFormInstallation: (state: MainStoreState) => state.formInstallation,
   },
})