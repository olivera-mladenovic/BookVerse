import React, { useEffect } from "react";
import { Card, Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores";
import { observer } from "mobx-react-lite";
import './GuestList.css';

export default observer(function GuestList() {
    const {eventStore} = useStore();
  
    return (
        !!eventStore.selectedEvent?.guests.length  && 
            <Segment floated="right">
                <Card>
            <Header content='People going' textAlign="center" className="header"/>
            <Item.Group divided>
                {eventStore.selectedEvent!.guests.map(g => (
                    <Item key={g.username}>
                        <Item.Content>                          
                            <Item.Meta className="name">{g.displayName}</Item.Meta>                            
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            </Card>
            </Segment>
       
    )
})