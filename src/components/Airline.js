import React, { useState } from "react";

export default function Airline(props) {
    const [hoverMe, setHoverMe] = useState(false);
    const toggleHover = () => setHoverMe(!hoverMe);

    const logo = `https://kayak.com/${props.airline.logoURL}`;
    const { name, alliance, phone, site } = props.airline;
    const alliances = {
        OW: "One World",
        ST: "Sky Team",
        SA: "Star Alliance"
    };

    const AirlineNamePlusAcronym = (name) => {
        let result
        let splitWords = name.split(" ");
        if (splitWords.length > 1 && hoverMe) {
            let acronym = name.split(" ").map(word => word[0]).join("");
            result = `${name} (${acronym})`;
        } else {
            result = name;
        }
        return result;
    }

    const StandardizeAirlineSite = (site) => {
        const protocols = ["https:", "http"];
        let splitSite = site.split("/");
        let result;

        if (!protocols.includes(splitSite[0])) {
            result = splitSite.slice(0, 1).join("");
        } else {
            result = splitSite.slice(2, 3).join("");
        }

        let splitResult = result.split(".");

        if (splitResult.includes("www")) {
            let length = splitResult.length;
            result = splitResult.slice(1, length).join(".").toLowerCase();
        }

        return result;
    };

    let websiteAddress = StandardizeAirlineSite(site);

    return (
        <>
            {
                <div
                    className={hoverMe ? "hovered-airline-card" : "Airline-card"}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    onClick={() => window.open(`https://www.${websiteAddress}`, "")}
                >
                    <div>
                        <img
                            src={logo}
                            className={hoverMe ?
                                "hovered-airline-logo" :
                                "Airline-logo"}
                            alt="logo" />
                    </div>
                    <div className="Airline-details">
                        <div
                            className={hoverMe ?
                                "hovered-airline-name" :
                                "Airline-name"}
                        >
                            {AirlineNamePlusAcronym(name)}
                        </div>
                        <div
                            className={hoverMe ?
                                "hovered-airline-alliance" :
                                "hidden"}
                        >
                            {alliances[alliance]}
                        </div>
                        <div
                            className={hoverMe ?
                                "hovered-airline-phone" :
                                "hidden"}
                        >
                            {phone}
                        </div>
                        <div
                            className={hoverMe ?
                                "hovered-airline-url" :
                                "hidden"}
                        >
                            {websiteAddress}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
