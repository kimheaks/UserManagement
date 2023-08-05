using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Admlogin.AddService
{
   
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IAddStudent" in both code and config file together.
    [ServiceContract]
    public interface IAddStudent
    {
        [OperationContract]
        string appendStudent(string firstname, string lastname, char sex, string dob, string phone, string email);

        [OperationContract]
        string GetStudents(string json);

        [OperationContract]
        string DeleteStudent(int id);

        [OperationContract]
        string UpdateStudent(int id, string json);


    }

}
