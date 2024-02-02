import {createContext, useState} from "react";

export const SettingsContext = createContext(null);

const SettingsProvider = ({ children }) => {

    const [settingsState, setSettingsState] = useState({
        allowPushNotifications: false,
    });

    return(
      <SettingsContext.Provider value={{ settingsState, setSettingsState }}>
          {children}
      </SettingsContext.Provider>
    );

}

export default SettingsProvider;