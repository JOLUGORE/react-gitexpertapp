import React from 'react';
import { useFechGifs } from '../hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFechGifs( category );

    return (
        <>
            <h2 className="animate__animated animate__fadeIn"> { category } </h2> 

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
            
                {
                    images.map( ( img ) => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img } 
                    />
                    ))
                }  
            </div>
        </>
    )
}
