export default function Greetings(props) {
    let wish;
    let hr = new Date().getHours();
    if(hr >= 5 && hr < 12) {
        wish = "Good Morning";
    }
    else if(hr >= 12 && hr <= 17) {
        wish = "Good afternoon";
    }
    else {
        wish = "Good Evening";
    }
    return <h1>Hello {props.name}, {wish}</h1>;
}