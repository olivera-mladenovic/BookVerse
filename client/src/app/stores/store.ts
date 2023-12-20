import { createContext, useContext } from "react";
import { EventStore } from "./eventStore";
import { AccountStore } from "./accountStore";

interface Store {
    eventStore: EventStore;
    accountStore: AccountStore;
}

export const store: Store = {
    eventStore: new EventStore(),
    accountStore: new AccountStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}