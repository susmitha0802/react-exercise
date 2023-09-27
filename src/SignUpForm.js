import { SwitchProvider } from './SwitchContext';
import Switch from './Switch';
import Form from './Form';

export default function SignUpForm({formDetails, valid, onSubmit, onChange}) {
    return (
        <>
            {valid ? 
                <h1>Thank you!!</h1> :
                <div>
                    <h2>SignUp Form</h2>
                    <SwitchProvider>
                        <Switch/>
                        <Form formDetails={formDetails} onSubmit={onSubmit} onChange={onChange}/>
                    </SwitchProvider>
                </div>  
            } 
        </>
    );
}

