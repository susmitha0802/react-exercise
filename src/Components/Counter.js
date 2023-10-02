import { useState } from "react";
import '../App.css';

export default function Counter({defaultValue=0}) {
    const [value, setValue] = useState(defaultValue);
    return (
        <>
            <br/>
            <h2>Value: {value}</h2>
            <Button value="-" onClick={() => setValue(value-1)}/>
            <Button value="+" onClick={() => setValue(value+1)}/>
        </>
    );
}

function Button({value=5, onClick}) {
    return(
        <>
            <button className="style-margin" onClick={onClick}>{value}</button>
        </>
    );
}