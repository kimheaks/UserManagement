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
using Admlogin.Class;
using System.Web.Script.Serialization;



namespace Admlogin.Loginservices
{
    public class loginService : IloginService
    {
        public string Login(string username, string password)
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
                    HttpCookie cookie = new HttpCookie("UserInfo");
                    cookie["LoggedIn"] = "true";
                    cookie["Username"] = username;
                    cookie["Role"] = role;
                    HttpContext.Current.Response.Cookies.Add(cookie);
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
            if (HttpContext.Current.Request.Cookies["UserInfo"] != null)
            {
                HttpCookie cookie = new HttpCookie("UserInfo");
                cookie.Expires = DateTime.Now.AddDays(-1d);
                HttpContext.Current.Response.Cookies.Add(cookie);
            }
        }


        public string GetStudents(string json)
        {
            // Retrieve the username from the cookie
            string username = "";

            if (HttpContext.Current.Request.Cookies["UserInfo"] != null)
            {
                HttpCookie cookie = HttpContext.Current.Request.Cookies["UserInfo"];
                username = cookie["Username"];
            }
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            // Create a list to store the student data
            List<studentInfo> students = new List<studentInfo>();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "SELECT studentFirstname, studentLastname, studentSex, studentDob, studentPhone, studentEmail, studentPassword FROM studentInfo WHERE studentLastname = @username";
                    try
                    {
                        using (SqlCommand command = new SqlCommand(query, connection))
                        {

                            command.Parameters.AddWithValue("@username", username);

                            command.ExecuteNonQuery();

                            using (SqlDataReader reader = command.ExecuteReader())
                            {
                                while (reader.Read())
                                {
                                    studentInfo objstudent = new studentInfo
                                    {
                                        firstname = reader["studentFirstname"].ToString(),
                                        lastname = reader["studentLastname"].ToString(),
                                        sex = Convert.ToChar(reader["studentSex"]),
                                        dob = DateTime.Parse(reader["studentDob"].ToString()).ToString("dd-MM-yyyy"),
                                        phone = reader["studentPhone"].ToString(),
                                        email = reader["studentEmail"].ToString(),
                                        password = reader["studentPassword"].ToString()

                                    };

                                    students.Add(objstudent);

                                }
                            }
                        }
                        // Serialize the data to JSON 
                        JavaScriptSerializer serializer = new JavaScriptSerializer();
                        json = serializer.Serialize(students);

                        return json;
                    }
                    catch (Exception) {

                        return "0" ;
                    
                    }
                    

                }

            }

        }
}
