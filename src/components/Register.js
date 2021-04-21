import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Log } from './imgs/log.svg';
import { ReactComponent as RegisterImg } from './imgs/register.svg';
import './Register.css'

function Register() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className={`container ${isActive ? 'sign-up-mode': ""}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form">
                            <h2 className="title">Entrar</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Usuário" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
                            </div>
                            <input type="submit" value="Entrar" className="btn solid" />

                            <p className="social-text">Ou entre com outra plataforma</p>
                            <div className="social-media">
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">Cadastre-se</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Usuário" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
                            </div>
                            <input type="submit" value="Cadastrar" className="btn solid" />

                            <p className="social-text">Ou cadastre-se com outra plataforma</p>
                            <div className="social-media">
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link to='/' className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Novo aqui ?</h3>
                            <p>Faça seu cadastro na JOB's e construa sua história com a gente.</p>
                            <button className="btn transparent" onClick={toggleClass}>Cadastre-se</button>
                        </div>

                            {/* <Log width="50vw"></Log> */}
                </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>É um de nós ?</h3>
                            <p>Faça login com seus dados de acesso.
                            </p>
                            <button className="btn transparent" onClick={toggleClass}>Entrar</button>
                        </div>

                        {/* <RegisterImg width="50vw"></RegisterImg> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register