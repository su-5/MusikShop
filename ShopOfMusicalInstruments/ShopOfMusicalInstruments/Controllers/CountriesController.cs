using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AutoMapper;
using DAL.Core;
using DAL.Core.ModelDTO;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class CountriesController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();
        public IHttpActionResult GetAll()
        {
            var result = Mapper.Map<List<Country>, List<CountryDTO>>(_db.Countries.ToList());
            return Ok(result);
        }
    }

}