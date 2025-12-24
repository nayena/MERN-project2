import {useState} from 'react';
import  { Link , useNavigate} from 'react-router-dom' ;
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth' ; 

export default function CreateAccountPage(){
    const [email , setEmail] =  useState('');
    const [password, setPassword] =  useState(''); 
    const [confirmPassword, setConfirmPassword] =  useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate() ; // funtion to navigate  within the page    

    async function signUp(){

        if (password !== confirmPassword){
            setError('Password and ConfirmPassword do not match');
            return; 
        }
        try{
            await createUserWithEmailAndPassword(getAuth(), email , password);
            navigate('/login');
        }catch(e){
            setError(e.message);
        }
    }

    return(
    <>
    <h1> Create Account </h1>
    { error && <p>{error}</p>}
    <input placeholder = 'Your email'
    value= {email }
    onChange={e => setEmail(e.target.value)}/>
    <input placeholder = 'Your password' //password
    type = 'password'
    value= {password}
    onChange={e => setPassword(e.target.value)}/>

    <input placeholder = 'Confirm Password' //confirm password
    type = 'password'
    value= {confirmPassword}
    onChange={e => setConfirmPassword(e.target.value)}/>


    <button onClick={signUp}> Sign Up</button>
    <Link to='/login'> Already Have an Account? Log In here  </Link>
    </> 
    ); 
}