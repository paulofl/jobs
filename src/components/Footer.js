import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre nós</h2>
                        <Link to="/sign-up">Como funciona</Link> <Link to="/">Depoimentos</Link>
                        <Link to="/">Carreiras</Link> <Link to="/">Termos de serviço</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contate</h2>
                        <Link to="/">Contatos</Link> <Link to="/">Suporte</Link>
                    </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" id="footer-logo">JOB's</Link>
                    </div>
                    <p className="website-rights">© JOB's 2021. All rights reserved</p>
                    <div className="social-icons">
                        <Link to="/" className="social-icon-link" target="_blank"
                        ><i className="fab fa-facebook"></i
                        ></Link>
                        <Link to="/" className="social-icon-link"
                        ><i className="fab fa-instagram"></i
                        ></Link>
                        <Link to="/" className="social-icon-link"
                        ><i className="fab fa-youtube"></i
                        ></Link>
                        <Link to="/" className="social-icon-link"
                        ><i className="fab fa-linkedin"></i
                        ></Link>
                        <Link to="/" className="social-icon-link"
                        ><i className="fab fa-twitter"></i
                        ></Link>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
