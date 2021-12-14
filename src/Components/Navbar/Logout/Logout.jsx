import React from "react";
import './logout.css';

const Logout = (props) => {

    return (
        <div>
            <button id='logout' className='Logout' placeholder='Logout' onClick={props.clearLocalStorage}>Logout</button>
        </div>
    )
}

export default Logout;