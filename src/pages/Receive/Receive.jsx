import React from "react";
import { useApi } from "../../context/ApiContext";
import "./Receive.css";

export default function Receive() {
  const { file, handleInput, handleDownload, handleReceiveFile } = useApi();

  return (
    <div className="receive_container">
      <div className="receive_content">
        <form
          onSubmit={handleReceiveFile}
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <input
            type="text"
            name="code"
            onChange={handleInput}
            placeholder="Enter Code to Receive File"
            required
          />
          <button type="submit">Receive</button>
        </form>
        {file.fileUrl != "" ? (
          <button onClick={handleDownload}>Download {file.originalName}</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
