

import './style.css';

export const Login = () => {
    return (
        <div className='form-login'>
            <h2>Login</h2>
            <form >
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <div>
                    <button type='button' 
                        onClick={()=>{
                            sessionStorage.setItem("user", "Usuario");
                            window.location.reload(false);
                        }}
                    >Login </button>
                </div>
            </form>
        </div>
    )
};
