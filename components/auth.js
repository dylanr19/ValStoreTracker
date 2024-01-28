import React, {createContext, useState, useEffect, useReducer, useMemo} from 'react';
import {View} from "react-native";
import {authenticate} from "../api/AuthService";
import {fetchStoreFrontV2, fetchWeaponSkins, getBundleSkins, getValiantSkinsTEST} from "../api/StoreService";

// const fetchV2Store = (shard, puuid, entitlementToken, authToken) =>
// {
//     fetch(`https://pd.${shard}.a.pvp.net/store/v2/storefront/${puuid}`, {
//         method: "GET",
//         headers: {
//             "X-Riot-Entitlements-JWT": entitlementToken,
//             "Authorization": `Bearer ${authToken}`
//         }
//     }).then(response => response.json())
//         .then(data => {console.log(JSON.stringify(data, null, 2));})
// }

export const Auth = createContext(null);

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isSigned: false,
        username: null,
        password: null,
        puuid: null,
        shard: null,
        token: null,
        entitlement: null,
    });

    useEffect(() => {
        console.log(authState["isSigned"]);
    }, [authState]);

    const login = async (accesToken, idToken) => {
        const auth = await authenticate(accesToken, idToken);

        setAuthState({
            isSigned: true,
            puuid: auth.puuid,
            shard: auth.region,
            token: auth.accessToken,
            entitlement: auth.entitlementsToken
        });
    }

    const logout = () => {
        setAuthState((prevState) => ({
            ...prevState,
            isSigned: false,
        }));
    }

    const refreshToken = (token) => {
        // refresh the access token
    }

    return(
        <Auth.Provider value={{ authState, login, logout }}>
                {children}
        </Auth.Provider>
    );
}

export default AuthProvider;