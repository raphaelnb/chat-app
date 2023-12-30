import './onboard.css'
import logo from '../assets/chat-logo.svg'

function Onboard() {
    return (
        <div id="main">
            <div className="left-panel">
                <img src={logo} alt="chat-logo" />
                <h1>Chat anywhere with anyone</h1>
                <button>Get Started</button>
            </div>
            <div className="right-panel">

            </div>
        </div>
    )
}

export default Onboard