﻿using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class EventsController : BaseApiController
    {
        private readonly DataContext _context;
        public EventsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetEvents()
        {
            return await _context.Events.ToListAsync();
        }
    }
}
