

$(document).ready(function() {

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


})