import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import OrangeMainSt from "./OrangeMain.module.css";
class OrangeMain extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={OrangeMainSt.orange_main}>
        <div className={OrangeMainSt.main_inner}>

        </div>
      </div>
      </>
    );
  }
}

export default OrangeMain;