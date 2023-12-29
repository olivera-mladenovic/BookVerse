
import { makeAutoObservable, runInAction } from "mobx";
import { Event, User } from "../models";
import { EventClient } from "../api";
import {v4 as uuid} from 'uuid';

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

    deleteEvent = async (id: string) => {
        await this.client.deleteEvent(id);
        runInAction(()=> {
            if (this.selectedEvent?.id === id) this.selectedEvent = undefined; 
            this.events = this.events.filter(e=> e.id !== id);
        })
    }

    updateAttendance = async(currentUser: User) => {
        await this.client.updateAttendance(this.selectedEvent!.id);
            runInAction(()=> {
                if (this.selectedEvent!.guests.map(g=> g.username).includes(currentUser.username)) {
                    this.selectedEvent!.guests = this.selectedEvent!.guests.filter(u=> u.username !== currentUser.username);
                } else {
                    this.selectedEvent!.guests.push(currentUser);
                }
            })
    }

    createEvent = async (event: Event) => {
        event.id = uuid();
        try {
            await this.client.createEvent(event);
        } catch(e) {
            console.log(e);
        }
    } 
}