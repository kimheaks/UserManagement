using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;



namespace Admlogin.AddService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AddStudent" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AddStudent.svc or AddStudent.svc.cs at the Solution Explorer and start debugging.
    public class AddStudent : IAddStudent
    {
        public string appendStudent(string firstname, string lastname, char sex, string dob, string phone, string email)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            // Create the SQL query string
            string query = "INSERT INTO studentInfo (studentFirstname, studentLastname, studentSex, studentDob, studentPhone, studentEmail) " +
                           "VALUES (@firstname, @lastname, @sex, @dob, @phone, @email)";

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

                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        return "1"; // Return a success message
                    }
                    else
                    {
                        return "0"; // Return an error message
                    }
                }

            }
        }

        public List<Dictionary<string, object>> GetStudents() 
        {
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            // Create a list to store the student data
            List<Dictionary<string, object>> students = new List<Dictionary<string, object>>();

            // Query the database to retrieve the student data
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("SELECT * FROM Students", connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            // Create a dictionary to store the student data
                            Dictionary<string, object> student = new Dictionary<string, object>();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                student[reader.GetName(i)] = reader.GetValue(i);
                            }

                            // Add the dictionary to the list
                            students.Add(student);
                        }
                    }
                }
            }
            // Return the list of dictionaries
            return students;

        }

    }
}
