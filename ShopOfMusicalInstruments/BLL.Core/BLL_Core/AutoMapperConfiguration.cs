using AutoMapper;
using BLL.Core.BLL_Core.Mapping;

namespace BLL.Core.BLL_Core
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(x => x.AddProfile<CatalogMapper>());
        }
    }
}
