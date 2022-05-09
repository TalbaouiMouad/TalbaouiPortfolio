import  React from "react";
import './portfolio.css';
import randomuser from '../../assets/randomuser.PNG';
import quote from '../../assets/quote.PNG';
import BackgroundGenerator from '../../assets/BackgroundGenerator.PNG';
import shopping from '../../assets/shopping.PNG'
import boot from '../../assets/boot.PNG'

const Portfolio =()=>{
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Protfolio</h2>
            <div className="container portfolio_container">
                <article className="prtfolio_item">
                    <div className="portfolio_item-image">
                         <img src={randomuser} alt="..."/>
                    </div>
                    <h3>Random Users</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/TalbaouiMouad/random-users" className="btn" target="blank">Github</a>
                    <a href="https://talbaouimouad.github.io/random-users/" className="btn btn-primary" target="blank">Live Demo</a>
                    </div>
                </article>
                <article className="prtfolio_item">
                    <div className="portfolio_item-image">
                         <img src={quote} alt="..."/>
                    </div>
                    <h3>QuotesGenerator</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/TalbaouiMouad/quotegenerator" className="btn" target="blank">Github</a>
                    <a href="https://talbaouimouad.github.io/quotegenerator/" className="btn btn-primary" target="blank">Live Demo</a>
                    </div>
                </article>
                <article className="prtfolio_item">
                    <div className="portfolio_item-image">
                         <img src={BackgroundGenerator} alt="..."/>
                    </div>
                    <h3>Background generator</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/TalbaouiMouad/backgroundgenerator" className="btn" target="blank">Github</a>
                    <a href="https://talbaouimouad.github.io/backgroundgenerator/" className="btn btn-primary" target="blank">Live Demo</a>
                    </div>
                </article>
                <article className="prtfolio_item">
                    <div className="portfolio_item-image">
                         <img src={shopping} alt="..."/>
                    </div>
                    <h3>Shopping List</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/TalbaouiMouad/shopping_list" className="btn" target="blank">Github</a>
                    <a href="http:github.com" className="btn btn-primary" target="blank">Live Demo</a>
                    </div>
                </article>
                <article className="prtfolio_item">
                    <div className="portfolio_item-image">
                         <img src={boot} alt="..."/>
                    </div>
                    <h3>Bootstrap Project</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/TalbaouiMouad/bootstrapmaquette1" className="btn" target="blank">Github</a>
                    <a href=" https://talbaouimouad.github.io/bootstrapmaquette1/" className="btn btn-primary" target="blank">Live Demo</a>
                    </div>
                </article>
               
                
            </div>
        </section>
    )
}
export default Portfolio;