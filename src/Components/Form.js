import { useContext } from 'react';
import SwitchContext from './SwitchContext';

export default function Form({ formDetails, onSubmit, onChange}) {
    const {switchOn} = useContext(SwitchContext);
    return (
        <form onSubmit={onSubmit}>
            {switchOn && 
                <div>
                    <label> Name: <input 
                        type="text"
                        name="name"
                        value={formDetails.name}
                        placeholder="Enter your name"
                        onChange = {onChange} 
                        />
                    </label>
                    <div id="error-name"></div>
                </div> 
            }
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
    );
}