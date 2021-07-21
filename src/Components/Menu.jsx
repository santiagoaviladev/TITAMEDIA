import React from 'react'
import {  Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const TitaMenu = props => {
    return (<div className="menu-container">
        <div className="desktop-menu">
        
            <Button classes={{ label: 'top-menu-btn' }} >All</Button>
            <Button classes={{ label: 'top-menu-btn' }} >Branding</Button>
            <Button classes={{ label: 'top-menu-btn' }} >Web</Button>
            <Button classes={{ label: 'top-menu-btn' }} >Potography</Button>
            <Button classes={{ label: 'top-menu-btn' }} >App</Button>
        </div>
        <div className="mobile-menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" >
  <MenuIcon></MenuIcon>
</Button>

        </div></div>
    )
}



export default TitaMenu
