using System;
using OliviaAPI.Domain.Entities.Common;

namespace OliviaAPI.Application.Repositories
{
	public interface IReadRepository<T>:IGenericRepository<T> where T:BaseEntity
	{
		public Task<T> GetByIdAsync(Guid id);
		public List<T> GetList();

	}
}

