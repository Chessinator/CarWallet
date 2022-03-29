import {
    xdiavel1imageBase64,
    xdiavel2imageBase64,
    xdiavel3imageBase64
} from "./vehicleImages";

export default {
    byId: {
        7: {
            id: 7,
            make: "Volkswagen",
            model: "Golf III",
            year: "2012"
        },
        19: {
            id: 19,
            make: "Volkswagen",
            model: "ID.3",
            year: "2022",
            vin: "f23fg2g23gg4",
            registrationNumber: "245452343",
            pictures: [],
            description: "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence"
        },
        2222: {
            id: 2222,
            make: "Ducati",
            model: "XDiavel",
            year: "2018",
            pictures: [
                xdiavel1imageBase64,
                xdiavel2imageBase64,
                xdiavel3imageBase64
            ]
        },
        237: {
            id: 237,
            make: "Volkswagen",
            model: "Golf III",
            year: "2012"
        },
        733: {
            id: 733,
            make: "Volkswagen",
            model: "Golf III",
            year: "2012"
        },
        788: {
            id: 788,
            make: "Volkswagen",
            model: "Golf III",
            year: "2012"
        },
    },
    allIds: [7, 19, 2222, 237, 733, 788]
}