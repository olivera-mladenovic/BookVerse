import axios, { AxiosInstance } from "axios";
import { Event } from "../models";

export class EventClient {
    private client: AxiosInstance;

    constructor () {
        this.client = axios.create({
            baseURL : 'http://localhost:5000/api',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    }

    public async listEvents() {
        const resp = await this.client.get<Event[]>('/events');
        return resp.data;
    }

    public async getEvent(id: string) {
        const resp = await this.client.get<Event>(`/events/${id}`);
        return resp.data;
    }
}