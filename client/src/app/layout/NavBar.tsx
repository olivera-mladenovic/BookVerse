import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import './styles/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';

export default observer(function NavBar() {
    const navigate = useNavigate();
    const { accountStore } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Menu.Item header>
                <img src='/assets/logo.png'/>
                Bookverse
            </Menu.Item>
            <Menu.Item name='Book events'/>               
                <Menu.Menu position='right'>
                    <Button positive content='Logout' onClick={()=> {accountStore.logout(); navigate('/')}}/>
                </Menu.Menu> 
        </Menu>
    )
})