using System;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class ProductWriteRepository : WriteRepository<Product>, IProductWriteRepository
    {
        public ProductWriteRepository(OliviaDbContext context) : base(context)
        {
        }
    }
}

