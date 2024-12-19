import React from "react";
import { useNavigate } from "react-router-dom";
import { LuSend } from "react-icons/lu";
import './Main.css'
import { RiFolderReceivedFill } from "react-icons/ri";

export default function Main() {


    const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`)
  };

  return (
    <div className="main_container d-flex flex-column">
        <h1 className="mb-5">Send Everywhere</h1>
        <div className="main_content">
       <h2>Want To Send Or Receive Files</h2>
         <div className="btns d-sm-flex flex-column flex-md-row justify-content-center align-items-center">
         <button onClick={() => handleNavigate('send')} className="send_btn"><LuSend className="icon" /></button>
         <button onClick={() => handleNavigate('receive')} className="receive_btn"><RiFolderReceivedFill className="icon"/></button>
         </div>
        </div>
    </div>
  );
}
