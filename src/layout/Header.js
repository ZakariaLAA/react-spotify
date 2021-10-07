import React from 'react'
import "../CSS/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from '../DataLayer'

function Header() {
    const [{user},dispatch]=useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon className='header__icon'/>
                <input type="text"  className='header__input'
                placeholder="Search for Artist,songs..."/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="user" />
                <h4>{user?.display_name ? user?.display_name :"User Info" }</h4>
            </div>

        </div>
    )
}

export default Header
