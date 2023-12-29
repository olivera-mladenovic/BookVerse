import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import {EventList} from '../list';
import { EventDetails } from '../details';
import GuestList from '../guests/GuestList';
import { useNavigate } from 'react-router-dom';


export default function EventPanel() {
    const navigate = useNavigate();

    return (
        <Grid>
            <Grid.Column width='10'>
            
                <div style={{width: "100%", height: 50}}>
                    <Button fluid content="Create new event" onClick={()=> navigate('/create-event')} positive/>
                </div>   
                <EventList/>
            
            </Grid.Column>
            <Grid.Column width="6">
                <div>
                <EventDetails/>
                <GuestList/>
                </div>
            </Grid.Column>
        </Grid>
    )
}