using System.Linq;
using System.Web.Http;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class NumberStringsController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();
        public IHttpActionResult GetAll()
        {
            var result = _db.NumberStrings.OrderBy(x => x.Number).ToList();
            return Ok(result);
        }

        [HttpPost]
        public IHttpActionResult Add(NumberString numberString)
        {
            _db.NumberStrings.Add(numberString);
            _db.SaveChanges();
            return Ok();
        }
    }
}

