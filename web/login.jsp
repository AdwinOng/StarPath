<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Login Page</title>
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

    <body onload="start();">
        <div id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>

        <div id="content">
            <div align="center" style="margin: 40px auto; height:400px;">
                <div id="login-form">
                    <h2>Member Login</h2>
                    <form name="login" action="LoginProcess" method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" name="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="pwd" placeholder="Password">
                        </div>
                        <button id="login" type="submit" class="primarybtn">Login</button>
                        <span style="color:red;">${loginErrMsg}</span>
                    </form>
                </div>
                <span>New member? <a href="reg.jsp" style="text-decoration: underline">Register</a> here.</span>		
            </div>
        </div>

        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>

</html>