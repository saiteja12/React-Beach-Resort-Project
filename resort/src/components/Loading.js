import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div className='loading'>
            <h6>Rooms data loading</h6>
            <img src={loadingGif} alt="loading" />  
        </div>
    )
}
