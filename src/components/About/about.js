import React, { Component } from "react";
import "../Home/home.scss";


export default class About extends 
Component {

    render() {

        return (
            <div className="grid-home">
                <div className="info-section">
                    <div className="header">City Tours  </div>
                    <div className="header-pro">
                        INTEGRANTES
                    </div>
                    <div className="info-tours">
                    <h3>Steven Bombon</h3>
                    <h3>Brandon Jaramillo</h3>
                    <h3>Luis Loachamin</h3>
                    </div>
                </div>  
                <div className="logo-section">
                    <div className="img-section">
                     <img src="./img/logo-page.jpg"></img>
                    </div>
                    
                </div>             
             </div>
        );
      }
}