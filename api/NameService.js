

export const fetchNameService = async (shard, entitlement, authToken) => {

    try {
        const response = await fetch(`https://pd.${shard}.a.pvp.net/name-service/v2/players`, {
            method: 'PUT',
            headers: {
                'X-Riot-Entitlements-JWT': entitlement,
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (response.ok){
            return await response.json();
        }

    }

    catch (error){
        console.log(error);
    }

}