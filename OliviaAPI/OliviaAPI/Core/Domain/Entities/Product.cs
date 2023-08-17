using System;
using OliviaAPI.Domain.Entities.Common;

namespace OliviaAPI.Domain.Entities
{
	public class Product:BaseEntity
	{
		public string? Title { get; set; }
		public string? Description { get; set; }
		public string? ImageUrl { get; set; }
		public float Price { get; set; }
		public int Stock { get; set; }
	}
}

