<%@page import="domain.Member"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <!--
            
                Author: Adwin Ong Kok Quan
                Tutorial Group: DIA (3)
                    
        -->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Star Path</title>
        <link rel="shortcut icon" href="favicon.ico" />
 
        <!--Plugins. I do not own these-->
        <script src="js/jquery-3.4.0.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <script src="js/bootstrap.min.js"></script>
        
        <!--Template-->
        <link rel="stylesheet" type="text/css" href="css/template.css">
        
        <link rel="stylesheet" type="text/css" href="css/index.css">
        
    </head>
    <body>
        <div id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>
            
        <div id="content">
		
			<!--On Going Event-->
			<div class="heading">	
				<a href="event.jsp"><h1>Upcoming Events</h1>
				<p>Don't miss out on your stars!</p></a>    
            </div>
			<div class="product-display">
				<!--Carousel-->
				<div id="demo" class="carousel slide" data-ride="carousel">
					
					<!-- Indicators -->
					<ul class="carousel-indicators">
						<li data-target="#demo" data-slide-to="0"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
						<li data-target="#demo" data-slide-to="3" class="active"></li>
					</ul>
						
					<!-- The slideshow -->
					<div class="carousel-inner">
						<div class="carousel-item">
							<a href="event.jsp"><img src="img/concertDB/PromoPic/disney.jpg" alt=""></a>
						</div>
						<div class="carousel-item">
							<a href="event.jsp"><img src="img/concertDB/PromoPic/jay.jpg" alt=""></a>
						</div>
						<div class="carousel-item">
							<a href="event.jsp"><img src="img/concertDB/PromoPic/kenny.jpg" alt=""></a>
						</div>
						<div class="carousel-item active">
							<a href="event.jsp"><img src="img/concertDB/PromoPic/tsaichin.jpg" alt=""></a>
						</div>
					</div>
						
					<!-- Left and right controls -->
					<a class="carousel-control-prev" href="#demo" data-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					</a>
					<a class="carousel-control-next" href="#demo" data-slide="next">
						<span class="carousel-control-next-icon"></span>
					</a>
						
				</div>
			</div>
            <!--Display-->
            <div id="display">
                <!--Live Video-->    
                <div class="heading">
                    <a href="#"><h2>Live video</h2>
                        <p></p></a>
                </div>
                <div class="video-display">
				<!--Carousel-->
				<div id="video" class="carousel slide" data-ride="carousel">
					
					<!-- Indicators -->
					<ul class="carousel-indicators">
						<li data-target="#video" data-slide-to="0"></li>
						<li data-target="#video" data-slide-to="1" class="active"></li>
					</ul>
						
					<!-- The slideshow -->
					<div class="carousel-inner">
						<div class="carousel-item">
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
						</div>
						<div class="carousel-item active">
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
							<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
						</div>
					</div>
						
					<!-- Left and right controls -->
					<a class="carousel-control-prev" href="#video" data-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					</a>
					<a class="carousel-control-next" href="#video" data-slide="next">
						<span class="carousel-control-next-icon"></span>
					</a>
						
				</div>
            </div>
                
            <!--Login Page Link-->
            <div id="promote">
                <div class="container-right">
                    <img src="img/index/joinus.jpg" alt="Join Us" title="Join Us">
                    <div class="promote-text">
                        <h1>Join us!</h1>
                        <p>Become our members to enjoy the benefits!</p>
                        <ul>
                            <li>Life-time AND free membership</li>
                            <li>Enjoys reward point with tickets purchase!</li>
							<li>Exchanges gifts with points!</li>
                            <li>Never misses any events with emails notification!</li>
                        </ul>
                    </div>
                </div>
                <div class="container-left">
                    <a href="login.jsp"><button class="linkbtn">Click to Learn More <span style="font-size: 30px;margin: 10px;">&gt;</span></button></a>
                </div>
                    
            </div>
		</div>
            
        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
            
    </body>
</html>