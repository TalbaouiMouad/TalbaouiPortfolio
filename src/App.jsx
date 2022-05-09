import  React from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

const App =()=>{
    return(
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}
export default App;