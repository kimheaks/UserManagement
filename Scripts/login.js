$(document).ready(function () {

    //login vlidation
    var inputUsername = $('input')[0];
    var inputPassword = $('input')[1];
    // select all input elements and attach keypress event handlers
    $(inputUsername).keypress(function (event) {
        // gets the Unicode value of the pressed key
        var inputValue = event.which;
        // allow letters only
        if (!event.key.match(/^[a-zA-Z]+$/)) {
            event.preventDefault();
        }
    });
    $(inputPassword).keypress(function (event) {
        var inputValue = event.which;
        // allow alphanumeric characters only
        if (!event.key.match(/^[a-zA-Z0-9]+$/)) {
            event.preventDefault();
        }
    });


    //login 
    $('#btnsubmit').click(function (e) {
        e.preventDefault(); // prevent default form submit action
        var Valusername = $('#username').val();
        var Valpassword = $('#password').val();
        if (Valusername == 0) {
            Swal.fire({
                background: '#fffff',
                icon: 'info',
                text: 'Please enter Username',
                iconColor: 'red',
                confirmButtonColor: '#3F3D56',
                showCloseButton: true
            }).then(() => {
                inputUsername.focus();
            });
        } else if (Valpassword == 0){
            Swal.fire({
                background: '#fffff',
                icon: 'info',
                text: 'Please enter Password',
                iconColor: 'red',
                confirmButtonColor: '#3F3D56',
                showCloseButton: true
            })
        }else {
            $.ajax({
                method: 'POST',
                url: '../Loginservices/loginService.svc/ajaxService1/Login',
                data: JSON.stringify({ username: Valusername, password: Valpassword}),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var result = data.d;
                    if (result == "1") {
                        window.location.href = 'Contact.aspx';
                    } else if (result == "2")
                    {
                        window.location.href = 'StudentProfile.aspx';
                    } else {
                        Swal.fire({
                            background: '#fffff',
                            icon: 'error',
                            text: 'Incorrect username or password',
                            iconColor: '',
                            confirmButtonColor: '#3F3D56',
                            showCloseButton: true
                        })
                    }
                },
                error: function (error) {
                    alert('Error: ' + error);
                    var response = JSON.parse(error.responseText);
                    console.log(response);
                }

            });

        }
    });


    //Admin logout
    $('#btnLogout').click(function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want Log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Back',
            confirmButtonColor: '#3F3D56'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: 'POST',
                    url: '../Loginservices/loginService.svc/ajaxService1/Logout',
                    success: function (data) {
                        /*console.log("log out successfuly");*/
                        location.reload();
                    },
                    error: function (error) {
                        alert('Error: ' + error);
                        var response = JSON.parse(error.responseText);
                        console.log(response);
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    });
    //student log out
    $('#btnLogoutStudent').click(function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want Log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Back',
            confirmButtonColor: '#3F3D56'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: 'POST',
                    url: '../Loginservices/loginService.svc/ajaxService1/Logout',
                    success: function (data) {
                        location.reload();
                        /*console.log("log out successfuly");*/
                    },
                    error: function (error) {
                        alert('Error: ' + error);
                        var response = JSON.parse(error.responseText);
                        console.log(response);
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    });


    //input validation
    $('#AddStudentfname, #AddStudentlname').on('keydown', function (event) {
        if (!event.key.match(/^[a-zA-Z]+$/)) {
            event.preventDefault(); // Prevent the input of non-alphabetic characters
        }
    });
    $('#AddStudentphone').on('keydown', function (event) {
        if (
            !(event.ctrlKey && event.key === 'z') && // Allow Ctrl+Z
            !event.key.match(/^[0-9]+$/) && // Validate numeric input
            event.key !== 'Tab' && // Allow Tab key for navigation
            event.key !== 'Backspace' // Allow Backspace key for deletion
        ) {
            event.preventDefault();
        }
    });


    function clearModalform() {
        $('#exampleModal').find('#AddStudentfname').val('');
        $('#exampleModal').find('#AddStudentlname').val('');
        $('#exampleModal').find('#AddStudentsex').val('');
        $('#exampleModal').find('#AddStudentdob').val('');
        $('#exampleModal').find('#AddStudentphone').val('');
        $('#exampleModal').find('#AddStudentemail').val('');
        $('#exampleModal').find('#AddPassword').val('');
        $('#exampleModal').find('#AddconfirmPassword').val('');

    }
    function updateStudentTable() {
        var obj = {
            test: "hi"
        };
        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/GetStudents',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(obj),
            dataType: "json",
            success: function (data) {
                //console.log(data)
                //console.log(data.d) //1
                var result = JSON.parse(data.d)
                var table = $("#studentList tbody");
                table.empty();
                $.each(result, function (index, result) {
                    var row = $("<tr>").data('id', result.id);
                    row.append($("<td>").text(result.id));
                    row.append($("<td>").text(result.firstname));
                    row.append($("<td>").text(result.lastname));
                    row.append($("<td>").text(result.sex));
                    row.append($("<td>").text(result.dob));
                    row.append($("<td>").text(result.phone));
                    row.append($("<td>").text(result.email));
                    row.append($("<td>").html('<button type="button" id="update-btn" class="btn btn-primary update-btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>'));
                    row.append($("<td>").html('<button type="button" class="btn btn-primary btn-sm btn-delete deleteButton">Delete</button>'));
                    table.prepend(row);
                });
            },
            error: function (error) {
                console.log(error);
                var response = JSON.parse(error.responseText);
                console.log(response);
            }
        });
    }
    updateStudentTable();

    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    $('#btnBack').on('click', function () {
        clearModalform();
        $('#exampleModal').on();

    })
    
    $('#btnCloseTop').on('click', function () {
        clearModalform();
        $('#exampleModal').on();
    })
    $('#btnAdd').on('click', function () {
        clearModalform();
    })

   //Insert student data
    $("#btnAddstudent").click(function (e) {
        e.preventDefault(); //prevent default form submit action
        var Valfname = $('#AddStudentfname').val();
        var Vallname = $('#AddStudentlname').val();
        var Valsex = $('#AddStudentsex').val();
        var Valdob = $('#AddStudentdob').val();
        var Valphone = $('#AddStudentphone').val();
        var Valemail = $('#AddStudentemail').val();
        var Valcpsw = $('#AddconfirmPassword').val();
        var Valpsw = $('#AddPassword').val();
        var obj= {
            firstname: Valfname,
            lastname: Vallname,
            sex: Valsex,
            dob: Valdob,
            phone: Valphone,
            email: Valemail,
            psw: Valpsw,
            cpsw : Valcpsw
        };

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
        // Check if email is valid
        if (!validateEmail(Valemail)) {
            Swal.fire({
                background: '#fffff',
                icon: 'warning',
                text: 'Please enter a valid email address',
                iconColor: 'red',
                confirmButtonColor: '#3F3D56',
                showCloseButton: true
            });
            return; 
        }
        // Check if password and confirm password match
        if (Valpsw !== Valcpsw) {
            Swal.fire({
                background: '#fffff',
                icon: 'warning',
                text: 'Password does not match the confirm password',
                iconColor: 'red',
                confirmButtonColor: '#3F3D56',
                showCloseButton: true
            });
        } else {
            $.ajax({
                method: 'POST',
                url: '../AddService/AddStudent.svc/ajaxService2/appendStudent',
                data: JSON.stringify(obj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var result = data.d;
                    if (result === "1") {
                        Swal.fire({
                            background: '#fffff',
                            icon: 'success',
                            text: 'New record has been added successfuly',
                            iconColor: 'green',
                            confirmButtonColor: '#3F3D56',
                            showCloseButton: true
                        });
                        updateStudentTable();
                        clearModalform();
                    } else {
                        Swal.fire({
                            background: '#fffff',
                            icon: 'error',
                            text: 'Something went wrong',
                            iconColor: 'red',
                            confirmButtonColor: '#3F3D56',
                            showCloseButton: true
                        })
                    }
                },
                error: function (error) {
                    var response = JSON.parse(error.responseText);
                    console.log(response);
                }
            });
        }
        
    })

    function populateModal(id) {
        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/GetStudentstoupdate',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: id }),
            dataType: "json",
            success: function (data) {
                if (data.d == "0") {
                    /*console.log("error");*/
                } else {
                    var modalData = JSON.parse(data.d);
                    /*console.log(modalData);*/
                    $('#exampleModal').find('.modal-title').text('Update Student: ' + modalData[0].firstname);
                    $('#exampleModal').find('#AddStudentfname').val(modalData[0].firstname);
                    $('#exampleModal').find('#AddStudentlname').val(modalData[0].lastname);
                    $('#exampleModal').find('#AddStudentsex').val(modalData[0].sex);
                    $('#exampleModal').find('#AddStudentdob').val(modalData[0].dob);
                    $('#exampleModal').find('#AddStudentphone').val(modalData[0].phone);
                    $('#exampleModal').find('#AddStudentemail').val(modalData[0].email);
                    $('#exampleModal').find('#AddPassword').val(modalData[0].password);
                    $('#exampleModal').find('#AddconfirmPassword').val(modalData[0].password);
                    //set new id to button and rename, prevent the add button click event 
                    $('#exampleModal').find('#btnAddstudent').off('click');
                    $('#exampleModal').find('#btnAddstudent').attr('id', 'btnUpdate');
                    $('#exampleModal').find('#btnUpdate').text('Update');
                }
            },
            error: function (error) {
                var response = JSON.parse(error.responseText);
                console.log(response);
            }
        });
    }


    //delete data
    $(document).on('click', '.deleteButton', function () {
        var row = $(this).closest('tr');
        //console.log(row);
        var id = row.find('td:first').text();
        //console.log(id);

        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/DeleteStudent',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: id }),
            dataType: "json",
            success: function (data) {
                if (data.d == "1") {
                    Swal.fire({
                        title: 'Confirmation',
                        text: 'Are you sure you want to delete this row?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'Back',
                        confirmButtonColor: '#3F3D56'

                    }).then((result) => {
                        if (result.isConfirmed) {
                            row.remove();
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            Swal.close();
                        }
                    });
                } else {
                    console.log('delete error ');
                }
            },
            error: function (error) {
                console.log(error);
                var response = JSON.parse(error.responseText);
                console.log(response);
            }
        });
    });

    //update student 
    $(document).on('click', '.update-btn', function () {
        var row = $(this).closest('tr');
        var id = row.data('id');
        //console.log(id);
        populateModal(id);
        $(document).on('click', '#btnUpdate', function (e) {
            e.preventDefault();
            var newfname = $('#AddStudentfname').val();
            var newlname = $('#AddStudentlname').val();
            var newsex = $('#AddStudentsex').val();
            var newdob = $('#AddStudentdob').val();
            var newph = $('#AddStudentphone').val();
            var newemail = $('#AddStudentemail').val();
            var newpassword = $('#AddPassword').val();
            var newcpassword = $('#AddconfirmPassword').val();
            var studentobj = {
                id: id,
                firstname: newfname,
                lastname: newlname,
                sex: newsex,
                dob: newdob,
                phone: newph,
                email: newemail,
                password: newpassword
            };

            // Check if any field is empty
            for (var key in studentobj) {
                if (studentobj.hasOwnProperty(key) && studentobj[key] === '') {
                    Swal.fire({
                        background: '#fffff',
                        icon: 'alert',
                        text: 'Please complete all the information',
                        iconColor: 'red',
                        confirmButtonColor: '#3F3D56',
                        showCloseButton: true
                    });
                    return;
                }
            }
            // Check if email is valid
            if (!validateEmail(newemail)) {
                Swal.fire({
                    background: '#fffff',
                    icon: 'warning',
                    text: 'Please enter a valid email address',
                    iconColor: 'red',
                    confirmButtonColor: '#3F3D56',
                    showCloseButton: true
                });
                return;
            }

            // Check if password and confirm password match
            if (newpassword !== newcpassword) {
                Swal.fire({
                    background: '#fffff',
                    icon: 'warning',
                    text: 'Password does not match the confirm password',
                    iconColor: 'red',
                    confirmButtonColor: '#3F3D56',
                    showCloseButton: true
                });
            } else {
                $.ajax({
                    method: 'POST',
                    url: '../AddService/AddStudent.svc/ajaxService2/UpdateStudent',
                    data: JSON.stringify(studentobj),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        if (data.d == "0") {
                            Swal.fire({
                                background: '#fffff',
                                icon: 'error',
                                text: 'Something went wrong',
                                iconColor: 'red',
                                confirmButtonColor: '#3F3D56',
                                showCloseButton: true
                            })
                        } else {
                            Swal.fire({
                                background: '#fffff',
                                icon: 'success',
                                text: 'Record has been updated successfuly',
                                iconColor: 'green',
                                confirmButtonColor: '#3F3D56',
                                showCloseButton: true
                            });
                            updateStudentTable();
                            clearModalform();
                        }
                    },
                    error: function (error) {
                        var response = JSON.parse(error.responseText);
                        console.log(response);
                    }
                })

            }

        })

    });


    $('#inputSearch').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        //console.log(value.length)
        if (value.length === 0) {
            updateStudentTable();
        } else {
            $.ajax({
                method: 'POST',
                url: '../AddService/AddStudent.svc/ajaxService2/SearchStudent',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ search: value }),
                dataType: "json",
                success: function (data) {
                    //console.log(data)
                    //console.log(data.d) //1
                    var result = JSON.parse(data.d)
                    if (result.length === 0) {
                        var table = $("#studentList tbody");
                        table.empty();
                        var row = $("<tr>");
                        row.append($("<td colspan='8'>").text("No students found"));
                        table.append(row);
                    } else {
                        var table = $("#studentList tbody");
                        table.empty();
                        $.each(result, function (index, result) {
                            var row = $("<tr>").data('id', result.id);
                            row.append($("<td>").text(result.id));
                            row.append($("<td>").text(result.firstname));
                            row.append($("<td>").text(result.lastname));
                            row.append($("<td>").text(result.sex));
                            row.append($("<td>").text(result.dob));
                            row.append($("<td>").text(result.phone));
                            row.append($("<td>").text(result.email));
                            row.append($("<td>").html('<button type="button" id="update-btn" class="btn btn-primary update-btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>'));
                            row.append($("<td>").html('<button type="button" class="btn btn-primary btn-sm btn-delete deleteButton">Delete</button>'));
                            table.prepend(row);
                        });
                    }
                },
                error: function (error) {
                    console.log(error);
                    var response = JSON.parse(error.responseText);
                    console.log(response);
                }
            });
        }
    })



    

    function displayStudentInfo() {
        $('#studentInfoDisplay').html(function () {
            var stuFname = $('#studentFname').val();
            var stuLname = $('#studentlastname').val();
            var stuSex = $('#studentSex').val();
            var stuPhone = $('#studentphone').val();
            var stuDateob = $('#studentDobth').val();
            var stuEmail = $('#studentemail').val();
           
            var obj = {
                stuFname: stuFname,
                stuLname: stuLname,
                stuSex: stuSex,
                stuPhone: stuPhone,
                stuDateob: stuDateob,
                stuEmail: stuEmail
            };

            $.ajax({
                method: 'POST',
                url: '../Loginservices/loginService.svc/ajaxService1/GetStudents',
                data: JSON.stringify(obj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var result = JSON.parse(data.d)
                    $('#DisplayUsername').html(result[0].firstname);
                    $('#studentFname').val(result[0].firstname);
                    $('#studentlastname').val(result[0].lastname);
                    $('#studentSex').val(result[0].sex);
                    $('#studentphone').val(result[0].phone);
                    $('#studentDobth').val(result[0].dob);
                    $('#studentemail').val(result[0].email);
                    $('#studentFname').prop('disabled', true);
                    $('#studentlastname').prop('disabled', true);
                    $('#studentSex').prop('disabled', true);
                    $('#studentphone').prop('disabled', true);
                    $('#studentDobth').prop('disabled', true);
                    $('#studentemail').prop('disabled', true);
                },
                error: function (error) {
                    var response = JSON.parse(error.responseText);
                    console.log(response);
                }
            });
        });
    }

    displayStudentInfo();
});

