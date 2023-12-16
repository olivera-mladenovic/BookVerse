import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores';
import { observer } from 'mobx-react-lite';

export default observer(function EventDetails() {
    const {eventStore} = useStore();
    const {selectedEvent} = eventStore;
    return (
        selectedEvent && <Card>
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
            {selectedEvent.capacity}  
        </Card.Content>
    </Card>
    )
})