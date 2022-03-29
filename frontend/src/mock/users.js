import {
    user0imageBase64,
    user1imageBase64,
    user2imageBase64,
    user3imageBase64
} from "./userImages"

export default [
    {
        id: 0,
        email: "user1@email.test",
        token: "1234567.9012345ffoij.fg34f2",
        firstname: "Karl",
        lastname: "User",
        address: {
            street: "Street 123",
            zip: "38444",
            town: "Wolfsburg",
            country: "Germany"
        },
        phonenumber: "0180 123 456 789",
        picture: user0imageBase64
    },
    {
        id: 1,
        email: "user2@email.test",
        token: "ff3534634.9012345ffoij.fg34f2",
        firstname: "Susi",
        lastname: "Sussi",
        address: {
            street: "",
            zip: "",
            town: "Berlin",
            country: "Germany"
        },
        phonenumber: "0180 123 456 789",
        picture: user1imageBase64
    },
    {
        id: 2,
        email: "wowThisIsAVeryLongEmail@justSomeProvider.test",
        token: "gwef3dfg2.v24ewmvd89123d80m.fw213f",
        firstname: "Mettwurst",
        lastname: "Michael",
        address: {
            street: "",
            zip: "",
            town: "Köln",
            country: "Germany"
        },
        phonenumber: "0180 123 456 789",
        picture: user2imageBase64
    },
    {
        id: 3,
        email: "help@I.test",
        token: "f23f2wg.egsf132e.g2wf23qd",
        firstname: "Trudith Theresa Manynames",
        lastname: "Testington",
        address: {
            street: "",
            zip: "",
            town: "Köln",
            country: "Germany"
        },
        phonenumber: "0180 123 456 789",
        picture: user3imageBase64
    },
];