using AutoMapper;
using DAL.Core;
using DAL.Core.ModelDTO;

namespace BLL.Core.BLL_Core.Mapping
{
    public class CatalogMapper : Profile
    {
        public CatalogMapper()
        {
            CreateMap<Product, ProductDTO>()
            .ForMember(d => d.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(d => d.Name, opts => opts.MapFrom(src => src.Name))
            .ForMember(d => d.CountryId, opts => opts.MapFrom(src => src.CountryId))
            .ForMember(d => d.PictureId, opts => opts.MapFrom(src => src.PictureId))
            .ForMember(d => d.BrandId, opts => opts.MapFrom(src => src.BrandId))
            .ForMember(d => d.NumberStringId, opts => opts.MapFrom(src => src.NumberStringId))
            .ForMember(d => d.NumberProduct, opts => opts.MapFrom(src => src.NumberProduct))
            .ForMember(d => d.Price, opts => opts.MapFrom(src => src.Price))
            .ForMember(d => d.DateManufacture, opts => opts.MapFrom(src => src.DateManufacture))
            .ForMember(d => d.DateCreate, opts => opts.MapFrom(src => src.DateCreate))
            .ForMember(d => d.DateUpdate, opts => opts.MapFrom(src => src.DateUpdate))
            .ForMember(d => d.DateDelete, opts => opts.MapFrom(src => src.DateDelete));
        }
    }
}