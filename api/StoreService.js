export const fetchSkins = async () => {

    const response = await fetch('https://valorant-api.com/v1/weapons/skins', {
        method: 'GET'
    });

    if(response.ok){
        return await response.json();
    }

}

export const fetchSkinByName = async (name) => {

    const skins = await fetchSkins();
    return skins.data.find(skin => skin.displayName === name);

}

export const getSkinByUuid = async (weaponSkinUuid) => {

    const response = await fetch(`https://valorant-api.com/v1/weapons/skins/${weaponSkinUuid}`, {
        method: 'GET'
    });

    if (response.ok){
        return await response.json();
    }

}

export const fetchStoreFrontV2 = async (shard, puuid, entitlement, authToken) =>
{
    try {
        const response = await fetch(`https://pd.${shard}.a.pvp.net/store/v2/storefront/${puuid}`, {
            method: 'GET',
            headers: {
                'X-Riot-Entitlements-JWT': entitlement,
                'Authorization': `Bearer ${authToken}`
            }
        });

        if(response.ok){
            return await response.json();
        }
    }

    catch (error){
        console.log(error);
    }
}

export const getBundleSkins = async (shard, puuid, entitlement, authToken) => {

    const skins = await fetchSkins();
    const storeFront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    const bundleItems = storeFront.FeaturedBundle.Bundle.Items;

    const bundleSkins = [];

    bundleItems.forEach(item => {
        const skin = skins.data.find(skin => {
            return skin.levels.some(level => level.uuid === item.Item.ItemID);
        });

        if (skin !== undefined){
            bundleSkins.push(skin);
        }
    });

    return bundleSkins;
}

export const getBundleDurationInSeconds = async (shard, puuid, entitlement, authToken) => {

    const storeFront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    return storeFront.FeaturedBundle.Bundle.DurationRemainingInSeconds;
}

export const getSingleSkinsDurationInSeconds = async (shard, puuid, entitlement, authToken) => {

    const storeFront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    return storeFront.SkinsPanelLayout.SingleItemOffersRemainingDurationInSeconds;
}

export const getStorePrice = async (shard, puuid, entitlement, authToken, itemID) => {

    const storeFront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    const bundleItems = storeFront.FeaturedBundle.Bundle.Items;
    const singleItems = storeFront.SkinsPanelLayout.SingleItemStoreOffers;

    let price = '';

    bundleItems.forEach(bundleItem => {
        if(bundleItem.Item.ItemID === itemID){
            price = bundleItem.BasePrice;
        }
    });

    if (price === ''){
        singleItems.forEach(singleItem => {
            if (singleItem.Rewards[0].ItemID === itemID){
                price = singleItem.Cost[Object.keys(singleItem.Cost)[0]];
            }
        })
    }


    return price;
}

export const getSkinOffers = async (shard, puuid, entitlement, authToken) => {

    const skins = await fetchSkins();
    const storefront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    const offers = storefront.SkinsPanelLayout.SingleItemOffers;
    console.log(offers);

    const offerSkins = [];

    offers.forEach(item => {
        const skin = skins.data.find(skin => {
            return skin.levels.some(level => level.uuid === item);
        });

        if (skin !== undefined){
            offerSkins.push(skin);
        }
    });

    return offerSkins;
}

export const getPlayerLoadout = async(shard, puuid, entitlement, authToken) => {

    try {
        const response = await fetch(`https://pd.${shard}.a.pvp.net/personalization/v2/players/${puuid}/playerloadout`, {
            method: 'GET',
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

export const getWallet = async (shard, puuid, entitlement, authToken) => {

    try{
        const response = await fetch(`https://pd.${shard}.a.pvp.net/store/v1/wallet/${puuid}`, {
            method: 'GET',
            headers: {
                'X-Riot-Entitlements-JWT': entitlement,
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (response.ok){
            return await response.json();
        }
    }

    catch(error){
        console.log(error);
    }

}

export const getPlayerCard = async(playerCardID) => {

    try {
        const response = await fetch(`https://valorant-api.com/v1/playercards/${playerCardID}`, {
            method: 'GET'
        });

        if (response.ok){
            return await response.json();
        }
    }

    catch (error){
        console.log(error);
    }

}

export const getBundleImage = async (shard, puuid, entitlement, authToken) => {

    const storefront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    const bannerID = storefront.FeaturedBundle.Bundle.DataAssetID;
    let bundle = {};

    try {
        const response = await fetch(`https://valorant-api.com/v1/bundles/${bannerID}`, {
            method: 'GET',
        });

        if (response.ok) {
            bundle = await response.json();
        }
    }
    catch (error){
        console.log(error);
    }

    return bundle.data.displayIcon;
}

export const getBundleTitle = async (shard, puuid, entitlement, authToken) => {

    const storefront = await fetchStoreFrontV2(shard, puuid, entitlement, authToken);
    const bannerID = storefront.FeaturedBundle.Bundle.DataAssetID;
    let bundle = {};

    try {
        const response = await fetch(`https://valorant-api.com/v1/bundles/${bannerID}`, {
            method: 'GET',
        });

        if (response.ok) {
            bundle = await response.json();
        }
    }
    catch (error){
        console.log(error);
    }

    return bundle.data.displayName;
}