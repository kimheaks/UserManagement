$(document).ready(function () {

    const $imgDiv = $('#imgUpload');
    const $img = $('#photo');
    const $file = $('#file');
    const $uploadBtn = $('#uploadBtn');

    // If user hovers on img div
    $imgDiv.on('mouseenter', function () {
        $uploadBtn.css('display', 'block');
    });

    // If we hover out from img div
    $imgDiv.on('mouseleave', function () {
        $uploadBtn.css('display', 'none');
    });

    $file.on('change', function () {
        const choosedFile = this.files[0];

        if (choosedFile) {
            const reader = new FileReader();

            reader.onload = function () {
                $img.attr('src', reader.result);
            };

            reader.readAsDataURL(choosedFile);
        }
    });

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
        var student = { username: Valusername, password: Valpassword };

        if (Valusername == 0 || Valpassword == 0) {
            Swal.fire({
                background: '#fffff',
                icon: 'info',
                text: 'Please enter username and password to continue',
                iconColor: '',
                confirmButtonColor: '#3F3D56',
                showCloseButton: true
            })
        } else {
            $.ajax({
                method: 'POST',
                url: '../Loginservices/loginService.svc/ajaxService1/DoWork',
                data: JSON.stringify(student),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var result = data.d;
                    if (result == "1") {
                        window.location.href = 'Default.aspx';
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
                    alert("error")
                    var response = JSON.parse(error.responseText);
                    console.log(response);
                }

            });

        }
    });

    //logout
    $('#btnLogout').click(function () {
        $.ajax({
            method: 'POST',
            url: '../Loginservices/loginService.svc/ajaxService1/Logout',
            success: function (data) {
                console.log("log out successfuly");
            },
            error: function (error) {
                alert('Error: ' + error);
                var response = JSON.parse(error.responseText);
                console.log(response);
            }
        });
    });
    $('#btnLogoutStudent').click(function () {
        $.ajax({
            method: 'POST',
            url: '../Loginservices/loginService.svc/ajaxService1/Logout',
            success: function (data) {
                console.log("log out successfuly");
            },
            error: function (error) {
                alert('Error: ' + error);
                var response = JSON.parse(error.responseText);
                console.log(response);
            }
        });
    });


    //input validation
    $('#AddStudentfname, #AddStudentlname').on('keydown', function (event) {
        if (!event.key.match(/^[a-zA-Z]+$/)) {
            event.preventDefault(); // Prevent the input of non-alphabetic characters
        }
    });

    //$('#AddStudentphone').on('keydown', function (event) {
    //    if (
    //        event.key !== 'Tab' && // Allow Tab key
    //        !(event.ctrlKey && event.key === 'z') && // Allow Ctrl+Z
    //        !event.key.match(/^[0-9]+$/) // Validate numeric input
    //    ) {
    //        event.preventDefault();
    //    }
    //});

    function clearModalform() {
        $('#exampleModal').find('#AddStudentfname').val('');
        $('#exampleModal').find('#AddStudentlname').val('');
        $('#exampleModal').find('#AddStudentsex').val('');
        $('#exampleModal').find('#AddStudentdob').val('');
        $('#exampleModal').find('#AddStudentphone').val('');
        $('#exampleModal').find('#AddStudentemail').val('');
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
                console.log(data)
                console.log(data.d) //1
                var result = JSON.parse(data.d)
                console.log(result[0].id);   //access array of obj 
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
        var obj= {
            firstname: Valfname,
            lastname: Vallname,
            sex: Valsex,
            dob: Valdob,
            phone: Valphone,
            email: Valemail,
            cpsw : Valcpsw
        };
        if(Val)
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
    })

    //delete data
    $(document).on('click', '.deleteButton', function () {
        var row = $(this).closest('tr');
        console.log(row);
        var id = row.find('td:first').text();
        console.log(id);

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
        console.log(id);
        populateModal(id);
        $(document).on('click', '#btnUpdate', function (e) {
            e.preventDefault();
            var newfname = $('#AddStudentfname').val();
            var newlname = $('#AddStudentlname').val();
            var newsex = $('#AddStudentsex').val();
            var newdob = $('#AddStudentdob').val();
            var newph = $('#AddStudentphone').val();
            var newemail = $('#AddStudentemail').val();
            var studentobj = {
                id: id,
                firstname: newfname,
                lastname: newlname,
                sex: newsex,
                dob: newdob,
                phone: newph,
                email: newemail
            };
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

        })

    });

    function populateModal(id) {
        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/GetStudentstoupdate',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: id }),
            dataType: "json",
            success: function (data) {
                if (data.d == "0") {
                    console.log("error");
                } else {
                    var modalData = JSON.parse(data.d);;
                    $('#exampleModal').find('.modal-title').text('Update Student: ' + modalData[0].firstname);
                    $('#exampleModal').find('#AddStudentfname').val(modalData[0].firstname);
                    $('#exampleModal').find('#AddStudentlname').val(modalData[0].lastname);
                    $('#exampleModal').find('#AddStudentsex').val(modalData[0].sex);
                    $('#exampleModal').find('#AddStudentdob').val(modalData[0].dob);
                    $('#exampleModal').find('#AddStudentphone').val(modalData[0].phone);
                    $('#exampleModal').find('#AddStudentemail').val(modalData[0].email);
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

    $('#inputSearch').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        console.log(value.length)
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
                    console.log(data)
                    console.log(data.d) //1
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
    

});

