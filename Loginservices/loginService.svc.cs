using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;


namespace Admlogin.Loginservices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "loginService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select loginService.svc or loginService.svc.cs at the Solution Explorer and start debugging.
    public class loginService : IloginService
    {
        public string DoWork(string username, string password) {

            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string query = "SELECT COUNT(*) FROM userloginn WHERE username=@username AND psw=@password;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            using (SqlCommand command = new SqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@username", username);  /*add paramete username to @username*/
                command.Parameters.AddWithValue("@password", password);
                try
                {
                    connection.Open();
                }
                catch (Exception ex)
                {
                    return(ex.Message);
                    //return(ex.StackTrace);
                }                
                int count = (int)command.ExecuteScalar();    
                if (count == 1)
                {
                    return "1";
                }
                else
                {
                    return "0";
                }
            }

        }

    }
}
