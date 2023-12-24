using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Events
{
    public class AddRemoveGuest
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserProvider _userProvider;
            public Handler(DataContext context, IUserProvider userProvider)
            {
                _context= context;
                _userProvider= userProvider;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var e = await _context.Events.Include(e => e.Guests).FirstOrDefaultAsync(e=>e.Id==request.Id);
                if (e!=null)
                {
                    var user = await _context.Users.FirstOrDefaultAsync(u=> u.UserName == _userProvider.getUsername());
                    if (user!=null)
                    {
                        var attendance = e.Guests.FirstOrDefault(x=> x.Id == user.Id);
                        if (attendance!=null)
                        {
                            e.Guests.Remove(attendance);
                        } else
                        {
                            e.Guests.Add(user);
                        }
                    }
                }
                await _context.SaveChangesAsync();
            }
        }
    }
}
