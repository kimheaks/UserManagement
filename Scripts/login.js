
$(document).ready(function () {

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
        $.ajax({
            method: 'POST',
            url: '../Loginservices/loginService.svc/ajaxService1/DoWork',
            data: JSON.stringify({ username: Valusername, password: Valpassword }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // data is the return value of your WCF service method
                if (data.d == "1") {
                    window.location.href = 'Default.aspx';
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
            }

        });
    });

    //logout
    $('#btnLogout').click(function () {
        $.ajax({
            method: 'POST',
            url: '../Loginservices/loginService.svc/ajaxService1/Logout',
            success: function (data) {
                //if (data.d == "Hello pretty girl") {
                //    Swal.fire({
                //        background: '#fffff',
                //        icon: 'error',
                //        text: 'Incorrect username or password',
                //        iconColor: '',
                //        confirmButtonColor: '#3F3D56',
                //        showCloseButton: true
                //    })
                //} else {
                //    alert("hI");
                //}
                console.log("log out successfuly");
            },
            error: function (error) {
                alert('Error: ' + error);
            }
        });
    });

    var inputname = ['#inputfname','#inputlastname']
    var inputsex = $('#inputSex');
    var inputdob = $('#inputdob');
    var inputphone = $('#inputphone');
    var inputemail = $('#inputemail');

    $(inputsex).keypress(function (event) {
        alert("hi");
    });

   //fetch data 
    $("#btnAddstudent").click(function (e) {
        e.preventDefault(); // prevent default form submit action
        var Valfname = $('#AddStudentfname').val();
        var Vallname = $('#AddStudentlname').val();
        var Valsex = $('#AddStudentsex').val();
        var Valdob = $('#AddStudentdob').val();
        var Valphone = $('#AddStudentphone').val();
        var Valemail = $('#AddStudentemail').val();
        var obj= {
            firstname: Valfname,
            lastname: Vallname,
            sex: Valsex,
            dob: Valdob,
            phone: Valphone,
            email: Valemail
        };
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
                    })
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

    var obj = {
        test: "hi"
    };

    //display on table
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
                row.append($("<td>").html('<button type="button" class="btn btn-primary update-btn btn-sm" data-bs-toggle="modal" id="updated-modal" data-bs-target="#exampleModal">Update</button>'));
                row.append($("<td>").html('<button type="button" class="btn btn-primary btn-sm btn-delete deleteButton">Delete</button>'));
                table.append(row);
            });
        },
        error: function (error) {
            console.log(error);
            var response = JSON.parse(error.responseText);
            console.log(response);
        }
    });

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
                    row.remove();
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
        console.log(row);
        var id = row.find('td:first').text();
        var Valfname = $('#AddStudentfname').val();
        var Vallname = $('#AddStudentlname').val();
        var Valsex = $('#AddStudentsex').val();
        var Valdob = $('#AddStudentdob').val();
        var Valphone = $('#AddStudentphone').val();
        var Valemail = $('#AddStudentemail').val();
        var obj = {
            firstname: Valfname,
            lastname: Vallname,
            sex: Valsex,
            dob: Valdob,
            phone: Valphone,
            email: Valemail
        };
        console.log(id);
        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/UpdateStudent',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: id }),
            dataType: "json",
            success: function (data) {
                if (data.d == "1") {
                    alert("updated sucessfuly")
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

});

