using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AutoMapper;
using DAL.Core;
using DAL.Core.ModelDTO;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class NumberStringsController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();

        public IHttpActionResult GetAll()
        {
            var result = _db.NumberStrings.ToList();
         //   var result = Mapper.Map<List<NumberString>, List<NumberStringDTO>>();
            return Ok(result);
        }
    }
}

