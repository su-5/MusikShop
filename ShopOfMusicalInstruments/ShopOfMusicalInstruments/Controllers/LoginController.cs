﻿using System.Web.Mvc;

namespace ShopOfMusicalInstruments.Core.Controllers
{
    public class LoginController : Controller
    {
        [AllowAnonymous]
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
    }
}