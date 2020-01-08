<%-- 
    Document   : loginsucess
    Created on : Jan 4, 2020, 2:32:24 AM
    Author     : Adwin Ong Kok Quan
--%>

<%@page import="domain.Member"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Login Success</title>
        <link rel="shortcut icon" href="favicon.ico" />

        <!--Plugins. I do not own these-->
        <script src="js/jquery-3.4.0.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css">
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
                <h3>Welcome, <%= member.getMemberName()%></h3>
                <p>Redirect in <span id="secLeft"></span> sec...</p>

                <script>
                    function lapse(second = 5) {
                        document.getElementById("secLeft").innerHTML = second;
                        if (second <= 0)
                            window.location = "index.jsp";
                        else
                            setTimeout(() => lapse(second - 1), 1000);
                        
                    }

                    lapse();
                </script>
            </div>
        </div>
                
        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>
</html>
