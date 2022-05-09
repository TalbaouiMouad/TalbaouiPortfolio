import  React from "react";
import CVLT from "./CVLT";
import './header.css';
import img from "../../assets/img.jpg";
import HeaderSocials from "./headerSocials";

const Header =()=>{
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>TALBAOUI Mouad</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CVLT/>
                <HeaderSocials/>
                <div className="me">
                    <img src={img} alt="..."/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}
export default Header;