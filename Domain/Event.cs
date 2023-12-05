
namespace Domain
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public int Capacity { get; set; }
        public string SocialMediaLink { get; set; }
        public string Type { get; set; }
    }
}
