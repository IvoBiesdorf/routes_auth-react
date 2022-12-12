import './style.css';

export const Login = () => {
    return (
        <form>
            <label>
            <p>Username</p>
            <input type="text" />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <button type='button' onClick={()=>{sessionStorage.setItem("user", "Usuario");}}>Submit</button>
            </div>
        </form>
    )
};
