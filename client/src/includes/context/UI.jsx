import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
    const [UI, setUI] = useState({
        dark: false,
        loading: false,
        sidebarOpen: false
    });

    const changeUI = (state, val) => {
        if (UI[state] !== undefined) {
            setUI((old) => ({
                ...old,
                [state]: val
            }))
        }
    }

    return (
        <UIContext.Provider value={{ UI, changeUI }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUIContext() {
    return useContext(UIContext);
}