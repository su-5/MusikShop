using System.Linq;
using System.Web.Http;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class CountriesController : ApiController
    {
        private readonly MusicDataBaseEntities _db = new MusicDataBaseEntities();
        public IHttpActionResult GetAll()
        {
            var result = _db.Countries.OrderBy(x => x.Name).ToList();
            return Ok(result);
        }
    }

}