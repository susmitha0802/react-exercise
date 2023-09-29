import { useContext } from 'react';
import SwitchContext from './SwitchContext';

export default function Switch() {
    const {switchOn, handleSwitch} = useContext(SwitchContext);
    return (
        <>
            <button style={{marginBottom:10}} onClick={handleSwitch}>{switchOn ? "Hide User Name" : "Show User Name"}</button>
        </>
    );
}