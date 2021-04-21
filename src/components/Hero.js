import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Log } from './imgs/log.svg';
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="index" id="home">
                <div className="index-container">
                    <h1 className="index-heading">Encontre seu <span>emprego</span></h1>
                    <p className="index-description">Com a JOB's você pode encontrar um emprego aqui no Brasil.</p>
                </div>
                <div className="image index-container">
                    <Log width="30vw" height="15vw"></Log>               
                    <span className="index-description-right">Temos também cursos da língua Portuguesa.</span>
                    <button className="main-btn"><Link to="/">Explore</Link></button>
                </div>
            </div>
        </>
    )
}

export default Hero