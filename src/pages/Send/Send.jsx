import React, { useState } from "react";
import "./Send.css";
import { toast } from "react-toastify";
import { useApi } from "../../context/ApiContext";
import SendFile from "../components/SendFile/SendFile";

export default function Send() {
  const {
    code,
    handleFileInput,
    handleSubmit,
    clearData,
    formData,
    name,
    handleCopy,
  } = useApi();

  return (
    <div className="send_container">
      <div className="send_content text-center">
        <h1
          onClick={handleCopy}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          {code ? code : ""}
        </h1>{" "}
        <form onSubmit={handleSubmit}>
          <SendFile handleFileInput={handleFileInput} name={name} />
          <button type="submit">Send</button>
        </form>
        {formData.file ? <button onClick={clearData}>Clear</button> : ""}
      </div>
    </div>
  );
}
