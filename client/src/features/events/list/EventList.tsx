import React, { useEffect } from "react";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores";
import { observer } from "mobx-react-lite";

export default observer(function EventList() {
    const {eventStore} = useStore();
    

    useEffect(()=> {
        eventStore.loadEvents();
    }, [eventStore])
   
    return (
        <Segment>
            <Item.Group divided>
                {eventStore.events.map(e => (
                    <Item key={e.id}>
                        <Item.Content>
                            <Item.Header as='a'>{e.name}</Item.Header>
                            <Item.Meta>{e.date}</Item.Meta>
                            <Item.Description>
                                    <div>{e.description}</div>
                                    <div>{e.city}, {e.venue}</div>
                                    <div><Icon name="paperclip"/>{e.socialMediaLink}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated="right" content='View' color="brown" circular onClick={()=>eventStore.selectEvent(e.id)}/>
                                <Button floated="right" content='Delete' color="red" circular onClick={()=>eventStore.deleteEvent(e.id)}/>
                                <Label basic content={e.type} active color="brown" icon="book" circular/>
                            </Item.Extra>

                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})