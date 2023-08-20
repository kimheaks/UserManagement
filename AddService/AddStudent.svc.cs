using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Script.Serialization;
using System.ServiceModel;
using System.Text;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Admlogin.Class;


namespace Admlogin.AddService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AddStudent" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AddStudent.svc or AddStudent.svc.cs at the Solution Explorer and start debugging.
    public class AddStudent : IAddStudent
    {
        public string appendStudent(string firstname, string lastname, string sex, string dob, string  phone, string email, string cpsw)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string query = "EXEC InsertStudentInfo @firstname, @lastname, @sex, @dob, @phone, @email, @password";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandType = CommandType.Text;
                    command.Parameters.AddWithValue("@firstname", firstname);
                    command.Parameters.AddWithValue("@lastname", lastname);
                    command.Parameters.AddWithValue("@sex", sex);
                    command.Parameters.AddWithValue("@dob", dob);
                    command.Parameters.AddWithValue("@phone", phone);
                    command.Parameters.AddWithValue("@email", email);
                    command.Parameters.AddWithValue("@password", cpsw);

                    
                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected != 0)
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

        public string GetStudents(string json)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            // Create a list to store the student data
            List<studentInfo> students = new List<studentInfo>();

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "SELECT studentId, studentFirstname, studentLastname, studentSex, studentDob, studentPhone, studentEmail FROM studentInfo";
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                studentInfo student = new studentInfo
                                {
                                    id= reader["studentId"].ToString(),
                                    firstname = reader["studentFirstname"].ToString(),
                                    lastname = reader["studentLastname"].ToString(),
                                    sex = Convert.ToChar(reader["studentSex"]),
                                    dob = DateTime.Parse(reader["studentDob"].ToString()).ToString("dd-MM-yyyy"),
                                    phone = reader["studentPhone"].ToString(),
                                    email = reader["studentEmail"].ToString()
                                };

                                students.Add(student);
                            }
                        }
                    }
                }

                // Serialize the data to JSON 
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                json = serializer.Serialize(students);


                return json;
            }
            catch (Exception ex)
            {
                return "0" + ex;
                
            }

        }

        public string GetStudentstoupdate(int id, string json)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            // Create a list to store the student data
            List<studentInfo> Updatestudents = new List<studentInfo>();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "SELECT studentId, studentFirstname, studentLastname, studentSex, studentDob, studentPhone, studentEmail, studentPassword FROM studentInfo WHERE studentId= @id ";
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@id", id);
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                studentInfo student = new studentInfo
                                {
                                    id = reader["studentId"].ToString(),
                                    firstname = reader["studentFirstname"].ToString(),
                                    lastname = reader["studentLastname"].ToString(),
                                    sex = Convert.ToChar(reader["studentSex"]),
                                    dob = DateTime.Parse(reader["studentDob"].ToString()).ToString("dd-MM-yyyy"),
                                    phone = reader["studentPhone"].ToString(),
                                    email = reader["studentEmail"].ToString(),
                                    password = reader["studentPassword"].ToString()
                                };

                                Updatestudents.Add(student);
                            }
                        }
                        
                    }
                }

                // Serialize the data to JSON 
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                json = serializer.Serialize(Updatestudents);
                return json;
            }
            catch (Exception ex)
            {
                return "0" + ex;

            }
        }

        public string DeleteStudent(int id)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                try
                {
                    using (SqlCommand command = new SqlCommand("DELETE FROM studentInfo WHERE studentId = @Id", connection))
                    {
                        // Add the id parameter
                        command.Parameters.AddWithValue("@Id", id);
                        command.ExecuteNonQuery();
                    }

                    return "1";
                }
                catch (Exception e)
                {

                    return "0" + e;
                
                }
                
            }

        }

        public string UpdateStudent(int id, string firstname, string lastname, char sex, string dob, string phone, string email, string password, string json)

        {
            studentInfo newStudent = new studentInfo();
            List<studentInfo> newstudentList = new List<studentInfo>();
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string UpdateQuery = "UPDATE studentInfo SET studentFirstname = @newStudentfname, studentLastname = @newStudentlname, studentSex = @newStudentsx, studentDob = @newStudentdob, studentPhone = @newStudentph , studentEmail = @newStudentemail, studentPassword = @newStudentPassword WHERE studentId = @id ";
            using (SqlConnection con = new SqlConnection(connectionString)) {
                con.Open();
                try
                {
                    using (SqlCommand command = new SqlCommand(UpdateQuery, con)) {

                        command.Parameters.AddWithValue("@id", id);
                        command.Parameters.AddWithValue("@newStudentfname", firstname);
                        command.Parameters.AddWithValue("@newStudentlname", lastname);
                        command.Parameters.AddWithValue("@newStudentsx", sex);
                        command.Parameters.AddWithValue("@newStudentdob", dob);
                        command.Parameters.AddWithValue("@newStudentph", phone);
                        command.Parameters.AddWithValue("@newStudentemail", email);
                        command.Parameters.AddWithValue("@newStudentPassword", password);
                        command.ExecuteNonQuery();

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                studentInfo objstudent = new studentInfo
                                {
                                    id = reader["studentId"].ToString(),
                                    firstname = reader["studentFirstname"].ToString(),
                                    lastname = reader["studentLastname"].ToString(),
                                    sex = Convert.ToChar(reader["studentSex"]),
                                    dob = reader["studentDob"].ToString(),
                                    phone = reader["studentPhone"].ToString(),
                                    email = reader["studentEmail"].ToString(),
                                    
                                };

                                newstudentList.Add(objstudent);
                            }
                        }
                    }

                    JavaScriptSerializer serializer = new JavaScriptSerializer();
                    json = serializer.Serialize(newstudentList);

                    return json;
                }
                catch(Exception e)
                {

                    return "0" + e;
                }

            }
                
        }

        public string SearchStudent(string search)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string searchQuery = "SELECT studentId, studentFirstname, studentLastname, studentSex, studentDob, studentPhone, studentEmail FROM studentInfo WHERE studentFirstname LIKE @search OR studentLastname LIKE @search";

            try
            {
                List<studentInfo> students = new List<studentInfo>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    con.Open();

                    using (SqlCommand command = new SqlCommand(searchQuery, con))
                    {

                        command.Parameters.AddWithValue("@search", "%" + search + "%");
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                studentInfo student = new studentInfo
                                {
                                    id = reader["studentId"].ToString(),
                                    firstname = reader["studentFirstname"].ToString(),
                                    lastname = reader["studentLastname"].ToString(),
                                    sex = Convert.ToChar(reader["studentSex"]),
                                    dob = reader["studentDob"].ToString(),
                                    phone = reader["studentPhone"].ToString(),
                                    email = reader["studentEmail"].ToString()
                                };

                                students.Add(student);
                            }
                        }

                    }

                    JavaScriptSerializer serializer = new JavaScriptSerializer();
                    string json = serializer.Serialize(students);
                    return json;

                }

            }
            catch (Exception e)
            {
                return "0" + e;
            }

        }




    }

}
