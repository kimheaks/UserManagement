﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Admlogin.Loginservices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IloginService" in both code and config file together.
    [ServiceContract]
    public interface IloginService
    {
        [OperationContract]
        string DoWork(string username, string password);
        [OperationContract]
        string Logout();
    }
        
}
