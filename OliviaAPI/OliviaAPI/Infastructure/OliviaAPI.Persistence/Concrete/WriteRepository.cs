using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities.Common;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence.Concrete
{
    public class WriteRepository<T> : IWriteRepository<T> where T : BaseEntity
    {
        private readonly OliviaDbContext _context;

        public WriteRepository(OliviaDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public async Task<bool> AddAsync(T t)
        {
            EntityEntry<T> entry = await Table.AddAsync(t);
            _context.SaveChanges();
            return entry.State == EntityState.Added;

        }

        public async Task<bool> RemoveAsync(Guid id)
        {
            var value = await Table.FindAsync(id);
            EntityEntry<T> entityEntry =  Table.Remove(value);
            _context.SaveChanges();
            return entityEntry.State == EntityState.Deleted;
        }

        public bool Update(T t)
        {
            EntityEntry<T> entityEntry = Table.Update(t);
            _context.SaveChanges();
            return entityEntry.State == EntityState.Deleted;
        }
    }
}

