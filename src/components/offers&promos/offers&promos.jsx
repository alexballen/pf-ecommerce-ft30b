import React from "react"
import ReactDOM from 'react-dom'
import './offers&promos.css'
import axios from 'axios'


let messages = []


async function getMessages() {
    try {
        const allmessages = await axios.get("/message")
        messages = allmessages.data

    } catch (error) {
        throw new Error(error)
    }
}
class OffersPromos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            message: '',
            width: this.getWindowsize()
        }
    }

    getWindowsize() {
        const {innerWidth} = window;
        return innerWidth
    }

    handleWindowrezise() {
        this.setState({width: this.getWindowSize()})
    }
    

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowrezise)
        setInterval(async () => {
           try {
              await getMessages()
               const messagefororder = messages[Math.floor(Math.random()*messages.length)].message
                this.setState({
                    message: messagefororder
                })
                this.setState({
                    show: true
                })
                setTimeout(() => {
                    this.setState({ show: false})
                }, this.state.width < 600 ? 30500: 50500)
            
            } catch (error) {
                throw new Error(error)
            }   
        }, this.state.width < 600 ? 60000 : 100000);
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