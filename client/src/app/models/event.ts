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
    type: string
    guests: User[]
  }