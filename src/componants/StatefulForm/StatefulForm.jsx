import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('rojoni')
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(pass.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
            console.log(name, email, pass);
        }
        

    }
    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPass(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input 
                
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;