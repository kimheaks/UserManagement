<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="Admlogin.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <header>
        <div class="container-lg">
            <div class="jumbotron py-4">
                <nav class="navbar navbar-light bg-light">
                  <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </nav>
                <address>
                    One Microsoft Way<br />
                    Redmond, WA 98052-6399<br />
                    <abbr title="Phone">P:</abbr>
                    425.555.0100
                </address>

                <address>
                    <strong>Support:</strong>   <a href="mailto:Support@example.com">Support@example.com</a><br />
                    <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
                </address>
            </div>
        </div>
    </header>
</asp:Content>
