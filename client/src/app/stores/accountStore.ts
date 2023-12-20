import { makeAutoObservable, reaction, runInAction } from "mobx";
import { User } from "../models";
import { AccountClient } from "../api/accountClient";

export class AccountStore {
    user: User | null = null;
    token: string | undefined = undefined;
    client: AccountClient;
    
    constructor() {
        makeAutoObservable(this);
        this.client = new AccountClient();
        reaction(
            () => this.token,
            token => {
                if (token) {
                    localStorage.setItem('token', token)
                } else {
                    localStorage.removeItem('token')
                }
            }
        )
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: {email: string, password: string}) => {
            const user = await this.client.login(creds);
            runInAction(() => {this.user = user; this.token = user.token});
    }

    logout = () => {
        this.token = undefined;
        this.user = null;
    }
}