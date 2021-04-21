import React, {useState} from 'react'
import { ReactComponent as Male } from './imgs/male-avatar.svg';
import { ReactComponent as Female } from './imgs/female-avatar.svg';
import { ReactComponent as Profile } from './imgs/profile-pic.svg';
import './Depoiments.css'

function Depoiments(){
    return(
        <>
            <div className="depositions" id="depositions">
                <h1>Depoimentos</h1>
                <div className="depositions-wrapper">
                    <div className="depositions-card">
                        <h2>Jorge Fulano</h2>
                        <Male width="10vw"></Male>
                        <p>Assist. Administrativo</p>
                        <div className="depositions-text"><span>A JOB's me ajudou a encontrar o meu emprego no Brasil</span></div>
                    </div>
                    <div className="depositions-card">
                        <h2>Maria da Silva</h2>
                        <Female width="10vw"></Female>
                        <p>Enfermeira</p>
                        <div className="depositions-text"><span>Graças a JOB's entrei na carreira que sempre sonhei !</span></div>
                    </div>
                    <div className="depositions-card">
                        <h2>José Pereira</h2>
                        <Profile width="10vw"></Profile>
                        <p>Pintor</p>
                        <div className="depositions-text"><span>Indico a JOB's ! Plataforma excelente.</span></div>
                    </div>
                    <div className="depositions-card">
                        <h2>Selma Junqueira</h2>
                        <Female width="10vw"></Female>
                        <p>Professora</p>
                        <div className="depositions-text"><span>Plataforma de simples e intuitiva.</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Depoiments