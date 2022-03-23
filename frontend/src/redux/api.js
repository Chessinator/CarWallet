const host = "localhost"
const port = "8080"
const apiRoute = "/api";

export const apiPath = host + ":" + port + apiRoute;

export const asyncDispatch = async ({
    content,
    method,
    url,
    type,
    payload
}) => {
    return async dispatch => {
        const body = JSON.stringify(content);
        const header = {
            'Content-Length': body.length.toString(),
            'Content-Type': 'application/json'
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

// mycarwallet.volkswagen/api/user
/*
    {
        id: 13,
        picture: "mer2fj890fejnoqw90f23jgfow09g"
    }
*/

// mycarwallet.volkswagen/api/user/13
/*
    {
        picture:
    }
*/