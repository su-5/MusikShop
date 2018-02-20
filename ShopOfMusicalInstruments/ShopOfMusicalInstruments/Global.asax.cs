﻿using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AutoMapper;
using BLL.Core.BLL_Core;

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
            //AutoMapperConfiguration.Configure();
        }
    }
}
