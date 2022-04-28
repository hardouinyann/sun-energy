import { Chantier } from "@/models/chantier-client";

export const isChantierValid = (chantier: Chantier) => {
    const client = chantier.client;

    return Boolean(client?.address?.address &&
        client?.address?.city &&
        client?.address?.postal &&
        client?.mail &&
        client?.prenom &&
        client?.nom
    );
};