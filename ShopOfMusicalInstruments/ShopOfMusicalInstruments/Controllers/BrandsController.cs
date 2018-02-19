using System.Collections.Generic;
using System.Data.Entity;
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
            List<Brand> result = _db.Brands.OrderBy(x=>x.Name).ToList();
            return Ok(result);
        }

    }
}