import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/"><i className="fa fa-home"></i> Home</Link>
        </li>
        <li>
          <Link to="/users"><i className="fa fa-users" aria-hidden="true"></i> Users </Link>
        </li>
        <li>
          <Link to="/posts"><i className="fa fa-address-card-o" aria-hidden="true"></i> Posts</Link>
        </li>
        <li onClick={()=>{sessionStorage.setItem("user", "");}}>
          Sair
        </li>
        {/* <li>
          <Link to="/redirect">Redirect</Link>
        </li> */}
      </ul>
    </nav>
  );
};
