type EventType = 'Book club meeting' | 'Book launch party' | 'Literary Festival' | 'Author meet and greet';

type EventImages = {
  [key in EventType]: string;
};

export const Images: EventImages = {
  'Book club meeting': '/types/book-club.jpg',
  'Book launch party': '/types/book-launch.jpg',
  'Literary Festival': '/types/literary-festival.jpg',
  'Author meet and greet': '/types/meet-and-greet.png',
};