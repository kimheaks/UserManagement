using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Admlogin.Class;
using System.Data.Sql;
using System.Configuration;



namespace Admlogin.AddService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AddStudent" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AddStudent.svc or AddStudent.svc.cs at the Solution Explorer and start debugging.
    public class AddStudent : IAddStudent
    {
        public void appendStudent() 
        {
            //declare instance of the class 
            studentInfo obj = new studentInfo();
            string connectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
            string query = " EXCE PROC InsertStudent  FROM userloginn WHERE username=@username AND psw=@password;";


        }


    }
}
