import serviceTypes from "./serviceTypes"

export default {
    byId: {
        133: {
            id: 133,
            name: "Fritz Felgenflicker",
            address: {
                street: "Street 124",
                zip: "38444",
                town: "Wolfsburg",
                country: "Germany"
            },
            description: 'We fix your rims like real professionals\
        daily availability\
        just call us or schedule a meething through CarWallet\
        \
        we also serve cake',
            VATNUmber: "DE1233546743",
            owner: "Fritz Felge",
            serviceTypes: serviceTypes
        },
        299: {
            id: 299,
            name: "Martha Maulschlüssel",
            address: {
                street: "Am Ring 24",
                zip: "88888",
                town: "Sometown",
                country: "Germany"
            },
            description: 'coming soon',
            VATNUmber: "DE5533423321",
            owner: "Martha Schmidt",
            serviceTypes: [serviceTypes[0 % serviceTypes.length]]
        },
        301: {
            id: 301,
            name: "Basic Repairshop",
            address: {
                street: "Corner 13",
                zip: "38443",
                town: "Wolfsburg",
                country: "Germany"
            },
            description: 'We are a traditional generic repair shop',
            VATNUmber: "DE23452452343",
            owner: "Klara & Thorsten Schubert",
            serviceTypes: [serviceTypes[1 % serviceTypes.length]]
        }
    },
    allIds: [133, 299, 301]
}