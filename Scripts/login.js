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
                    //console.log(typeof (data.d));  //string
                    //console.log(typeof (data)); //obj
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

    $('#btnLogout').click(function () {
        $.ajax({
            method: 'POST',
            url: '../Loginservices/loginService.svc/ajaxService1/Logout',
            success: function (data) {
                if (data.d == "Hello pretty girl") {
                    Swal.fire({
                        background: '#fffff',
                        icon: 'error',
                        text: 'Incorrect username or password',
                        iconColor: '',
                        confirmButtonColor: '#3F3D56',
                        showCloseButton: true
                    })
                } else {
                    alert("hI");
                }
                //console.log(typeof (data))
                /*alert(data.d);*/
                // Reload the page after logout
                //        window.location.href = 'Default.aspx';

            },
            error: function (error) {
                // Handle the error
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

    // Function to retrieve and populate student data
    function loadStudentData() {
        $.ajax({
            url: '../AddService/AddStudent.svc/ajaxService2/GetStudents', 
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Clear existing table rows
                $('#studentList tbody').empty();

                // Populate the table with the retrieved data
                $.each(data, function (index, student) {
                    var row = $('<tr>');
                    row.append($('<td>').text(student.Id));
                    row.append($('<td>').text(student.Firstname));
                    row.append($('<td>').text(student.Lastname));
                    row.append($('<td>').text(student.Sex));
                    row.append($('<td>').text(student.Dob));
                    row.append($('<td>').text(student.Phone));
                    row.append($('<td>').text(student.Email));
                    row.append($('<td>').html('<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>'));
                    row.append($('<td>').html('<button type="button" class="btn btn-primary btn-sm">Delete</button>'));
                    $('#studentList tbody').append(row);
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error: ' + errorThrown);
            }
        });
    }

    // Call the function to initially load student data
    loadStudentData();
});

