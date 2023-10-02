import { useContext } from 'react';
import SwitchContext from './SwitchContext';
import '../App.css';

export default function Switch() {
    const {switchOn, handleSwitch} = useContext(SwitchContext);
    return (
        <>
            <button className="style-margin" onClick={handleSwitch}>{switchOn ? "Hide User Name" : "Show User Name"}</button>
        </>
    );
}