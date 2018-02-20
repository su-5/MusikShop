using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AutoMapper;
using DAL.Core;
using DAL.Core.ModelDTO;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class BrandsController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();

        public IHttpActionResult GetAll()
        {
            var result = Mapper.Map<List<Brand>, List<BrandDTO>>(_db.Brands.ToList());
            return Ok(result);
        }
    }
}