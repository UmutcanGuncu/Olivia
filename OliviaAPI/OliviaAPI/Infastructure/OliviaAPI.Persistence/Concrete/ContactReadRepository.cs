using System;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class ContactReadRepository : ReadRepository<Contact>, IContactReadRepository
    {
        public ContactReadRepository(OliviaDbContext context) : base(context)
        {
        }
    }
}

