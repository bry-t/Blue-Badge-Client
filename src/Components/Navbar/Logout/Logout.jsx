import React from "react";
import './logout.css';

const Logout = (props) => {

    return (
        <div>
            <button id='logout' className='Logout' onClick={props.clearLocalStorage} style={{textAlign: "center"}}>Logout</button>
        </div>
    )
}

export default Logout;