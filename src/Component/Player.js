import React, { useState } from 'react'
import "../CSS/Player.css"
import SideBar from "./SideBar";
import Body from "./Body"
import Footer from './Footer';

function Player({spotify}) {

    return (
        <div className="player">
          
            <div className='player__body'>
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player
