import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import './styles/NavBar.css'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <Menu inverted fixed='top'>
            <Menu.Item header>
                <img src='/assets/logo.png'/>
                Bookverse
            </Menu.Item>
            <Menu.Item name='Book events'/>               
                <Menu.Menu position='right'>
                    <Button positive content='Logout' onClick={()=> navigate('/')}/>
                </Menu.Menu> 
        </Menu>
    )
}