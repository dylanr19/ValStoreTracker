import React, {createContext, useState, useEffect} from 'react';
import {authenticate} from "../../api/AuthService";

export const AuthContext = createContext(null);

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

    const login = async (accesToken, idToken, shard) => {
        const auth = await authenticate(accesToken, idToken);

        setAuthState({
            isSigned: true,
            puuid: auth.puuid,
            shard: shard,
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
        <AuthContext.Provider value={{ authState, login, logout }}>
                {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;