using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Security;



namespace Admlogin.Loginservices
{
    public class loginService : IloginService
    {
        public string DoWork(string username, string password)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string query = "SELECT userrole FROM studentInfo WHERE studentLastname=@username AND studentPassword=@password";

            using (SqlConnection connection = new SqlConnection(connectionString))
            using (SqlCommand command = new SqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@username", username); 
                command.Parameters.AddWithValue("@password", password);
                connection.Open();
                object result = command.ExecuteScalar();
                if (result != null)
                {
                    string role = result.ToString();
                    HttpContext.Current.Session["LoggedIn"] = true;
                    HttpContext.Current.Session["Username"] = username;
                    HttpContext.Current.Session["Role"] = role;
                    return role;
                }
                else
                {
                    return "0";
                }
            }

        }
        public void Logout()
        {
            FormsAuthentication.SignOut();
            HttpContext.Current.Session.Clear();
            HttpContext.Current.Session.Abandon();
        }
    }
    
}
