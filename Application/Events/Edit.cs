using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Events
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Event Event { get; set; }
        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var e = await _context.Events.FindAsync(request.Event.Id);
                _mapper.Map(request.Event, e);
                await _context.SaveChangesAsync();
            }
        }
    }
}
