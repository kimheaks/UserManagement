<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="Admlogin.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <header>
        <div class="container-lg">
            <div class="jumbotron py-4">
                <div class="row">
                    <div class="col-10">
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary" id="btnsearch">search</button>
                        </div>
                    </div>
                    <div class="col-2 d-flex align-self-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Add Student
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Student Information</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body justify-content-center">  
                                          <div class="container-fluid">
                                            <div class="card-body card-custom">
                                                <div class="form-outline">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <input type="text"  class="form-control bg-light my-4" id="AddStudentfname" name="fname" placeholder="Firstname"/>
                                                            <input type="text" class="form-control bg-light my-4" id="AddStudentsex" name="sex" placeholder="Sex" />
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input type="text" class="form-control bg-light my-4" id="AddStudentlname" name="lname" placeholder="Lastname"/>
                                                            <input type="text" class="form-control bg-light my-4" id="AddStudentdob" name="dob"  placeholder="Date of birth" data-toggle="datepicker" />
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex flex-column">
                                                        <div class="col">
                                                            <input type="text"  class="form-control bg-light my-2" id="AddStudentphone" name="phone" placeholder="Phone number"/>
                                                        </div>
                                                        <div class="col">
                                                            <input type="text" class="form-control bg-light my-2" id="AddStudentemail"  name="email" placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                                                                                        
                                        </div>
                                          </div>
                                      <div class="modal-footer">
                                        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                                        <button type="submit" id="btnAddstudent" class="btn btn-primary">Add</button>
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
    <section>
        <div class="container-fluid" id="form-container">
            <table class="table" id="studentList">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Dob</th>
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
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
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
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
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
