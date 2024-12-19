import React from "react";
import { FaFile } from "react-icons/fa";
import "./SendFile.css";

export default function SendFile({handleFileInput, name}) {
  return (
      <label className="custum-file-upload" htmlFor="file">
        <div className="icon">
        <FaFile className="send_icon"/>
        </div>
        <div className="text">
          {name === '' ? 'Click to upload image' : (<span>{name}</span>)}
        </div>
        <input type="file" id="file" onChange={handleFileInput} />
      </label>
  );
}
