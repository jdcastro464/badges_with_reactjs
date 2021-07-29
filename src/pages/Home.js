import React from 'react'

import { Link } from 'react-router-dom'
import Estrellas from '../images/stars.svg'
import LogoConf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid d-flex align-items-center bg-dark" style={{ height: '90.5vh', backgroundImage: `url(${Estrellas})` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4 align-self-center">
                                <img src={LogoConf} alt="Logo Conf" className="img-fluid" />
                                <h1 className="text-light mt-2">Print your badges</h1>
                                <h4 className="text-light mt-2">The easiest way to manage your conference</h4>
                                <Link to="/badges" className="btn btn-primary shadow">
                                    Start now
                                </Link>
                            </div>
                            <div className="col-6">
                                <img src={astronauts} alt="Logo Conf" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Home