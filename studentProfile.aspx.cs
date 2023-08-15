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
            if (Session["LoggedIn"] == null)
            {
                HttpContext.Current.Response.Redirect("login.aspx");
            }
            else
            {
                string username = Session["Username"].ToString();
            }

        }
    }
}