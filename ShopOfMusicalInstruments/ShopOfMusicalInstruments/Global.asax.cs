using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using BLL.Core.BLL_Core;
using Web;

namespace ShopOfMusicalInstruments.Core
{
    public class WebApiApplication : System.Web.HttpApplication
    {
       

       
        protected void Application_Start()
        {
            HttpConfiguration config = GlobalConfiguration.Configuration;
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AutoMapperConfiguration maper = new AutoMapperConfiguration();
            maper.Configure();
            config.Formatters.JsonFormatter
                .SerializerSettings
                .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        }
    }
}
