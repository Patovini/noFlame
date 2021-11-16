import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/Land.css"
import "./css/menu.css"
import "./css/modal.css"

function Land() {
    const [ismodalopen, setismodalopen] = useState(false)
    return (

        <div className="Landpage">
            {
                ismodalopen && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopen(false)}>X</button>
                            </div>
                            <div className="modal-input">
                                <p className="titulomodal">Preencha os campos abaixo para terminar a denuncia </p>
                                <input className="inputT" type="text" placeholder="Local"></input><br></br>
                                <input className="inputT" type="text" placeholder="horario"></input><br></br>
                                <input className="inputT" type="textarea" placeholder="Estado da situação"></input>
                                <div class="btn btn-three">
                                    <span>Enviar </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }

            <nav id="menu">
                <ul>
                    <li><img src="https://static.wixstatic.com/media/0fbf32_0b8feca532354252b3d4dd49fbcaf095~mv2.gif" className="logoMenu" alt="logoMenu" /></li>
                    <li><Link to="/">Bem-vindo ao No Flames </Link></li>
                </ul>
            </nav>
            <div className="fundo1">
                <div class="outer">
                    <div class="mask">
                        <div class="ring" onClick={() => setismodalopen(true)}>

                        </div>
                    </div>
                </div>

                <h1 className="Name">
                    No Flames
                </h1>
                <h2 className="Frase">
                    Clique no botão acima para denunciar um incêndio!
                </h2>
            </div>

            <div className="slogan">
                <p>

                </p>
            </div>
            
            <div className="fall">
                <div className="about">
                    <p className="p-common"> Nosso projeto consiste em facilitar e
                     incentivar as pessoas a denunciarem quaisquer foco de incêndio! </p>
                    <p className="p-common"> Não se esqueça que a sua segurança deve ser prioridade, portanto deixe 
                    os bombeiros trabalharem, pois eles são profissionais e sabem lidar com este tipo de evento.
                     Se houver algum incêndio de grande proporção, as ambulâncias serão chamadas ao local, porém,
                     sempre informe possíveis ferimentos e pessoas que precisem de atendimento médico.</p>
                </div>
            </div>

        
    
    <div className="footer_container">
        <div className="footer_link">
            <div className="footer_links">
                <div className="footer_itens">
                    <h2>Sobre</h2>
                    <h1 className="txtfooter">No flame é um aplicativo para relatar incendio, em todo o Brasil </h1>
                </div>
                <div className="footer_itens">
                    <h2>Fale conosco</h2>
                    <h3>São Paulo - Brasil</h3>
                    <h3>noflames@hotmail.com</h3>
                    <h3>11902181518 </h3>
                </div>
            </div>
        </div>
        <div className="rodape">
            <h3>2021 &copy; No Flames </h3>
        </div>
    </div>
    </div >
    )
}

export default Land;