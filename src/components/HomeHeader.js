import React from "react";
import "../scss/_header.scss";
import homeHeroImage from "../assets/images/Home-Hero-Image.jpg";
import decoration from "../assets/images/Decoration.svg";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll"

export default function HomeHeader() {
    return (
        <>
            <div className="container">
                <header className="header" id="start">
                    <img className="header_img" src={homeHeroImage} alt="home background"/>
                    <div className="header_content">
                        <div className="menu">
                            <div className="menu_top">
                               <Link to="/Login">Zaloguj</Link>
                               <Link to="/Register">Załóż konto</Link>
                            </div>
                            <ul className="menu_bottom">
                                <li><ScrollLink to="start" spy={true} smooth={true} offset={-100} duration={500}>Start</ScrollLink></li>
                                <li><ScrollLink to="what" spy={true} smooth={true} offset={-100} duration={500}>O co chodzi?</ScrollLink></li>
                                <li><ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}>O nas</ScrollLink></li>
                                <li><ScrollLink to="organization" spy={true} smooth={true} offset={-100} duration={500}>Fundacja i organizacje</ScrollLink></li>
                                <li><ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}>Kontakt</ScrollLink></li>
                            </ul>
                        </div>
                        <div className="text">
                            <p className="text_title">Zacznij pomagać!</p>
                            <p className="text_title"> Oddaj niechciane rzeczy w zaufane ręce</p>
                            <img src={decoration} alt="decoration" className="text_decoration"/>
                            <div className="text_buttons">
                                <Link to="/Login" className="button button_one"><p>Oddaj</p><p>rzeczy</p></Link>
                                <Link to="/Login" className="button"><p>Zorganizuj</p> <p>zbiórkę</p></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}