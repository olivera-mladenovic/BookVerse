
import { makeAutoObservable } from "mobx";
import { Event } from "../models";

import { EventClient } from "../api";

export class EventStore {
    client: EventClient;
    events: Event[] = [];
    selectedEvent: Event | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
        this.client = new EventClient();
    }

    loadEvents = async () => {
        try {
            this.events = await this.client.listEvents();
        } catch (e) {
            console.log(e);
        }
    }

    selectEvent = (id:string) => {
        this.selectedEvent = this.events.find(e => e.id === id);
    }
}