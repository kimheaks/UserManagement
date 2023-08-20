using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Admlogin.Class;
using System.Web.Script.Serialization;

namespace Admlogin.Loginservices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IloginService" in both code and config file together.
    [ServiceContract]
    public interface IloginService
    {

        [OperationContract]
        string Login(string username, string password);
        
        [OperationContract]
        void Logout();

        [OperationContract]
        string GetStudents(string json);
    }
        
}
