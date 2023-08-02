using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Admlogin.AddService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AddStudent" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AddStudent.svc or AddStudent.svc.cs at the Solution Explorer and start debugging.
    public class AddStudent : IAddStudent
    {
        public string appendStudent()

        {
            return "hello";
        }

        public class studentInformation
        {
            public string firstname { get; set; }
            public string lastname { get; set; }
            public string sex { get; set; }
            public string dob { get; set; }
            public string   phone { get; set; }
            public string email { get; set; }

        }
    }
}
