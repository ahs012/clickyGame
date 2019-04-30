import React from 'react';
import './style.css'

function Header(){
    return(
        <div className="container-fluid">
            <div className="jumbotron">
                <h1>Welcome to Clicky-Game!</h1> 
                <h3>Click on the Hollow Knight Characters to earn points, but don't click any of them twice or you LOSE!</h3>                
                <p>Good Luck Have Fun!</p> 
            </div>
        </div>
    )
}

export default Header;