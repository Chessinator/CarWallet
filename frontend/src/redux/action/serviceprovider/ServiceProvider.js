export const FETCH_SERVICEPROVIDER = "FETCH_SERVICEPROVIDER";

export const fetchServiceProvider = ({ token, serviceProvider, serviceType }) => {

    return async dispatch => {
        const fetchServiceProvidersReq = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const param = (serviceProvider && `provider_id=${serviceProvider.id}`) ?? (serviceType && `service_type=${serviceType}`);
        const url = `${process.env.REACT_APP_API_URL}/api/service/provider?${param}`;
        fetch(url, fetchServiceProvidersReq)
            .then(response => (response.status !== 200) ? [] : response.json())
            .then(data => dispatch({
                type: FETCH_SERVICEPROVIDER,
                payload: data
            }))
            .catch(err => console.log("ERROR FETCHING SERVICES: ", err));
    }
}