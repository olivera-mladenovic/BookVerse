import axios, { AxiosInstance } from "axios";
import { User } from "../models";

export class AccountClient {
    private client: AxiosInstance;

    constructor () {
        this.client = axios.create({
            baseURL : 'http://localhost:5000/api/account',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    }

    public async login(userValues: {email: string, password: string}): Promise<User> {
        const userResp = await this.client.post('/login', userValues);
        return userResp.data;
    }

    public async register(userValues: {email: string, password: string, username: string, displayName: string, about: string}): Promise<User> {
        const userResp = await this.client.post('/register', userValues);
        return userResp.data;
    }

    public async getMe():Promise<User> {
        const userResp = await this.client.get('/me');
        return userResp.data;
    }
}