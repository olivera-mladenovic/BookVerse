import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import './styles/NavBar.css'

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Menu.Item header>
                <img src='/assets/logo.png'/>
                Bookverse
            </Menu.Item>
            <Menu.Item name='Book events'/>               
                <Menu.Item>
                    <Button positive content='Create book event'/>
                </Menu.Item> 
        </Menu>
    )
}