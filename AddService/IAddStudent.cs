using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Admlogin.Class;

namespace Admlogin.AddService
{
   
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IAddStudent" in both code and config file together.
    [ServiceContract]
    public interface IAddStudent
    {
        [OperationContract]
        string appendStudent(string firstname, string lastname, string sex, string dob, string phone, string email, string cpsw);

        [OperationContract]
        string GetStudents(string json);

        [OperationContract]
        string GetStudentstoupdate(int id, string json);


        [OperationContract]
        string DeleteStudent(int id);

        [OperationContract]
        string UpdateStudent(int id, string firstname, string lastname, char sex, string dob, string phone, string email, string password, string json);

        [OperationContract]
        string SearchStudent(string search);


     



    }

}
