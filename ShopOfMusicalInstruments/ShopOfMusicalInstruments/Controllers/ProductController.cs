using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using DAL.Core;
using DAL.Core.ModelDTO;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class ProductController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();
        public IHttpActionResult GetProduct()
        {
            var result = _db.Products.ToList();
            List<ProductDTO> listProduct = new List<ProductDTO>();
            foreach (Product data in result)
            {
                listProduct.Add(new ProductDTO
                {
                    Brand = data.Brand,
                    Country = data.Country,
                    DateManufacture = data.DateManufacture,
                    NumberProduct = data.NumberProduct,
                    NumberString = data.NumberString,
                    Price = data.Price
                });
            }

            return Ok(listProduct);
        }
    }
}
