import React from 'react';
import { Grid } from 'semantic-ui-react';
import {EventList} from '../list';
import { EventDetails } from '../details';


export default function EventPanel() {

    return (
        <Grid>
            <Grid.Column width='10'>
                <EventList/>
            </Grid.Column>
            <Grid.Column width="6">
                <EventDetails/>
            </Grid.Column>
        </Grid>
    )
}