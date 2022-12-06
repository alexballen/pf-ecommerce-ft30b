import React from "react"
import ReactDOM from 'react-dom'
import './offers&promos.css'

const messages = ['Vea "¿Usted es más listo que una celebridad?", los miercoles por FOX, ¡Así es! ahora tenenos anuncios mientras visitas paginas que estas programando', '¡Finlandia!', 'No patricio la mayonesa no es un instrumento... los rabanos picantes tampoco', '!Estaba soñando con Ricky!', "Hello Salem! my name is Winifred, what's your's?", 'Felipe no está está disponible ya que viajó a Cuzco y lo convirtieron en llama']

class OffersPromos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            const messageRan = messages[Math.floor(Math.random() * messages.length)]
            this.setState({
                message: messageRan
            })
        this.setState({
            show: true
        })
            setTimeout(() => {
                 this.setState({show: false})
            }, 30000)
        }, 60000);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.show && ReactDOM.createPortal(
                        <div id='carrousel'>
                            <p className="carrouselText">{this.state.message}</p>
                        </div>, document.querySelector('#portal')
                    )
               }
            </React.Fragment>
        )
    }
}


export default OffersPromos