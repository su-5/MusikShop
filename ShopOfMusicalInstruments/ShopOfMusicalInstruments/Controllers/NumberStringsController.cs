using System.Web.Http;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class NumberStringsController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();
        //public IHttpActionResult GetAll()
        //{
        //    var result = Mapper.Map<List<NumberString>, List<NumberStringDTO>>(_db.NumberStrings.ToList());
        //    return Ok(result);
        //}
    }
}

