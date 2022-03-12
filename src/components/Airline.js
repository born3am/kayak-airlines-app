import React, { useState } from "react";

import "../style/Airline.scss"

export default function Airline(props) {

    const logo = `https://kayak.com/${props.airline.logoURL}`;
    const { name, alliance, phone, site } = props.airline;
    const alliances = {
        OW: "One World",
        ST: "Sky Team",
        SA: "Star Alliance"
    };

    // const renderAirlineName = (name) => {
    //     let words = name.split(" ");
    //     let result;
    //     if (words.length > 1 && hovering) {
    //         let abbreviation = words.map((word) => word[0]);
    //         result = name + ` (${abbreviation.join("")})`;
    //     } else {
    //         result = name;
    //     }
    //     return result;
    // };



    return (
        <>
            {
                <div className="Airline-card">
                    <div>
                        <img src={logo} className="Airline-logo" alt="logo" />
                    </div>
                    <div className="Airline-info">
                        <h3>{name}</h3>
                        <p>{alliances[alliance]}</p>
                    </div>
                </div>

            }

        </>
    )
}
