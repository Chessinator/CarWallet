## API Endpoints


ip:8080/api

/auth/**

    POST: login/
    POST: register/ => user create
    POST: refresh-token/
    

/user/**

    READ: / (read user data)
    DELETE: / (user deletion)
    UPDATE: profile/ (change in user details i.e. firstname)
    UPDATE: picture/
    DELETE: picture/


/vehicle/**

    CREATE: / (user creates new vehicle without ID and gets that vehicle with DB ID back)
    READ: / (get all vehicles as collection)
    READ: /:vehicleId (read car by ID)
    UPDATE: /:vehicleId (update vehicle values by ID)
    DELETE: /:vehicleId (delete vehicle by ID)


/service/**

    READ: /:serviceId (get service by ID, restricted by auth user)
    READ: /:vehicleId
    READ: /:serviceProviderId (Schnittmenge mit auth user vehicles)
    UPDATE: /:serviceId:serviceStatus (update user)
    UPDATE: /:serviceId:meetDate
    UPDATE: /:serviceID:description
    CREATE: /:vehicleId:serviceProviderId:description:meetDate (request new service from a provider)

    types/**
        READ: / (get all service types available)

    provider/**
        READ: /:serviceType => exact
        READ: /:serviceProviderId
        [READ: /:address]
        [READ: /:serviceType:adress]