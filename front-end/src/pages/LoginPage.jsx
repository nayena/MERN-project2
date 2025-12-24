import {useState} from 'react';
import  { Link , useNavigate} from 'react-router-dom' ;
import { getAuth , signInWithEmailAndPassword} from 'firebase/auth' ; 

export default function LoginPage(){
    const [email , setEmail] =  useState('');
    const [password, setPassword] =  useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate() ; // funtion to navigate  within the page    

    async function logIn(){
        try{
            await signInWithEmailAndPassword(getAuth(), email , password);
            navigate('/articles');
        }catch(e){
            setError(e.message);
        }
    }

    return(
    <>
    <h1> Log in </h1>
    { error && <p>{error}</p>}
    <input placeholder = 'Your email'
    value= {email }
    onChange={e => setEmail(e.target.value)}/>
    <input placeholder = 'Your password'
    type = 'password'
    value= {password}
    onChange={e => setPassword(e.target.value)}/>
    <button onClick={logIn}> Log In </button>
    <Link to='/signup'> Don't have an account? Create one here    </Link>
    </> 
    ); 
}