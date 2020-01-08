<%@page import="domain.Member"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Profile</title>
        <link rel="shortcut icon" href="favicon.ico" />

        <!--Plugins. I do not own these-->
        <script src="js/jquery-3.4.0.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <script src="js/bootstrap.min.js"></script>
        <!---->

        <!--Template-->
        <link href="css/template.css" rel="stylesheet" type="text/css" />

        <script src="js/misc.js" type="text/javascript"></script>
        <link href="css/login.css" rel="stylesheet" type="text/css" />
        <link href="css/button.css" rel="stylesheet" type="text/css" />

    </head>

    <body>
        <div id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>

        <div id="content">
            <div align="center" style="margin: 40px auto; height:400px;">
                <div id="login-form">
                    <h2>Profile</h2>
                    <form name="logout" action="LogoutProcess" method="post"><h1>
                            <%out.print(member.getMemberName());%>
                        </h1>
                        <p>Reward Point: <%out.print(member.getRewardPoint());%></p>
                        <button id="login" type="submit" class="primarybtn">Logout</button>
                    </form>
                </div>	
            </div>
        </div>

        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>

</html>