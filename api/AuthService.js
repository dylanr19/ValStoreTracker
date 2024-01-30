
// const fetchCookies = async () => {
//
//
//     try {
//         const response = await fetch('https://auth.riotgames.com/api/v1/authorization', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 client_id: "play-valorant-web-prod",
//                 nonce: "1",
//                 redirect_uri: "https://playvalorant.com/opt_in",
//                 response_type: "token id_token",
//                 scope: "account openid",
//             })
//         });
//
//         if (response.ok){
//             return await response.json();
//         }
//
//     }
//     catch (error){
//         console.log('Fetch error', error);
//     }
// }
// // TODO: fix: {"country": "nld", "error": "invalid_session_id", "type": "error"}
// const fetchAuthToken = (cookies) => {
//     console.log(cookies);
//
//     fetch("https://auth.riotgames.com/api/v1/authorization", {
//         method: "PUT",
//         body: JSON.stringify({
//             type: "auth",
//             username: "turkwaz33",
//             password: "Hamza2010",
//             remember: false,
//             language: "en_US",
//         }),
//         headers: {
//             "Content-Type": "application/json",
//             "Cookie": cookies,
//         },
//         credentials: "include"
//     }).then(response => {
//         if (response.ok){
//             return response.json();
//         }
//     }).then(data => {
//         return data;
//     }).catch(error => {
//         console.log("Error ", error);
//     });
// }

const fetchEntitlement = async (authToken) =>
{
    try {
        const response = await fetch('https://entitlements.auth.riotgames.com/api/token/v1', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: {}
        });

        if (response.ok){
            return await response.json();
        }

    }
    catch (error){
        console.log(error);
    }
}

const fetchRegion = async (accessToken, idToken) => {

    try {
        const response = await fetch('https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant', {
            method: 'PUT',
            headers:  {
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                id_token: idToken,
            }),
        });

        if (response.ok){
            return await response.json();
        }
    }

    catch (error){
        console.log(error);
    }

}

export const fetchPlayerInfo = async (accessToken) =>
{
    const response = await fetch('https://auth.riotgames.com/userinfo', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if(response.ok){
        return await response.json();
    }
}

export const authenticate = async (accessToken, idToken) => {

    let jsonData = await fetchEntitlement(accessToken);
    jsonData = JSON.parse(JSON.stringify(jsonData));
    const entitlementsToken = jsonData.entitlements_token;

    jsonData = await fetchRegion(accessToken, idToken);
    const region = jsonData.affinities.live;

    jsonData = await fetchPlayerInfo(accessToken);
    const puuid = jsonData.sub;

    return {
        accessToken: accessToken,
        entitlementsToken: entitlementsToken,
        region: region,
        puuid: puuid
    }
}