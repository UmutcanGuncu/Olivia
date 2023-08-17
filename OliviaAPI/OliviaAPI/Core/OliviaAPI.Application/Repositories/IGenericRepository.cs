using System;
using Microsoft.EntityFrameworkCore;
using OliviaAPI.Domain.Entities.Common;

namespace OliviaAPI.Application.Repositories
{
	public interface IGenericRepository<T> where T:BaseEntity
	{
		public DbSet<T> Table { get; }
		
	}
}

