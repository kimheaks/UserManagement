<%@ Page Language="C#" MasterPageFile="~/userSite.Master" AutoEventWireup="true" CodeBehind="studentProfile.aspx.cs" Inherits="Admlogin.studentProfile" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section>
        <div class="container py-5 h-100">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="card-body h-100 d-flex justify-content-center flex-column ">
                        <div class="card-body card-custom">
                            <div class="form-outline">
                                <div class="card-body" id="imgUpload">
                                    <img class="rounded-circle img-fluid" id="photo" alt="avatar1" src="img/undraw_Female_avatar_efig.png"/>
                                </div>
                            </div>
                        </div>
                    </div>                                          
                </div>
                <div class="col-md-8 ">
                    <div class="row m-4">
                        <div class="card-body h-100 d-flex flex-column justify-content-center py-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="exampleInputEmail1" class="py-2">Firstname</label>
                                    <input type="email" class="form-control py-2"  aria-describedby="emailHelp" placeholder="Firstname">
                                    <label for="exampleInputEmail1" class="py-2">Sex</label>
                                    <input type="email" class="form-control py-2"  aria-describedby="emailHelp" placeholder="Sex">
                                    <label for="exampleInputEmail1" class="py-2">Phone</label>
                                    <input type="email" class="form-control py-2"  aria-describedby="emailHelp" placeholder="Phone">
                                </div>
                                <div class="col-md-6">
                                    <label for="exampleInputEmail1" class="py-2">Lastname</label>
                                    <input type="email" class="form-control py-2" aria-describedby="emailHelp" placeholder="Lastname">
                                    <label for="exampleInputEmail1" class="py-2">Dob</label>
                                    <input type="text" class="form-control bg-light my-2" id="AddStudentdob" name="dob"  placeholder="Date of birth" data-toggle="datepicker" />
                                    <label for="exampleInputEmail1" class="py-2">Email</label>
                                    <input type="email" class="form-control py-2"  aria-describedby="emailHelp" placeholder="Enter email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="column-md-auto">
                                    <input class="btn btn-primary  btn-lg" type="submit" value="Update" />
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

</asp:Content>
