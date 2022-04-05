export const asyncDispatch = async ({
    content,
    method,
    url,
    type,
    payload,
    token
}) => {

    return async dispatch => {
        const body = JSON.stringify(content);
        const header = {
            'Content-Length': body.length.toString(),
            'Content-Type': 'application/json',
            "Authorization": token ? `Bearer ${token.access ?? token}`: undefined // TODO: CHECK IF UNDEFINED AUTHORIZATION WORKS
        }; 
        const request = {
            header, body, method
        };

        await fetch(url, request)
        .then(response => response.json())
        .then(data => dispatch({
                type,
                payload: {...payload, data}
            })
        );
    };
};