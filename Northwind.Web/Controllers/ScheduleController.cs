using System.Web.Mvc;

namespace Northwind.Web.Controllers
{
    public class ScheduleController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Schedule";

            return View();
        }
        
        public ActionResult Edit()
        {
            ViewBag.Title = "Home Page";

            return PartialView();
        }
    }
}