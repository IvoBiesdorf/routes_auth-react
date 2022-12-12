import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import './style.css';

export const Users = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json())
        .then(json => {
            setResult(json)
            setLoading(false)
        })
    },[]);

    return(
        <div className='container-users'>
            <div className="row-title">
                <div className="idd">Id</div>
                <div className="name">Nome</div>
                <div className="username">Username</div>
                <div className="email">E-mail</div>
            </div>
        
        {loading ? <Loading/> : result.map((a, i)=>{
            return( 
                <Link to={"/user/"+a.id}>
                    <div key={i} className="row">
                        <div className="idd ">{a.id} </div>
                        <div className="name">{a.name}   </div>
                        <div className="username">{a.username}  </div>
                        <div className="email">{a.email}   </div>     
                    </div>
                </Link>
            )
        })}
    </div>
    )
};
