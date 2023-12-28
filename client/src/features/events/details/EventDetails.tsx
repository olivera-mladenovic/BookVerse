import React, { useEffect, useState } from 'react';
import { Button, Card, Icon, Image, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores';
import { observer } from 'mobx-react-lite';

export default observer(function EventDetails() {
    const {eventStore, accountStore} = useStore();
    const {selectedEvent} = eventStore;

    const amIGoing = (): boolean | undefined => {
        return selectedEvent?.guests.map(g=> g.username).includes(accountStore.user!.username);
    }

    const buttonText = amIGoing() ? 'Cancel attendance' : 'Attend'

    return (
        selectedEvent && <div>
            <Segment floated='right'>
            <Card>
        <Image src='/assets/logo.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header>{selectedEvent.name}</Card.Header>
            <Card.Meta>
            <span className='date'>{selectedEvent.date}</span>
            </Card.Meta>
            <Card.Description>
            {selectedEvent.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra> 
            <Icon name='user' />
            {selectedEvent.guests.length}  
        </Card.Content>
        <Button positive content={buttonText} onClick={()=> {eventStore.updateAttendance(accountStore.user!)}}/>
        </Card>
            </Segment>
    </div>
    
    )
})