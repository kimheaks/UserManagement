using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Admlogin.Class
{
    [DataContract]
    public class studentInfo
    {
        [DataMember]
        public string firstname { get; set; }
        [DataMember]
        public string lastname { get; set; }
        [DataMember]
        public char sex { get; set; }
        [DataMember]
        public string dob { get; set; }

        [DataMember]
        public string phone { get; set; }
        [DataMember]
        public string role { get; set; }
        [DataMember]
        public string id { get; set; }
        [DataMember]
        public string email { get; set; }
        [DataMember]
        public string password { get; set; }

    

    }
}