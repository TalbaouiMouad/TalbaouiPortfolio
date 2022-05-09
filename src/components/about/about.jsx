import  React from "react";
import './about.css'
import img from "../../assets/img.jpg";

const About =()=>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container ">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={img} alt="AboutImage"/>
                </div>
            </div>
            <div className="about_content">
                <p>Je suis développeur web front-end. Maintenant, je suis dans une formation Full Stack à la 3W Academy. Je suis passionné par le codage et la résolution de problèmes par le biais du code, et je suis ravi de travailler aux côtés d'autres programmeurs incroyables et d'en apprendre bien plus !</p>
                <a href='#contact' className="btn btn-primary">Let's Talk</a>
            </div>
            </div>
            
            

        </section>
    )
}
export default About;