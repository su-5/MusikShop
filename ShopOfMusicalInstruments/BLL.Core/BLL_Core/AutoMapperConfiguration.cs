using AutoMapper;
using AutoMapper.Configuration;
using BLL.Core.BLL_Core.Mapping;

namespace BLL.Core.BLL_Core
{
    public class AutoMapperConfiguration
    {
        public  void Configure()
        {
            Mapper.Initialize(x => x.AddProfile<ProductMapper>());
           // Mapper.Initialize(r => r.AddProfile<NumberStringMapper>());
            //Mapper.Initialize(x => x.AddProfile<CountryMapper>());
           // Mapper.Initialize(x => x.AddProfile<BrandMapper>());


        }
    }
}
