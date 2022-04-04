import users from "./users";
import vehicles from "./vehicles";
import serviceTypes from "./serviceTypes"
import serviceProviders from "./serviceProviders"
import services from "./services"


export const state = {
    user: Math.random() >= 1.0 ? users[Math.floor(Math.random() * users.length)] : undefined,
    vehicles,
    serviceProviders,
    services
}


/*
## User
- id (generated from backend/DB)
- eMail
- password (backend only)
- token (frontend, generated on backend)
- firstname
- lastname
- address
- phone number (optional)
- picture (optional)

## Vehicle
- id (generated from backend/DB)
- make
- model
- year
- VIN (optional)
- RegistrationNumber (optional)
- pictures (optional)
- description (optional)

## ServiceProvider
- id (generated from backend/DB)
- name
- address
- description
- VATNumber
- owner
- acceptanceRules (combination of make, model and year)
- serviceTypes

## ServiceType (ENUM)
- INSPECTION
- REPAIR
- [INSURANCE]

## Service
- vehicleId
- serviceProviderId
- dateSchedule (when the car gets hand over)
- dateCompleted (invoice, job complete)
- serviceType
- description
- priceEstimation
- serviceState

## ServiceStatus (ENUM)
- REQUESTED (user requested service)
- SUGGESTED (service provider suggested service to user)
- REJECTED (either user or service provider rejected)
- ACCEPTED (user and service provider accepted the service)
- WORKING (is currently being fulfilled)
- COMPLETED (done)

for (id in state.vehicles.allIds) {
    let vehicle = state.vehicles.byId[id]
}

for (id in state.services.allIds) {
    let service = state.services.byId[id];
    let vehicle = state.vehicles.byId[service.vehicleId];
    let serviceProvider = state.serviceProvider.byId[service.serviceProviderId];
}

for (id in state.vehicles.allIds) {
    let service = state.services.byVehicleId[id];
    let serviceProvider = state.serviceProvider.byId[service.serviceProviderId];
}

state: {
    user: {
        id: 3235,
        email: ...,
        ....
    },
    vehicles: {
        byId: {
            143: {
                id: 143,
                make: ...
                ...
            },
            222: {
                id: 222,
                make: ...
                ...
            },
            ...
        },
        allIds: [143, 222, ...]
    },
    serviceProviders: {
        byId: {
            13: {
                id: 13,
                name: "Fritz Felgen Fixer",
                ...
            },
            28: {
                id: 28,
                name: "Martha Maulschlüssel",
                ...
            },
            ...
        },
        allIds: [13, 28, ...]
    },
    services: {
        byId: {
            1: {
                id: 1,
                vehicleId: 222,
                serviceProviderId: 28,
                status: "REJECTED",
                ...
            },
            2: {
                id: 2,
                vehicleId: 143,
                serviceProviderId: 13,
                status: "REQUESTED",
                ...
            },
            ...
        },
        byVehicleId: {
            143: [2, ...],
            222: [1, ...],
            ...
        },
        byServiceProviderId: {
            13: [2, ...],
            28: [1, ...],
            ...
        },
        allIds: [1, 2, ..,]
    }
}
*/