<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.aspx.cs" Inherits="Admlogin.form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>    <%--JQuery--%>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <%--sweet alert--%>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css" />
    <link href="Content/form.css" rel="stylesheet" />
    <title>student Form</title>
</head>
<body>
     <section>
        <div class="container justify-content-center py-5 h-100">
            <div class="card justify-content-center h-100">
                <div class="row d-flex flex-row-reverse h-100">
                        <div class="col-lg-9">
                                <div class="card-body h-100 d-flex justify-content-center flex-column ">
                                    <div class="row h-100">
                                        <div class="row w-100 ">
                                            <div class="card-body">
                                                <div class="px-5">
                                                    <h3>Send us a message</h3>
                                                    <h6 class="text-muted ">If you have any work from me or any types of quries related to my tutorials, You can send me a message from here, It is my pleasure to help you </h6>        
                                                </div>
                                            </div>
                                            <div class="card-body card-custom">
                                                <form class="px-5" action="mail.php" method="POST" aria-required="true">
                                                    <div class="form-outline" >
                                                        <input type="text" oninput="this.value = this.value.replace(/[^a-z][^A-Z]/g, '').replace(/(\..*)\./g, '$1');" class="form-control bg-light my-2" name="name" placeholder="Enter your name">
                                                        <input type="text" class="form-control bg-light my-2"  name="email" placeholder="Enter your email">
                                                        <textarea class="form-control bg-light my-2" name="msg" placeholder="Enter your message" rows="6"></textarea>   
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body">
                                                <form class="px-5 " action="mail.php" method="get" aria-required="true">
                                                    <div class="p-0">
                                                        <input class="btn btn-purple btn-lg" type="submit" value="Submit" />
                                                    </div>
                                                </form>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card-body h-100 d-flex justify-content-center">
                                <div class="row h-100 ">
                                    <div class="row w-100">
                                        <div class="col-lg-12 col-md-4 col-sm-6 col-xs-6 px-4 ">
                                            <div class="card-body">
                                                <center>
                                                    <i class="fa fa-map-marker fa-2x" aria-hidden="true" ></i>
                                                </center>
                                                    <h4 class="text-center">Address</h4>
                                                    <p class="text-center">AIB, Phnom Penh,AIB, <br> Phnom Penh c </p>
                                                
                                            </div>
                                        </div>
                                        <div class=" col-lg-12 col-md-4 col-sm-6 col-xs-6 px-4">
                                            <div class="card-body">
                                                <center>
                                                    <i class="fa fa-phone fa-2x " aria-hidden="true" ></i>
                                                </center>
                                                    <h4 class="text-center">Phone</h4>
                                                    <p class="text-center">855 10 234 5679</p>
                                            
                                            </div>
                                        </div>
                                        <div class=" col-lg-12 col-md-4  justify-content-center px-4">
                                            <div class="card-body justify-content-center">
                                            
                                                    <center><i class="fa fa-envelope fa-2x"></i></center>
                                                    <h4 class="text-center">Email</h4>
                                                    <p class="text-center">Anonymous123@AIB.com </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
