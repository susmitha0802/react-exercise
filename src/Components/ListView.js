export default function ListView({start=1, end=10}) {
    const numbers = [];
    for(let i=start; i<=end; i++) {
        numbers.push(i);
    }
    return (
        <div>
            <h2>ListView</h2>
            <ul>
                {
                    numbers.map(num => (
                        <li key={num}>{num}</li>
                    ))
                }
            </ul>
        </div>
    );
}

// Explain the function and importance of key prop in list
// Function uses default arguments only when the arguments are passed.
// Key prop is used to uniquely identify the data element in a collection of data 
// which doesn't affect the data elements if collection is changed because 