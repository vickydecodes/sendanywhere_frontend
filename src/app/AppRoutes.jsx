import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Receive from "../pages/Receive/Receive";
import NotFound from "../pages/components/NotFound/NotFound";
import { ApiProvider } from "../context/ApiContext";
import Send from "../pages/Send/Send";

export default function AppRoutes() {
  return (
    <ApiProvider>
      <Routes>
        <Route path='/receive' element={<Receive/>}/>
        <Route path='/send' element={<Send/>}/>
        <Route path="/" element={<Main />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </ApiProvider>
  );
}
