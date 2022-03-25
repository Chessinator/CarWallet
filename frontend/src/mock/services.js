import serviceStatus from "./serviceStatus"
import serviceTypes from "./serviceTypes"

export default {
    byId: {
        1: {
            id: 1,
            vehicleId: 2222,
            serviceProviderId: 133,
            status: serviceStatus[5346346 % serviceStatus.length],
            dateMeeting: new Date(2022, 1, 11, 9, 0, 0),
            dateCompleted: new Date(2022, 2, 1, 17, 0, 0),
            serviceType: serviceTypes[63456456 % serviceTypes.length],
            description: "all done, no issues",
            priceEstimation: 300.00,
            priceFinal: 400.00
        },
        2: {
            id: 2,
            vehicleId: 19,
            serviceProviderId: 301,
            status: serviceStatus[63456456 % serviceStatus.length],
            dateMeeting: new Date(2022, 3, 11, 9, 0, 0),
            dateCompleted: undefined,
            serviceType: serviceTypes[63456456 % serviceTypes.length],
            description: "we encountered minor issues and work on fixing them",
            priceEstimation: 950.00
        },
        3: {
            id: 3,
            vehicleId: 7,
            serviceProviderId: 133,
            status: serviceStatus[4742 % serviceStatus.length],
            dateMeeting: undefined,
            dateCompleted: undefined,
            serviceType: serviceTypes[4742 % serviceTypes.length],
            description: "ez",
            priceEstimation: 30.00,
            priceFinal: 25.00
        },
        4: {
            id: 4,
            vehicleId: 19,
            serviceProviderId: 299,
            status: serviceStatus[42323 % serviceStatus.length],
            dateMeeting: new Date(2022, 2, 22, 15, 30, 0),
            dateCompleted: new Date(2022, 2, 23, 11, 45, 0),
            serviceType: serviceTypes[42323 % serviceTypes.length],
            description: "quickfix",
            priceEstimation: 100.00,
            priceFinal: 100.00
        },
        5: {
            id: 5,
            vehicleId: 7,
            serviceProviderId: 299,
            status: serviceStatus[23426712 % serviceStatus.length],
            dateMeeting: new Date(2022, 3, 25, 18, 30, 0),
            dateCompleted: undefined,
            serviceType: serviceTypes[23426712 % serviceTypes.length],
            description: "some description",
            priceEstimation: 1300.00,
            priceFinal: 1200.00
        },
        6: {
            id: 6,
            vehicleId: 2222,
            serviceProviderId: 301,
            status: serviceStatus[213 % serviceStatus.length],
            dateMeeting: new Date(2022, 4, 10, 10, 0, 0),
            dateCompleted: undefined,
            serviceType: serviceTypes[213 % serviceTypes.length],
            description: "some description",
            priceEstimation: 200.00
        }
    },
    byVehicleId: {
        7: [3, 5],
        19: [2, 4],
        2222: [1, 6]
    },
    byServiceProviderId: {
        133: [1, 3],
        299: [4, 5],
        301: [2, 6]
    },
    allIds: [1, 2, 3, 4]
}