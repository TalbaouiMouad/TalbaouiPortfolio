import  React from "react";
import cv from '../../assets/cv.pdf'


const CVLT =()=>{
    return(
        
            <div className="cvlt">
                <a href={cv} download className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
       
    )
}
export default CVLT;