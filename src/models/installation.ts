export interface Installation {
    toiture: Toiture;
    couverture: Couverture;
    inclinaison: number;
    longueurGourdiere: number; //en cm ? ???????
    orientation: TypeOrientation;
    puissanceKit: number; // en kw/h
    hauteurGoutiere: number; // en m ?
    hauteurRampants: number; // ???????
    implantation: TypeImplantation;
    nbPanneaux: number; // entier
    distributeur: string; // Liste à prévoir ? EDF / ENI / ENGIE ....
    alimentation: TypeAlimentation;
    puissanceSouscrie: number; // 3 / 6 / 9 / 12
    compteur: TypeCompteur;
}

export interface Toiture {
    type: TypeToiture;
    etat: TypeEtat;
}

export interface Couverture {
    couverture: TypeCouverture;
    couvertureAutre?: string;
    etat: TypeEtat;
}

export enum TypeToiture {
    TRAD = 'Charpente traditionnelle',
    INDUS = 'Charpente industriellle',
    METAL = 'Charpente métallique',
    TERR = 'Terrasse',
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
    E = 'Est',
    SE = 'Sud-est',
    S = 'Sud',
    O = 'Ouest',
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