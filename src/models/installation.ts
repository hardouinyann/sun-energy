export interface Installation {
    toiture?: Toiture;
    couverture?: Couverture;
    inclinaison?: number;
    longueurGouttiere?: number; //en cm ? ???????
    orientation?: TypeOrientation;
    puissanceKit?: number; // en kw/h
    hauteurGouttiere?: number; // en m ?
    hauteurRempants?: number; // ???????
    implantation?: TypeImplantation;
    nbPanneaux?: number; // entier
    distributeur?: string; // Liste à prévoir ? EDF / ENI / ENGIE ....
    alimentation?: TypeAlimentation;
    puissanceSouscrite?: number; // 3 / 6 / 9 / 12
    compteur?: TypeCompteur;
}

export interface Toiture {
    type?: TypeToiture;
    etat?: TypeEtat;
}

export interface Couverture {
    type?: TypeCouverture;
    typeAutre?: string;
    etat?: TypeEtat;
}

export enum TypeToiture {
    TRAD = 'Charpente traditionnelle',
    INDUS = 'Charpente industriellle',
    METAL = 'Charpente métallique',
    TERRASSE = 'Terrasse',
}

export enum TypeCouverture {
    TUILE = 'Tuile',
    ARDOISE = 'Tuile',
    ACIER = 'Bac en acier',
    PLATE = 'Plate',
    MECA = 'Mécanique',
    AUTRE = 'Autre',
}

export enum TypeEtat {
    BON = 'Bon état',
    MOYEN = 'Etat moyen',
    MAUVAIS = 'Mauvais état',
}

export enum TypeOrientation {
    EST = 'Est',
    'SUD-EST' = 'Sud-est',
    SUD = 'Sud',
    OUEST = 'Ouest',
}


export enum TypeImplantation {
    PORTRAIT = 'Portrait',
    PAYSAGE = 'Paysage',
}

export enum TypeAlimentation {
    MONOPHASE = 'Monophasé',
    TRIPHASE = 'Triphasé',
}

export enum TypeCompteur {
    LINKY = 'Linky',
    ELEC = 'Eléctronique',
    DISC = 'Disc'
}

export const TypePuissanceSouscrite = {
    3: '3',
    6: '6',
    9: '9',
    12: '12',
}