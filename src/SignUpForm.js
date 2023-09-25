export default function SignUpForm({formDetails, valid, onSubmit, onChange}) {
    return (
        <>
            {valid ? 
                <h1>Thank you!!</h1> :
                <div>
                    <h2>SignUp Form</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label> Name: <input 
                                type="text"
                                name="name"
                                value={formDetails.name}
                                placeholder="Enter your name"
                                onChange = {onChange} 
                                required/>
                            </label>
                        </div>
                        <br/>
                        <div>
                            <label> Email: <input 
                                type="email"
                                name="email" 
                                value={formDetails.email}
                                placeholder="Enter your email"
                                onChange = {onChange}
                                required/>
                            </label>
                            <div id="error-email"></div>
                        </div>
                        <br/>
                        <div>
                            <label> Password: <input 
                                type="password" 
                                name="password"
                                value={formDetails.password}
                                placeholder="Enter your password"
                                onChange = {onChange}
                                required/>
                            </label>
                        </div>
                        <br/>
                        <div>
                            <label> Confirm Password: <input 
                                type="password" 
                                name="confirmPassword"
                                value={formDetails.confirmPassword}
                                placeholder="Confirm your password"
                                onChange = {onChange}
                                required/>
                            </label>
                            <div id="error-confirmPassword"></div>
                        </div>
                        <br/>
                        <div>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>  
            } 
        </>
    );
}