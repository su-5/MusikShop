using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using DAL.Core;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class NumberStringsController : ApiController
    {
        private MusicDataBaseEntities db = new MusicDataBaseEntities();

        // GET: api/NumberStrings
        public IQueryable<NumberString> GetNumberStrings()
        {
            return db.NumberStrings;
        }

        // GET: api/NumberStrings/5
        [ResponseType(typeof(NumberString))]
        public async Task<IHttpActionResult> GetNumberString(int id)
        {
            NumberString numberString = await db.NumberStrings.FindAsync(id);
            if (numberString == null)
            {
                return NotFound();
            }

            return Ok(numberString);
        }

        // PUT: api/NumberStrings/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNumberString(int id, NumberString numberString)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != numberString.Id)
            {
                return BadRequest();
            }

            db.Entry(numberString).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NumberStringExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/NumberStrings
        [ResponseType(typeof(NumberString))]
        public async Task<IHttpActionResult> PostNumberString(NumberString numberString)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NumberStrings.Add(numberString);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = numberString.Id }, numberString);
        }

        // DELETE: api/NumberStrings/5
        [ResponseType(typeof(NumberString))]
        public async Task<IHttpActionResult> DeleteNumberString(int id)
        {
            NumberString numberString = await db.NumberStrings.FindAsync(id);
            if (numberString == null)
            {
                return NotFound();
            }

            db.NumberStrings.Remove(numberString);
            await db.SaveChangesAsync();

            return Ok(numberString);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NumberStringExists(int id)
        {
            return db.NumberStrings.Count(e => e.Id == id) > 0;
        }
    }
}