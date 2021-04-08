import { useState }  from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {

    const [user, setUser] =useState('');
    const [role, setRole] =useState('');
    const [password, setPassword] =useState('');
    
    const validateLogin = () => {

        if (user === 'admin' && password === '11235813') {
            return "/main";
        }
    }

    return (
        <div className="loginContainer">
            <div className="loginFormContainer">
                <h1>Log In</h1>
                <form>
                    <input 
                        type="text" 
                        name="user" 
                        placeholder="Usuario" 
                        className="loginUser loginInputs"
                        onChange={
                            (e) => setUser(e.target.value)
                        } 
                        />
                    <input 
                        type="password" 
                        name="pass" 
                        placeholder="Contraseña" 
                        className="loginPass loginInputs" 
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                        />
                    <Link to={ validateLogin }>
                        <button className="loginButton">Ingresar</button>
                    </Link>
                    <div className="rememberContainer">
                        <label className="rememberText"><input type="checkbox" id="checkbox-2-1" className="rememberCheckbox" defaultChecked="checked" /> Recuerdame</label>                                     
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
/* <span className="rememberText">Remember me</span> */ 