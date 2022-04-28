export interface Chantier {
    client: {
        prenom?: string;
        nom?: string;
        tel?: string;
        mail?: string;
        address?: Address;
    }
    address?: Address;
    link?: string;
    devis?: Devis;
    surfaceTotale?: number;
};

export interface Devis {
    num?: string;
    obj?: string;
}

export interface Address {
    address?: string;
    city?: string;
    postal?: string;
}