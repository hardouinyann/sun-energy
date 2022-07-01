import { Chantier } from "@/models/chantier-client";
import { Installation } from "@/models/installation";

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
export const isInstallationValid = (installation: Installation) => {
    return Boolean(installation?.toiture?.type &&
        installation?.puissanceKit &&
        installation?.nbPanneaux,
    );
};