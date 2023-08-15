import React from "react";
import decoration from "../assets/images/Decoration.svg";
import shirt from "../assets/images/Icon-1.svg";
import bag from "../assets/images/Icon-2.svg";
import magnifier from "../assets/images/Icon-3.svg";
import arrows from "../assets/images/Icon-4.svg";
import {Link} from "react-router-dom";

export default function FourSteps() {
    return (
        <>
            <div className="fourSteps_container" id="what">
                <div className="fourSteps_title">
                    <p className="title_text">Wystarczą 4 proste kroki</p>
                    <img src={decoration} alt="decoration" className="text_decoration"/>
                </div>
                <div className="fourSteps_content">
                    <div className="fourSteps_content-columns">
                      <div className="fourSteps_content-column">
                        <img src={shirt} alt="shirt" className="column_shirt"/>
                        <p className="column_title">Wybierz rzeczy</p>
                        <p className="column_text">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="fourSteps_content-column">
                        <img src={bag} alt="bag" className="column_bag"/>
                        <p className="column_title">Spakuj je</p>
                        <p className="column_text">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="fourSteps_content-column">
                        <img src={magnifier} alt="magnifier" className="column_magnifier"/>
                        <p className="column_title">Zaufaj komu chcesz pomóc</p>
                        <p className="column_text">wybierz zaufane miejsce</p>
                    </div>
                    <div className="fourSteps_content-column">
                        <img src={arrows} alt="arrows" className="column_arrows"/>
                        <p className="column_title">Zamów kuriera</p>
                        <p className="column_text">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                    </div>
                </div>
                <Link to="/Login" className="fourSteps_button">
                    <p>Oddaj</p>
                    <p>Rzeczy</p>
                </Link>
            </div>
        </>
    );
}