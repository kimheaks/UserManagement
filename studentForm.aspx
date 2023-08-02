<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="studentForm.aspx.cs" Inherits="Admlogin.studentForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>    
    <%--JQuery--%>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <%--sweet alert--%>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css" />
    <%--vanilla js date time picker--%>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.1/dist/css/datepicker-bs5.min.css" />
    <link rel="stylesheet" href="~/content/bootstrapBlue.css" />
    <title></title>
</head>
<body>
    <section>
        <div class="container justify-content-center py-5 h-100">
            <div class="card justify-content-center h-100 w-75" id="form-contaner">
                <div class="row d-flex flex-row-reverse h-100">
                        <div class="col-lg-12">
                                <div class="card-body h-100 d-flex justify-content-center flex-column ">
                                    <div class="row h-100">
                                        <div class="row w-100 ">
                                            <div class="card-body">
                                                <div class="px-5">
                                                    <h3>Student Information</h3>
                                                </div>
                                            </div>
                                            <div class="card-body card-custom">
                                                <form class="px-5" >
                                                    <div class="form-outline">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <input type="text"  class="form-control bg-light my-4" name="fname" placeholder="Firstname"/>
                                                                <input type="text" class="form-control bg-light my-4"  name="sex" placeholder="Sex" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <input type="text" class="form-control bg-light my-4" name="lname" placeholder="Lastname"/>
                                                                <input type="text" class="form-control bg-light my-4" name="dob"  placeholder="Date of birth" data-toggle="datepicker" />
          
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <input type="text"  class="form-control bg-light my-4" name="phone" placeholder="Phone number"/>
                                                                <input type="text" class="form-control bg-light my-4"  name="email" placeholder="Email"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body">
                                                <form class="px-5 " action="mail.php" method="get" aria-required="true">
                                                    <div class="p-0">
                                                        <input class="btn btn-primary  btn-lg" type="submit" value="Submit" />
                                                    </div>
                                                </form>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/vanillajs-datepicker/dist/js/datepicker.min.js"></script>
    <script type="text/javascript" src="Scripts/login.js" ></script>
    <script type="text/javascript" src="Scripts/datetime.js"></script>
</body>
</html>
