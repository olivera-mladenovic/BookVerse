import axios, { AxiosInstance } from "axios";
import { Event } from "../models";
import { store } from "../stores";

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

        this.client.interceptors.request.use(config => {
            const token = store.accountStore.token;
            config.headers.Authorization = `Bearer ${token}`;
            return config;
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

    public async updateAttendance(id:string) {
        await this.client.post(`/events/${id}/attend`);
        return;
    }
}