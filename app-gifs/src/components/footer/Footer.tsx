import React from 'react'
import '../footer/Footer.css';

export const Footer = () => {
    return (
        <>
            <footer className="container-fluid bg-light">
                <div className="row align-items-center">
                    <div className="col text-center">
                        <div className="row">
                            <div>
                                <img id="logo-java" src="../../../src/assets/react.svg" alt="" />
                            </div>
                            <div className="col align-self-center">
                                <div>
                                    <strong>Hecho con &#9829; por Rosyec</strong>
                                    <div>
                                        <small>© 2022 - Todos los derechos reservados </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
