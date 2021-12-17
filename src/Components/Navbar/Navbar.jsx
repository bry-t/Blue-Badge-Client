import React from "react";
import './navbar.css'
import Logout from "./Logout/Logout";
import HealthPic from '../Assets/health-clubs-gyms-icon.png'

const Navbar = (props) => {

    return (
        <div>
            <nav style={{display: "flex", justifyContent: "center", height: "12vh", background: "#56876D"}}>
                <div style={{marginRight: "10em"}}><img src={HealthPic} alt="healthy lifestyle" style={{height: '65px', width: '65px', margin: '10px'}}/></div>
                <div style={{margrin: "1px 2px 1px 2px", display: "flex", justifyContent: "center"}}>
                    <h2>DAILY NUTRIENT TRACKER</h2>
                    {/* <span style={{marginLeft: '2em'}}>
                        <h2>Daily Total Cals: {props.totalkCal}</h2>
                    </span>
                    <span style={{marginLeft: '2em'}}>
                        <h2>Weekly Total: {props.totalkCal}</h2>
                    </span> */}
                </div>
                <br />
                <div style={{marginLeft: "20em",}}>
                    <Logout clearLocalStorage={props.clearLocalStorage} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;