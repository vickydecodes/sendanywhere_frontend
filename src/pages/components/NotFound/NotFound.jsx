import React from "react";
import { Link } from "react-router-dom";
import Lottie  from 'lottie-react';
import './NotFound.css'
import notfound from '../../../assets/animations/notfound.json'
export default function NotFound() {
  return (
    <>
        <div className="notfound_page" >
          <Lottie
            animationData={notfound}
            loop={true}
    className="notfound_animation"
    />
    
    <div className="d-flex">
    <Link to="/" className="btn">Go back to Home</Link>
    
    </div>
    
        </div>
    </>
  );
}
