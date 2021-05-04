import React from 'react'
import "./CardProject.css";

function CardProject() {
    return (
        <div className="cardContainer">
            <div className="box">
                <span></span>
                <div className="cardContent">
                    <h2>Projet 1</h2>
                    <img src="https://s3.gaming-cdn.com/images/products/3875/orig/project-winter-cover.jpg" style={{maxHeight: '250px', maxWidth: '250px'}} alt=""/><br />
                    <a href="#">Voir</a>
                </div>
            </div>
            <div className="box">
                <span></span>
                <div className="cardContent">
                    <h2>Projet 1</h2>
                    <img src="https://s2.gaming-cdn.com/images/products/3250/orig/project-hospital-cover.jpg" style={{maxHeight: '250px', maxWidth: '250px'}} alt=""/><br />
                    <a href="#">Voir</a>
                </div>
            </div>
            <div className="box">
                <span></span>
                <div className="cardContent">
                    <h2>Projet 1</h2>
                    <img src="https://www.nautiljon.com/images/anime/00/82/project_scard_praeter_no_kizu_9728.jpg" style={{maxHeight: '250px', maxWidth: '250px'}} alt=""/><br />
                    <a href="#">Voir</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject
