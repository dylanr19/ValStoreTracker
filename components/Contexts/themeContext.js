import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const dark = { // default theme
    app: {
        text: 'white',
        background: '#121212',
        title: 'white',
    },
    account: {
        swiper: '#363636',
        name: 'tomato',
        tag: 'gray',
        arrow: 'gray',
        logout: 'gray',
        thinLine: '#515151',
    },
    swiper: {
        arrow: 'gray',
        dot: 'gray',
        activeDot: 'tomato',
    },
    search: {
        background: '#212121',
        icon: 'gray',
    },
    weapon: {
        background: '#212121',
        close: 'gray',
    },
    tabBar: {
        icon: 'gray',
        activeIcon: 'tomato',
        background: '#363636',
    },
    settings: {
        background: '#000000',
        divider1: 'gray',
        divider2: '#212124',
        box: '#212124',
    },
    currency: {
        icon: 'gray'
    }
}

const light = {
    app: {
        text: '#212124',
        background: '#F3F3F7',
        title: 'white',
    },
    account: {
        swiper: 'white',
        name: 'tomato',
        tag: 'gray',
        arrow: 'gray',
        logout: 'gray',
        thinLine: 'gray',
    },
    swiper: {
        arrow: 'gray',
        dot: 'gray',
        activeDot: 'tomato',
    },
    search: {
        background: 'white',
        input: 'black',
        icon: 'gray',
    },
    weapon: {
        background: 'white',
        close: 'gray'
    },
    tabBar: {
        icon: 'gray',
        activeIcon: 'tomato',
        background: 'white',
    },
    settings: {
        background: '#121212',
        divider1: 'gray',
        divider2: 'white',
        box: 'white',
    },
    currency: {
        icon: 'tomato'
    }
}

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(dark);
    const [isLight, setIsLight] = useState(false);

    const setDark = () => {
        setIsLight(false);
        setTheme(dark);
        storeTheme('dark');
    }

    const setLight = () => {
        setIsLight(true);
        setTheme(light);
        storeTheme('light');
    }

    // Saves the given theme to the local storage
    const storeTheme = async (themeName) => {
        try {
            await AsyncStorage.setItem('@theme', themeName);
        } catch (e) {
            console.error('Failed to save theme:', e);
        }
    };

    // Retrieves the theme from a past session from the local storage
    const retrieveTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem('@theme');
            if (theme !== null) {
                return theme;
            } else {
                console.log('Theme not found');
            }
        } catch (e) {
            console.error('Failed to retrieve theme:', e);
        }
    };

    // Retrieve the stored theme upon app startup
    // Sets theme to default dark if local storage has no theme
    useEffect(() => {
        const initTheme = async () => {
            const theme = await retrieveTheme();
            if(theme === 'light') {
                setTheme(light);
                setIsLight(true);
            } else {
                setTheme(dark);
                setIsLight(false);
            }
        }

        initTheme();
    }, []);

    return(
        <ThemeContext.Provider value={{ theme, setTheme, setDark, setLight, isLight }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;