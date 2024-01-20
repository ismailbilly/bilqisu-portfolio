import  "./index.scss";
import React from 'react'
import Sidebar from "../Sidebar";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
    {/* <Sidebar /> */}
      <div className="side">
        <Sidebar /> 
        
    </div>
    <div className="page">
      
      <span className="tags top-tags">&lt;body&gt;</span>

      <Outlet />
      <span className="tags bottom-tags">
        &lt;/awesome&gt;
        <br />
        <span className="bottom-tag-html">&lt;/designs&gt;</span>
      </span>
    </div>
  </div>
  )
}

export default Layout