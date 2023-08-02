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
        void appendStudent();
    }
    
}
