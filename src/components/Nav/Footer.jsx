import React from "react"
import './footer.css'
import {Link} from 'react-router-dom'


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div id='footerContainer'>
                <div className="footer">
                    <div className="Container">
                        <Link to='/aboutUs' className='link'>Sobre Nosotros</Link>
                    </div>
                    <div className="Container "> 
                        <div>
                            <h2 className="footerText">Contactanos:</h2>
                        </div>
                        <div className="emailContainer">
                            <img src='/assets/icons/mail.svg' alt='icono de mail' className="icon"/>
                            <a className="link" href='mailto:pfweb30bfrupo19@gmail.com'>pfweb30bfrupo19@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer