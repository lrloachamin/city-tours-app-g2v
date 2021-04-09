import React, { Component } from "react";
import "./home.scss";


export default class Home extends 
Component {

    render() {

        return (
            <div className="grid-home">
                <div className="info-section">
                    <div className="header">City Tours</div>
                    <div className="header-pro">
                        TOP SELLING TRAVEL ITEM ON THEMEFOREST
                    </div>
                    <div className="info-tours">
                    <h3>Guaranteed Departures</h3>
                    <h3>+3000 Sales</h3>
                    <h3>Find the best deals</h3>
                    <button className="btn-tours">Mas Información</button>
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