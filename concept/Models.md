# Models

## User
- id (generated from backend/DB)
- eMail
- password (backend only)
- token (frontend, generated on backend)
- firstname
- lastname
- adress
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
- adress
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
- status
- dateMeeting (when the car gets hand over)
- dateCompleted (invoice, job complete)
- serviceType
- description
- priceEstimation

## ServiceStatus (ENUM)
- REQUESTED (user requested service)
- SUGGESTED (service provider suggested service to user)
- REJECTED (either user or service provider rejected)
- ACCEPTED (user and service provider accepted the service)
- WORKING (is currently being fulfilled)
- COMPLETED (done)