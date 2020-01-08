<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Register</title>
        <link rel="shortcut icon" href="favicon.ico" />

        <!--Plugins. I do not own these-->
        <script src="js/jquery-3.4.0.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <script src="js/bootstrap.min.js"></script>
        <script src="https://www.google.com/reCAPTCHA/api.js" async defer></script>
        <!---->	

        <!--Template-->
        <link href="css/template.css" rel="stylesheet" type="text/css" />
        <link href="css/button.css" rel="stylesheet" type="text/css" />

        <script src="js/misc.js" type="text/javascript">function</script>
    </head>

    <body>
        <div  id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>

        <div id="content">
            <div align="center" style="margin: 40px auto; height:400px; width: 50%;">
                <h3>Member Registration Form</h3>
                <span>Already a member? <a href="login.jsp" style="text-decoration: underline;">Login</a> here.</span>
                <form name="register" action="RegisterProcess" method="post">                   
                    <div class="form-group">
                        <input type="text" class="form-control" name="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="pwd" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="pwdconfirm" placeholder="Confirm Password">
                    </div>
                    <button id="register" type="submit" class="primarybtn">Sign Up</button>
                    <span style="color:red;">${regErrMsg}</span>
                </form>
            </div>
        </div>


        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>

    </body>
</html>
