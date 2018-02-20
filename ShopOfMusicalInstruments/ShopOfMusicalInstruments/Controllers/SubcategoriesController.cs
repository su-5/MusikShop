using System.Web.Http;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class SubcategoriesController : ApiController
    {
        private MusicDataBaseEntities _db = new MusicDataBaseEntities();

        //public IHttpActionResult GetProduct()
        //{
        //    var result = Mapper.Map<List<Subcategory>, List<SubcategoryDTO>>(_db.Subcategories.ToList());
        //    return Ok(result);
        //}
    }
}