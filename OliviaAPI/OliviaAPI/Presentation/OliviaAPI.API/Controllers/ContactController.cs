using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OliviaAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactReadRepository _contactReadRepository;
        private readonly IContactWriteRepository _contactWriteRepository;
        public ContactController(IContactReadRepository contactReadRepository, IContactWriteRepository contactWriteRepository)
        {
            _contactReadRepository = contactReadRepository;
            _contactWriteRepository = contactWriteRepository;
        }

        [HttpGet]
        public IActionResult GetContact()
        {
            var values = _contactReadRepository.GetList();
            return Ok(values);
        }
        [HttpPost]
        public async Task<IActionResult> AddContact(Contact contact)
        {
           await _contactWriteRepository.AddAsync(contact);
            return Ok();
        }
    }
}

