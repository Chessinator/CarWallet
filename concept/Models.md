# Models

## User => 
- id (generated from backend/DB)
- eMail
- password (backend only)
- token (frontend, generated on backend)
- firstname
- lastname
- address {country, town, zip, street}
- phoneNumber (optional)
- picture (optional, base64 string)

## Vehicle
- id (generated from backend/DB)
- make
- model
- year
- VIN (optional)
- RegistrationNumber (optional)
- pictures (optional, collection base64 string)
- description (optional)
- services(collection)

## ServiceProvider
- id (generated from backend/DB)
- name
- address
- description
- VATNumber
- owner
- acceptanceRules (combination of make, model and year)
- serviceTypes
- services(collection)


## ServiceType (ENUM)
- INSPECTION
- REPAIR
- [INSURANCE]

## Service (one to many)
- id

- vehicleId
- serviceProviderId
- serviceType

- status
- dateMeeting (when the car gets hand over)
- dateCompleted (invoice, job complete)
- description
- priceEstimation
- priceFinal

## ServiceStatus (ENUM)
- REQUESTED (user requested service)
- SUGGESTED (service provider suggested service to user)
- REJECTED (either user or service provider rejected)
- ACCEPTED (user and service provider accepted the service)
- WORKING (is currently being fulfilled)
- COMPLETED (done)
- CONFLICT (requires user attention)
- FAILED (encountered some error, failure etc)