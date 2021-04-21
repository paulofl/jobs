import React from 'react'
import { ReactComponent as Logo } from './imgs/bio.svg';
import './Companies.css'

function Companies(){
    return(
        <>
            <div className="companies">
                <h1>Empresas</h1>
                <div className="companies-container">
                    <div className="company-img"><Logo width="8vw" height="13vh"></Logo></div>
                    <div className="company-data">
                        <h2>Empresa XYZ</h2>
                        <p>Empresa de pequeno porte do ramo de agronomia</p>
                        <p>Endereço: abcdefg, 10, Belo Horizonte</p>
                        <p>Vagas: <span>5</span></p>
                    </div>
                </div>

                <div className="companies-container">
                    <div className="company-img"><Logo width="8vw" height="13vh"></Logo></div>
                    <div className="company-data">
                        <h2>Empresa XYZ</h2>
                        <p>Empresa de pequeno porte do ramo de agronomia</p>
                        <p>Endereço: abcdefg, 10, Belo Horizonte</p>
                        <p>Vagas: <span>6</span></p>
                    </div>
                </div>

                <div className="companies-container">
                    <div className="company-img"><Logo width="8vw" height="13vh"></Logo></div>
                    <div className="company-data">
                        <h2>Empresa XYZ</h2>
                        <p>Empresa de pequeno porte do ramo de agronomia</p>
                        <p>Endereço: abcdefg, 10, Belo Horizonte</p>
                        <p>Vagas: <span>13</span></p>
                    </div>
                </div>

                <div className="companies-container">
                    <div className="company-img"><Logo width="8vw" height="13vh"></Logo></div>
                    <div className="company-data">
                        <h2>Empresa XYZ</h2>
                        <p>Empresa de pequeno porte do ramo de agronomia</p>
                        <p>Endereço: abcdefg, 10, Belo Horizonte</p>
                        <p>Vagas: <span>20</span></p>
                    </div>
                </div>

                <div className="companies-container">
                    <div className="company-img"><Logo width="8vw" height="13vh"></Logo></div>
                    <div className="company-data">
                        <h2>Empresa XYZ</h2>
                        <p>Empresa de pequeno porte do ramo de agronomia</p>
                        <p>Endereço: abcdefg, 10, Belo Horizonte</p>
                        <p>Vagas: <span>32</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies