using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Persistence.Concrete;
using OliviaAPI.Persistence.Contexts;

namespace OliviaAPI.Persistence
{
	public static class ServiceRegistration
	{
		public static void AddPersistenceService(this IServiceCollection services)
		{
			//Db Connection
			services.AddDbContext<OliviaDbContext>(opt => opt.UseNpgsql(Configurations.ConnectionString));

			//Product
			services.AddScoped<IProductReadRepository, ProductReadRepository>();
			services.AddScoped<IProductWriteRepository, ProductWriteRepository>();

			//Contact
			services.AddScoped<IContactReadRepository, ContactReadRepository>();
			services.AddScoped<IContactWriteRepository, ContactWriteRepository>();
		}
	}
}

