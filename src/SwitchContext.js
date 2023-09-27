import { createContext, useState } from "react";

const SwitchContext = createContext();

export function SwitchProvider({ children }) {
    const [switchOn, setSwitchOn] = useState(false);

    function handleSwitch() {
        setSwitchOn(!switchOn);
    }
    
    return (
        <SwitchContext.Provider value={{switchOn, handleSwitch}}>
            {children}
        </SwitchContext.Provider>
    );
}

export default SwitchContext;