﻿$(document).ready(function () {

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
   
   
    $("#btnAddstudent").click(function (e) {
        e.preventDefault(); // prevent default form submit action
        var Valfname = $('#AddStudentfname').val();
        var Vallname = $('#AddStudentlname').val();
        var Valsex = $('#AddStudentsex').val();
        var Valdob = $('#AddStudentdob').val();
        var Valphone = $('#AddStudentphone').val();
        var Valemail = $('#AddStudentemail').val();
        var obj: {fname: Valfname, lname: Vallname, sex: Valsex, dob: Valdob, phone: Valphone, email: Valemail };
        $.ajax({
            method: 'POST',
            url: '../AddService/AddStudent.svc/ajaxService2/appendStudent',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var result = data.d
                Swal.fire({
                    background: '#fffff',
                    icon: 'error',
                    text: result,
                    iconColor: '',
                    confirmButtonColor: '#3F3D56',
                    showCloseButton: true
                })
            },
            error: function (error) {
                // Handle the error
                alert('Error: ' + error);
            }
        });
    });
   
})  