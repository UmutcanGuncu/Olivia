using System;
using OliviaAPI.Domain.Entities.Common;

namespace OliviaAPI.Domain.Entities
{
	public class Contact: BaseEntity
	{
		public string? Name { get; set; }
		public string? Surname { get; set; }
		public string? Email { get; set; }
		public string? Title { get; set; }
		public string? Message { get; set; }
	}
}

