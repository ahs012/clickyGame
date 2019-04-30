import React from 'react';
import './style.css'

function Header(props){
    return(
        <div className="container-fluid">
            <div className="jumbotron">
                <h1>Welcome to the Hollow Knight Clicky-Game!</h1>
                <hr></hr>
                <h2>{props.message}</h2>
                <h3>Score {props.score}| High Score {props.highScore}</h3>
            </div>
        </div>
    )
}

export default Header;