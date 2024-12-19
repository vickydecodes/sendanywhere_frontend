import React, { useContext, createContext, useState, useEffect } from "react";
import { getRequest, postRequest } from "../utils/ApiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../pages/components/Loading/Loading";

const ApiContext = createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {

  const port = import.meta.env.VITE_FRONTEND_PORT;
  const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
  const receiveUrl = import.meta.env.VITE_RECEIVE_URL;

  console.log(port)
  console.log(port + "/upload")

  const [loading, setLoading] = useState(false);

  const [code, setCode] = useState(null);
  const [formData, setFormData] = useState({
    file: null,
  });

  const [receiveData, setReceiveData] = useState({
    code: "",
  });

  const [file, setFile] = useState({
    fileUrl: "",
    originalName: "",
  });





  let name = formData.file?.name || "";

  ///RECEIVE PAGE FUNCTIONS

  const handleReceiveFile = (e) => {
    e.preventDefault();
    if (!receiveData.code) {
      toast.error("Please enter a code to receive the file.");
      return;
    }
    receiveFile(receiveData.code);
  };


  const handleDownload = () => {
    setLoading(true);
    try {
      if (file && file.originalName && file.fileUrl) {
        const link = document.createElement("a");
        link.href = file.fileUrl;
        link.download = file.originalName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("File or code is missing");
        toast.error("File or code is missing.");
      }
    } catch (e) {
      toast.error("Something Went Wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setReceiveData((prev) => ({
      ...prev,
      code: value,
    }));
  };

  const clearData = () => {
    setFormData({ file: null });
    setCode("")
    setReceiveData({code: ''})
    setFile({fileUrl: '', originalName: ''})
  };

  /////SEND PAGE FUNCTIONS

  const handleCopy = () => {
    try{
      if (code) {
        navigator.clipboard.writeText(code);
        toast.success('Code copied!.')
      }
    }catch(e){
      toast.error('Cannot copy code.')
    }

  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.file) {
      toast.error("Please select a file to send.");
      return;
    }
    sendFile(formData);
  };

  ////API FUNCTIONS

  const sendFile = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const form = new FormData();
      form.append("file", data.file);
      console.log({ form: form });
      const res = await postRequest(uploadUrl, form);
      setCode(res.code);
    } catch (e) {
      toast.error("Something Went Wrong.");
    } finally {
      setLoading(false);
    }
  };

  const receiveFile = async (receivedcode) => {
    setLoading(true);
    try {
      const res = await getRequest(
        `${receiveUrl}${receivedcode}`
      );
      setFile(res);
    } catch (error) {
      toast.error("Something Went Wrong.");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    sendFile,
    code,
    receiveFile,
    file,
    setCode,
    name,
    formData,
    handleFileInput,
    handleSubmit,
    clearData,
    handleInput,
    handleDownload,
    handleReceiveFile,
    handleCopy,
  };
  return (
    <ApiContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </ApiContext.Provider>
  );
}
