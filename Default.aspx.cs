using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Admlogin
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Cookies[".ASPXAUTH"] == null)
            {
                HttpContext.Current.Response.Redirect("login.aspx");
            }
        }
    }
}