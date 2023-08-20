using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Admlogin
{
    public partial class studentProfile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (HttpContext.Current.Request.Cookies["UserInfo"] == null)
            {
                HttpContext.Current.Response.Redirect("login.aspx");
            }
            else
            {
                HttpCookie cookie = HttpContext.Current.Request.Cookies["UserInfo"];
                string username = cookie["Username"];
            }
        }
    }
}