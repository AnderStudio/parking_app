// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

class MapPage extends Component {
    
    handleClick = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[1]}`);
    };
    handleClickA = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[0]}`);
    };
    handleClickB = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[1]}`);
    };
    handleClickC = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[2]}`);
    };
    handleClickD = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[3]}`);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClickA}>
                    Go to Parking Lot A
                </button>
                <button onClick={this.handleClickB}>
                    Go to Parking Lot B
                </button>
                <button onClick={this.handleClickC}>
                    Go to Parking Lot C
                </button>
                <button onClick={this.handleClickD}>
                    Go to Parking Lot D
                </button>
            </div>
            
        );
    }
}

export default MapPage;
