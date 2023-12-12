

using Domain;
using MediatR;
using Persistence;

namespace Application.Events
{
    public class Create
    {
        public class Command : IRequest
        {
            public Event Event { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Events.Add(request.Event);
                await _context.SaveChangesAsync();
            }
        }
    }
}
