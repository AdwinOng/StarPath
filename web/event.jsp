<%@page import="da.ConcertDA"%>
<%@page import="java.util.ArrayList"%>
<%@page import="domain.Concert"%>

<%
    ConcertDA cDA = new ConcertDA();
    ArrayList<Concert> concertRSList = (ArrayList<Concert>) cDA.getAllRecord();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Events</title>
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
        <link href="css/event.css" rel="stylesheet" type="text/css" />

        <script src="js/misc.js" type="text/javascript">function</script>
    </head>

    <body>
        <div  id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>

        <div id="content">
            <div class="event-display">
                <div class="heading">
                    <h1>All Events</h1>
                    <p></p>
                </div>
                <%                    for (Concert event : concertRSList) {
                        out.println("<div class=\"event-items\">");
                        out.println("<div class=\"heading\">");
                        out.println("<h1>" + event.getConcertName() + "</h1>");
                        out.println("</div>");
                        out.println("<div class=\"promo-art\"><img style=\"width:100%;height:1000px;\"src=\"img/concertDB/PromoPic/" + event.getConcertImg() + "\"></div>");
                        out.println("<div class=\"event-detail\">");
                        out.println("<form action=\"concert.jsp\" method=\"POST\">");
                        out.println("<button id=\"login\" type=\"submit\" class=\"primarybtn\">Purchase Ticket</button>");
                        out.println("<span class=\"info-title\">Date</span><br/>");
                        out.println(event.getConcertDate() + "<br/>");
                        out.println("<span class=\"info-title\">Venue</span><br/>");
                        out.println(event.getVenue().getVenueName() + "<br/>");
                        out.println(event.getVenue().getVenueAddress() + "<br/>");
                        out.println("<span class=\"info-title\">Concert Base Price</span><br/>");
                        out.println("RM " + String.format("%.2f", event.getBasePrices()) + "<br/>");
                        out.println("<span class=\"info-title\">About " + event.getBand().getBandName() + "</span><br/>");
                        out.println(event.getBand().getBandDesc() + "<br/>");
                        out.println("<input type=\"hidden\" id=\"concertId\" name=\"concertId\" value=\"" + event.getConcertId() + "\">");
                        out.println("</form>");
                        out.println("</div>");
                        out.println("</div>");
                    }
                %>
            </div>
        </div>


        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>

    </body>
</html>
