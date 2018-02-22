using System.Linq;
using System.Web.Http;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class BrandsController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();

        public IHttpActionResult GetAll()
        {
            var result = _db.Brands.OrderBy(x => x.Name).ToList();
            return Ok(result);
        }

        [HttpPost]
        public IHttpActionResult Add(Brand brand)
        {
            _db.Brands.Add(brand);
            _db.SaveChanges();
            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            Brand objectBrand = _db.Brands.Find(id);
            if (objectBrand != null)
            {
                _db.Brands.Remove(objectBrand);
                _db.SaveChanges();
            }
            return Ok();
        }
    }
}