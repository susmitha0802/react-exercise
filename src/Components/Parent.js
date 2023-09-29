import { useState } from "react";
import SignUpForm from './SignUpForm';
export default function Parent() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [valid, setValid] = useState(false);
    function handleChange(e) {
        setFormDetails({
            ...formDetails,
            [e.target.name] : e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formDetails);
        const err = validateForm();
        if(!err) {
            setValid(true);
        }
    }
    function validateForm() {
        let error;
        if(formDetails.name === "") {
            document.getElementById("error-name").textContent = 'User name is mandatory';
            error = true;
        }
        else {
            document.getElementById("error-email").textContent = "";
        }
        if (formDetails.email !== "" && !/\S+@\S+.\S+/.test(formDetails.email)) {
            document.getElementById("error-email").textContent = 'Invalid email format';
            setFormDetails({
                ...formDetails,
                email: ""
            });
            error = true;
        }
        else {
            document.getElementById("error-email").textContent = "";
        }
        if(formDetails.password !== "" && formDetails.confirmPassword !== "") {
            if(formDetails.password !== formDetails.confirmPassword) {
                document.getElementById("error-confirmPassword").textContent = "Passwords doesn't match";
                setFormDetails({
                    ...formDetails,
                    password: "",
                    confirmPassword: ""
                });
                error = true;
            }
            else {
                document.getElementById("error-confirmPassword").textContent = "";
            }
        }
        console.log(formDetails);
        return error;
    }
    return (
        <>
            <SignUpForm
                formDetails={formDetails}
                valid={valid}
                onSubmit={handleSubmit}
                onChange = {handleChange} />
        </>
    );
}