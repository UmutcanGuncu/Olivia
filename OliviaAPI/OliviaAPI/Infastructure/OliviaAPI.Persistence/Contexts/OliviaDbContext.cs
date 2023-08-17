using System;
using Microsoft.EntityFrameworkCore;
using OliviaAPI.Domain.Entities;

namespace OliviaAPI.Persistence.Contexts
{
	public class OliviaDbContext:DbContext
	{
		public OliviaDbContext(DbContextOptions options) : base(options)
		{

		}
        public DbSet<Product> Products { get; set; }
	}
}

