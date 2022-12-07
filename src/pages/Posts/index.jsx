import './style.css'
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/Card';


export const Posts = ()=>{
    const [photos, setPhotos] = useState([])
    const [album, setAlbum] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos') 
        .then(response => response.json())
        .then(json => {
            setPhotos(json)
        })
    },[]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums') 
        .then(response => response.json())
        .then(json => {
            setAlbum(json)
        })
    },[]);
   
    
    return (
        <div className='corpo-posts'>
            {photos && photos.map((a, i)=>{
                return( 
                    // <Card url={a.url}> {a.title} </Card>
                    <Card props={a} album={album[a.albumId]}/> 
                )
            })}
        </div>
    );
}
        