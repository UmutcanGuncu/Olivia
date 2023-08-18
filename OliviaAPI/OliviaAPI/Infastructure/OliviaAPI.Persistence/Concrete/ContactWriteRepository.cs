using System;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class ContactWriteRepository : WriteRepository<Contact>,IContactWriteRepository
    {
        public ContactWriteRepository(OliviaDbContext context) : base(context)
        {
        }
    }
}

