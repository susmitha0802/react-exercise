import { useState } from "react";

export default function Counter({defaultValue=0}) {
    const [value, setValue] = useState(defaultValue);
    return (
        <>
            <br/>
            <h2>Value: {value}</h2>
            <Button value="+" onClick={() => setValue(value+1)}/>
            <Button value="-" onClick={() => setValue(value-1)}/>
        </>
    );
}

function Button({value=5, onClick}) {
    return(
        <>
            <button style={{margin:10}} onClick={onClick}>{value}</button>
        </>
    );
}