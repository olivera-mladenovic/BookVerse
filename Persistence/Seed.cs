using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            var usersE = userManager.Users.ToList();
            if (!userManager.Users.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        DisplayName = "test user",
                        UserName = "username",
                        Email= "test@example.com",
                        About = "about me"
                    },
                    new User
                    {
                        DisplayName = "admin",
                        UserName = "username1",
                        Email= "admin@example.com",
                        About = "about me"
                    }
                };

                foreach (var user in users)
                {
                    var result = await userManager.CreateAsync(user, "Password!");
                    Console.WriteLine(result);
                }
            }

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