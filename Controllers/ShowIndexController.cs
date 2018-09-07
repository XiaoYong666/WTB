using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WTB.Controllers
{
    public class ShowIndexController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}