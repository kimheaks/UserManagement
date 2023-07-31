<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Admlogin.login" %>

<!DOCTYPE html>

<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>    <%--JQuery--%>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <%--sweet alert--%>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css" />
    <link href="Content/style.css" rel="stylesheet" />
    <title>Login</title>
</head>
<body>
    <section>
        <div class="main-container">
            <div class="container">
                <div class="form-container">
                    <div class="column-left">
                        <div class="flex-left-side">
                            <img class="img-left" src="img/undraw_progressive_app_m-9-ms.svg" alt="alt"/>
                        </div>
                        
                    </div>
                    <div class="column-right">
                        <div class="flex-right-side">
                            <div class="form-login">
                                <form method="post" id="loginForm" name="loginForm">
                                    <div class="header-right text-center">
                                        <h1 class="taro text-center hundred-px">Sign in to continue</h1>
                                    </div>
                                    <div class="input-custom">
                                        <span class="p-left">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <input class="input" type="text" id="username" name="username" placeholder="Username" required="required" />
                                        <span class="focus-input"></span>
                                    </div>
                                    <div class="input-custom">
                                        <span class="p-left">
                                            <i class="fa fa-lock" aria-hidden="true"></i>
                                        </span>
                                        <input class="input" type="password" id="password" name="password" placeholder="Password" required="required"/>
                                        <span class="focus-input"></span>
                                    </div>
                                    <div class="input-custom">
                                       <button class="input-login" id="btnsubmit" type="submit" name="btnsubmit">Log In</button> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-container">
                    <a class="copy-right" href="#">&c copyright 2023 by AIB student. All right reserved.</a>
                </div>
            </div>
        </div>
    </section>
    <script type="text/javascript" src="Scripts/login.js" ></script>
</body>
</html>
