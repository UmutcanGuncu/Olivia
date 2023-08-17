using System;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class ProductReadRepository : ReadRepository<Product>, IProductReadRepository
    {
        public ProductReadRepository(OliviaDbContext context) : base(context)
        {
        }
    }
}

