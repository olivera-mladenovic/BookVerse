﻿using Application.Events;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EventsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetEvents()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(Guid id )
        {
            return await Mediator.Send(new Details.Query { Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent(Event e)
        {
            await Mediator.Send(new Create.Command { Event = e });
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditEvent(Guid id, Event e)
        {
            e.Id = id;
            await Mediator.Send(new Edit.Command { Event = e });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(Guid id)
        {
            
            await Mediator.Send(new Delete.Command { Id = id });
            return Ok();
        }
    }
}
