import './style.css'
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';


export const Posts = ()=>{
    const [photos, setPhotos] = useState([])
    const [album, setAlbum] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos') 
        .then(response => response.json())
        .then(json => {
            setPhotos(json)
            setLoading(false)
            
        })
        fetch('https://jsonplaceholder.typicode.com/albums') 
        .then(response => response.json())
        .then(json => {
            setAlbum(json)
        })
    },[]);
    
    return (
        <>
            <div className="body-post">
                <div className='corpo-posts' key={1}>
                    {loading ? <Loading/>: photos.map((a, i)=>{
                        if(i<100){
                            return( 
                                // <Card url={a.url}> {a.title} </Card>
                                <Card props={a} album={album[a.albumId]}/> 
                            )
                        }
                    })}
                </div>
            </div>
            <div className="footer-posts">	&#169; Copyright Ivo Biesdorf</div>
        </>
    );
}
        