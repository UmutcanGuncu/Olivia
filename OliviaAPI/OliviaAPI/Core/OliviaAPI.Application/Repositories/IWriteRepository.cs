using System;
using OliviaAPI.Domain.Entities.Common;

namespace OliviaAPI.Application.Repositories
{
	public interface IWriteRepository<T>:IGenericRepository<T> where T: BaseEntity
	{
		public Task<bool> AddAsync(T t);
		public Task<bool> RemoveAsync(Guid id);
		public bool Update(T t);

	}
}

