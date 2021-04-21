import React, {useState} from 'react'
import { ReactComponent as SupportLogo } from './imgs/support.svg';
import { ReactComponent as Auth } from './imgs/authentication.svg';
import { ReactComponent as Password } from './imgs/password.svg';
import { ReactComponent as Privacy } from './imgs/privacy.svg';
import { ReactComponent as Business } from './imgs/business.svg';
import './Support.css'

function Support(){
    return(
        <>
            <div className="support">
                <h1>Suporte</h1>
                <div className="support-container">
                    <div><SupportLogo width="30vw"  height="30vh"></SupportLogo></div>
                    <div className="support-data">
                        <h2>Como podemos ajudar você <i class="far fa-question-circle"></i></h2>
                        <div className="support-cards">
                            <div className="support-card">
                                <p><strong>Configurações da conta</strong></p>
                                <Auth width="10vw" height="10vh"></Auth>
                                <span>Ajuste as configurações, gerencie as notificações, saiba mais sobre mudanças de nome e muito mais.</span>
                            </div>

                            <div className="support-card">
                                <p><strong>Login e senha</strong></p>
                                <Password width="10vw" height="10vh"></Password>
                                <span>Resolva os problemas de login ou senha, saiba como alterar ou redefinir sua senha e muito mais.</span>
                            </div>

                            <div className="support-card">
                                <p><strong>Privacidade e segurança</strong></p>
                                <Privacy width="10vw" height="10vh"></Privacy>
                                <span>Controle quem pode ver suas informações de perfil e adicione proteção extra à sua conta e muito mais.</span>
                            </div>

                            <div className="support-card">
                                <p><strong>Central de Ajuda para Empresas</strong></p>
                                <Business width="10vw" height="10vh"></Business>
                                <span>Está com algum problema nos dados da sua empresa ? Saiba como resolvê-los clicando aqui.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support