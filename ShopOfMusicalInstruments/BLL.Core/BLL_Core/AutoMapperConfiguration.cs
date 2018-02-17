using AutoMapper;
using BLL.Core.BLL_Core.Mapping;

namespace BLL.Core.BLL_Core
{
    class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(config: x => x.AddProfile<CatalogMapper>());
        }
    }
}
