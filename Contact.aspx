<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="Admlogin.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <header>
        <div class="container-lg py-4">
            <div class="jumbotron py-4">
                <div class="row">
                    <div class="col-md-10">
                        <div class="input-group">
                            <input type="search" class="form-control rounded" id="inputSearch" placeholder="Search by Name" aria-label="Search" aria-describedby="search-addon" autocomplete="off"  />
                        </div>
                    </div>
                    <div class="col-2 d-flex align-self-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <!-- Button trigger modal -->
                                <button type="button" id="btnAdd" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Add Student
                                </button>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Student Information</h5>
                                        <button type="button" class="btn-close" id="btnCloseTop" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body align-item-center">  
                                          <div class="container-fluid">
                                              <form id="studentform">
                                                <div class="form-outline">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <label for="exampleModalLabel">First Name</label>
                                                            <input type="text"  class="form-control bg-light my-2" id="AddStudentfname" name="fname" placeholder="Firstname" required="required"/>
                                                            <div id="invalid-feedback-fname">
                                                            </div>
                                                            <label for="exampleModalLabel">Sex</label>
                                                            <select class="form-select my-2" aria-label="Default select example" id="AddStudentsex" name="sex" required="required">
                                                              <option value="" disabled selected>Select sex</option>
                                                              <option value="F">F</option>
                                                              <option value="M">M</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <label for="exampleModalLabel">Last Name</label>
                                                            <input type="text" class="form-control bg-light my-2" id="AddStudentlname" name="lname" placeholder="Lastname" required="required"/>
                                                            <label for="exampleModalLabel">Date Created</label>
                                                            <input type="text" class="form-control bg-light my-2" id="AddStudentdob" name="dob"  placeholder="Date Create" data-toggle="datepicker" required="required"/>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <label for="exampleModalLabel">Phone</label>
                                                            <input type="text"  class="form-control bg-light my-2" id="AddStudentphone" name="phone" placeholder="Phone number" required="required"/>
                                                            <label for="exampleModalLabel">Password</label>
                                                            <input type="password" class="form-control bg-light my-2" id="AddPassword" name="psw" placeholder="Password" required="required"/>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <label for="exampleModalLabel">Email</label>
                                                            <input type="text" class="form-control bg-light my-2" id="AddStudentemail"  name="email" placeholder="Email" required="required"/>
                                                            <label for="exampleModalLabel">Confirm Password</label>
                                                            <input type="password" class="form-control bg-light my-2" id="AddconfirmPassword"  name="cpsw" placeholder="Confirm Password" required="required"/>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                      <button type="submit" id="btnAddstudent" class="btn btn-primary">Add</button>
                                                      <button type="button" id="btnBack" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                    </div>
                                                </div>
                                            </form>                                                                                                        
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
         </div>
    </header>
    <section class=" min-vh-100">
        <div class="container-fluid d-flex justify-content-center align-item-center" id="form-container">
            <table class="table" id="studentList">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Date Create</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th colspan="2" class="justify-content-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style="display:none">
                  <th scope="row" id="row2">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>Update</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="">Student Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body justify-content-center">  
                                <div class="container-fluid">
                                <div class="card-body card-custom">
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
                                        <div class="row d-flex flex-column">
                                            <div class="col-lg-6">
                                                <input type="text"  class="form-control bg-light my-2" name="phone" placeholder="Phone number"/>
                                                <input type="password"  class="form-control bg-light my-2" name="password" placeholder="Set Password"/>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" class="form-control bg-light my-2"  name="email" placeholder="Email"/>
                                                <input type="text" class="form-control bg-light my-2"  name="role" placeholder="Role"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                                                                        
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <button type="button" class="btn btn-primary update-btn">Update</button>
                        </div>
                        </div>
                        </div>
                    </div>                            
                  </td>
                  <td><button type="button" class="btn btn-primary btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row" id="row3">3</th>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>Update</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="">Student Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body justify-content-center">  
                                <div class="container-fluid">
                                <div class="card-body card-custom">
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
                                        <div class="row d-flex flex-column">
                                            <div class="col">
                                                <input type="text"  class="form-control bg-light my-2" name="phone" placeholder="Phone number"/>
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control bg-light my-2"  name="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                                                                        
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <button type="button" class="btn btn-primary">Update</button>
                        </div>
                        </div>
                        </div>
                    </div>                            
                  </td>
                  <td><button type="button" class="btn btn-primary btn-sm">Delete</button></td>
                </tr>
              </tbody>
            </table>
        </div>
    </section>
</asp:Content>
