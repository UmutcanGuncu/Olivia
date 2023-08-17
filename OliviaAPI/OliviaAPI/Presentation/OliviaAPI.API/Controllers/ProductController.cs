using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OliviaAPI.Application.Repositories;
using OliviaAPI.Domain.Entities;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OliviaAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IProductWriteRepository _productWriteRepository;

        public ProductController(IProductReadRepository productReadRepository, IProductWriteRepository productWriteRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
        }

        [HttpGet]
        public IActionResult GetProduct()
        {
            var values = _productReadRepository.GetList();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var value = _productReadRepository.GetByIdAsync(id);
            return Ok(await value); // read repodaki method async olduğundan async eklemelisin 
        }
        [HttpPost]
        public async Task<IActionResult> AddProduct(Product product)
        {
            await _productWriteRepository.AddAsync(product);
            return Ok();
        }
        [HttpPut]
        public IActionResult UpdateProduct(Product product)
        {
             _productWriteRepository.Update(product);
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
           await _productWriteRepository.RemoveAsync(id);
            return Ok();
        }
    } 
}

