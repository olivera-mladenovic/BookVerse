using Microsoft.AspNetCore.Identity;
using System.Collections;

namespace Domain
{
    public class User : IdentityUser
    {
        public string DisplayName { get; set; }
        public string? About { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
