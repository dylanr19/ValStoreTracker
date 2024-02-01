

export const fetchNameService = async (auth) => {

    try {
        const response = await fetch(`https://pd.${auth.shard}.a.pvp.net/name-service/v2/players`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Riot-Entitlements-JWT': auth.entitlement,
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify([auth.puuid]),
        });

        if (response.ok){
            return await response.json();
        }
        else{
            console.log(response);
        }

    }

    catch (error){
        console.log(error);
    }

}