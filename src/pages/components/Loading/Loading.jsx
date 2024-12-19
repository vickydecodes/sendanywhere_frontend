import React from 'react';
import './Loading.css';
import loading from '../../../assets/animations/loading.json'
import Lottie  from 'lottie-react';

export default function Loading() {
  return (
    <div className='loading-container'>
       <div className="loading-component">
       <Lottie
        animationData={loading}
        loop={true}
        style={{width: 500, height: 500}}
        />
       </div>
    </div>
  )
}