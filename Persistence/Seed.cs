using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            
           if (!userManager.Users.Any() && !context.Events.Any())
            {
                    var users = new List<User>
                {
                    new User
                    {
                        DisplayName = "Petar Petrovic",
                        UserName = "perica",
                        Email= "perica@example.com",
                        About = "Book and history lover."
                    },
                    new User
                    {
                        DisplayName = "Marko Markovic",
                        UserName = "marko",
                        Email= "marko@example.com",
                        About = "Love walking and discussing about literature."
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Password!");
                }

                var events = new List<Event>
            {
                new Event
                {
                    Name = "Promotion of the book 'Rudnik' by Miodrag Majic",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Discussion about launching new book. Filip David will be guest, fragments will be read by Branislav Trifunovic.",
                    Type = "Book launch party",
                    City = "Belgrade",
                    Venue = "Dvorana Kulturnog Centra",
                    Capacity = 100,
                    SocialMediaLink = "https://www.vulkani.rs/aktuelnosti/2996-promocija-knjige-rudnik-proslavljenog-autora-miodraga-majica",
                    Guests = users
                },
                new Event
                {
                    Name = "Istinoceznja and Slobodan Damjanov in 'Galerija' caffee",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "You are called to enjoy your favourite coffee with delight of spending time with your favourite author, who will discuss his latest book 'Istinoceznja'.",
                    Type = "Author meet and greet",
                    City = "Pancevo",
                    Venue = "Galerija",
                    Capacity = 80,
                    SocialMediaLink = "https://www.k-013.com/news/kultivator/pancevo-objavljena-istinoceznja-autora-slobodana-rore-damjanova.html",
                },
                new Event
                {
                    Name = "67. International Book Fair",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Walk aroung thousands of books, spend time with your favourite authors and publishers.",
                    Type = "Literary Festival",
                    City = "Belgrade",
                    Venue = "Sajam",
                    Capacity = 10000,
                    SocialMediaLink = "https://sajam.rs/sr/%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80-2023/%D1%81%D0%B0%D1%98%D0%B0%D0%BC-%D0%BA%D1%9A%D0%B8%D0%B3%D0%B0/",
                },
                new Event
                {
                    Name = "Discussion about classic literature",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Come and hear why the classic are considered as a must read books in life. Understand their importance in literature development.",
                    Type = "Book club meeting",
                    City = "Belgrade",
                    Venue = "Language workshop center",
                    Capacity = 10,
                    SocialMediaLink = "https://www.languageworkshopcentar.com/knjizevni-klub-beograd/",
                },
                new Event
                {
                    Name = "Promotion the autobiography by Dusan Ivkovic - My cross, my story ",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Aleksandar Miletic, the publisher who edited the book, is a special guest. Zeljko Obradovic, basketball coach and Predrag Danilovic, former basketball player, will be speaking about the autobiography.",
                    Type = "Book launch party",
                    City = "Belgrade",
                    Venue = "Miljenko Dereta space",
                    Capacity = 120,
                    SocialMediaLink = "https://www.vulkani.rs/aktuelnosti/3997-promocija-knjige-o-dudi-ivkovicu-moj-krst-moja-prica-aleksandra-miletica",
                },
                new Event
                {
                    Name = "Meet up with a poet Rusomir Arsic",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "This meeting is intended for kids who don't want the joy of reading a book to vanish in the world of technology.",
                    Type = "Author meet and greet",
                    City = "Blace",
                    Venue = "Stojan Novakovic elementary school",
                    Capacity = 50,
                    SocialMediaLink = "https://toplickevesti.com/druzenje-sa-pesnikom-povodom-oktobra-meseca-knjige.html",
                },
                new Event
                {
                    Name = "NOFEK - Book festival in Novi Sad",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "\r\nThe Novi Sad Book Festival - NOFEK represents a unique space for the promotion and affirmation of young people. Expanding the audience and reception of contemporary literary creativity, as well as the promotion of young authors, are the goals of the Novi Sad Book Festival.",
                    Type = "Literary Festival",
                    City = "Novi Sad",
                    Venue = "Kulturni centar",
                    Capacity = 1500,
                    SocialMediaLink = "https://www.facebook.com/nofek1?locale=sr_RS",
                },
                new Event
                {
                    Name = "Ecounter of the members - Pokret treceg doba Srbije",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "\r\nThe main goals and tasks of the Literary Club are: encouraging, affirming, promoting and nurturing the literary creativity of members of the third era of Serbia; organization of literary evenings, promotion of books and forums; organizing literary meetings and gatherings of literary creators and interested citizens.",
                    Type = "Book club meeting",
                    City = "Beograd",
                    Venue = "Kulturni centar Cukarica",
                    Capacity = 200,
                    SocialMediaLink = "https://knjizevniklub.rs/dogadjaji.html",
                }
            };

                await context.Events.AddRangeAsync(events);
                await context.SaveChangesAsync();
            }
        }
        
    }
}