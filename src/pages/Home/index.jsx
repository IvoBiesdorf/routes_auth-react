import './style.css';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [result, setResult] = useState()
    useEffect(() => {
        const id = parseInt(Math.random() * 500);
        fetch('https://jsonplaceholder.typicode.com/comments/'+id) 
        .then(response => response.json())
        .then(json => {
            setResult(json)
        })
    },[]);

    return (
        <div className='corpo-home'>
            <h1>{result?.name} </h1>
            <h3>
                <Typewriter
                    options={{
                        strings: ['Text get from https://jsonplaceholder.typicode.com/', 'Images get from https://source.unsplash.com/1100x600/', result?.body],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h3>
        </div>
    );
};
