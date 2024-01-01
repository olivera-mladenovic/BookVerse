import { User } from "."
export interface Event {
    id: string
    name: string
    description: string
    date: string
    city: string
    venue: string
    capacity: number
    socialMediaLink: string
    type: EventType
    guests: User[]
}

type EventType = 'Book club meeting' | 'Book launch party' | 'Literary Festival' | 'Author meet and greet';
