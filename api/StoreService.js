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

export const fetchStoreFrontV2 = async (auth) =>
{
    try {
        const response = await fetch(`https://pd.${auth.shard}.a.pvp.net/store/v2/storefront/${auth.puuid}`, {
            method: 'GET',
            headers: {
                'X-Riot-Entitlements-JWT': auth.entitlement,
                'Authorization': `Bearer ${auth.token}`
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

export const getBundleSkins = async (auth) => {

    const [skins, storeFront] = await Promise.all([
        fetchSkins(),
        fetchStoreFrontV2(auth)
    ]);

    const bundleItems = storeFront.FeaturedBundle.Bundle.Items;

    const bundleSkins = bundleItems.map(bundleItem => {
        return skins.data.find(skin => {
            return skin.levels.some(level => level.uuid === bundleItem.Item.ItemID);
        });
    });

    return bundleSkins;
}


export const getBundleDurationInSeconds = async (auth) => {

    const storeFront = await fetchStoreFrontV2(auth);
    return storeFront.FeaturedBundle.Bundle.DurationRemainingInSeconds;
}

export const getSingleSkinsDurationInSeconds = async (auth) => {

    const storeFront = await fetchStoreFrontV2(auth);
    return storeFront.SkinsPanelLayout.SingleItemOffersRemainingDurationInSeconds;
}

export const getStorePrice = async (auth, itemID) => {

    const storeFront = await fetchStoreFrontV2(auth);
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

export const getFeaturedSkinOffers = async (auth) => {

    const skins = await fetchSkins();
    const storefront = await fetchStoreFrontV2(auth);
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

export const getPlayerLoadout = async(auth) => {

    try {
        const response = await fetch(`https://pd.${auth.shard}.a.pvp.net/personalization/v2/players/${auth.puuid}/playerloadout`, {
            method: 'GET',
            headers: {
                'X-Riot-Entitlements-JWT': auth.entitlement,
                'Authorization': `Bearer ${auth.token}`
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

export const getWallet = async (auth) => {

    try{
        const response = await fetch(`https://pd.${auth.shard}.a.pvp.net/store/v1/wallet/${auth.puuid}`, {
            method: 'GET',
            headers: {
                'X-Riot-Entitlements-JWT': auth.entitlement,
                'Authorization': `Bearer ${auth.token}`
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

export const getBundleImage = async (auth) => {

    const storefront = await fetchStoreFrontV2(auth);
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

export const getBundleTitle = async (auth) => {

    const storefront = await fetchStoreFrontV2(auth);
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