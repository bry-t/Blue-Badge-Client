import React from "react";
import './navbar.css'
import Logout from "./Logout/Logout";
import HealthPic from '../Assets/health-clubs-gyms-icon.png'

const Navbar = (props) => {


    return (
        <div>
            <nav>
                <img src={HealthPic} alt="healthy lifestyle" style={{height: '50px', width: '50px', margin: '10px'}}/>
                <div className='titles' style={{display: 'flex', justifyContent: 'space-around'}}>
                    <span style={{marginLeft: '2em'}}>
                        <h2>Running Daily Total: /*Cals*/</h2>
                    </span>
                    <span style={{marginLeft: '2em'}}>
                        <h2>Weekly Total: /*Wk cals*/</h2>
                    </span>
                </div>
                <br />
                <Logout clearLocalStorage={props.clearLocalStorage} />
            </nav>
        </div>
    )
}

export default Navbar;