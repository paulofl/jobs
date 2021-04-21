import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Joboffers } from './imgs/job-offers.svg';
import './Us.css'


function Us(){
    return(
        <>
            <div className="main" id="about">
                <div className="main-container">
                    <div className="main-img-container">
                        <Joboffers width="30vw" height="15vw"></Joboffers>
                    </div>
                    <div className="main-content">
                        <h1>O que nós fazemos?</h1>
                        <h2>Nós ajudamos imigrantes a encontrar emprego aqui no Brasil.</h2>
                        <p>Contate-nos para saber mais</p>
                        <button className="main-btn"><Link to="/">Contate</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Us