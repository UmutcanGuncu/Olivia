using System;
using Microsoft.EntityFrameworkCore;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities.Common;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly OliviaDbContext _context;

        public ReadRepository(OliviaDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public async Task<T> GetByIdAsync(Guid id)
        {
            var value = await Table.FirstOrDefaultAsync(x => x.Id == id);
            return value;
        }

        public  List<T> GetList()
        {
            var values = Table.ToList();
            return values;
        }
    }
}

