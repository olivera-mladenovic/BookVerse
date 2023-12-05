using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Events.Any()) return;

            var events = new List<Event>
            {
                new Event
                {
                    Name = "Past Event 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Event 2 months ago",
                    Type = "Book launch party",
                    City = "London",
                    Venue = "Pub",
                    Capacity = 10,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "Past Activity 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Type = "Author meet and greet",
                    City = "Paris",
                    Venue = "Louvre",
                    Capacity = 100,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "Future Activity 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Activity 1 month in future",
                    Type = "Literary Festival",
                    City = "London",
                    Venue = "Natural History Museum",
                    Capacity = 1000,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "Future Activity 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Activity 2 months in future",
                    Type = "Book club meeting",
                    City = "London",
                    Venue = "O2 Arena",
                    Capacity = 1000,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "DUPLICATE: Past Event 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Event 2 months ago",
                    Type = "Book launch party",
                    City = "London",
                    Venue = "Pub",
                    Capacity = 10,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "DUPLICATE: Past Activity 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Type = "Author meet and greet",
                    City = "Paris",
                    Venue = "Louvre",
                    Capacity = 100,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "DUPLICATE: Future Activity 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Activity 1 month in future",
                    Type = "Literary Festival",
                    City = "London",
                    Venue = "Natural History Museum",
                    Capacity = 1000,
                    SocialMediaLink = "https://www.google.com/",
                },
                new Event
                {
                    Name = "DUPLICATE: Future Activity 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Activity 2 months in future",
                    Type = "Book club meeting",
                    City = "London",
                    Venue = "O2 Arena",
                    Capacity = 1000,
                    SocialMediaLink = "https://www.google.com/",
                }
            };

            await context.Events.AddRangeAsync(events);
            await context.SaveChangesAsync();
        }
    }
}