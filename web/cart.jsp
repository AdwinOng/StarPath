<%-- 
    Document   : concert
    Created on : Jan 5, 2020, 10:37:16 PM
    Author     : Adwin Ong Kok Quan
--%>
<%@page import="da.TicketDA"%>
<%@page import="domain.Ticket"%>
<%@page import="domain.SeatType"%>
<%@page import="da.SeatDA"%>
<%@page import="java.util.ArrayList"%>
<%@page import="da.ConcertDA"%>
<%@page import="domain.Concert"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Purchase Ticket Form</title>
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

        <%            if (member == null) {
                request.setAttribute("loginErrMsg", "You need to login to view cart");
                RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
                rd.forward(request, response);
            }
        %>

        <div id="content">
            <%
                TicketDA tDA = new TicketDA();
                ArrayList<Ticket> ticketList = (ArrayList<Ticket>) tDA.getRecordByMemberId(member.getMemberId());
                for (Ticket t : ticketList) {
                    out.println("<div style=\"text-align: center;text-shadow: 2px 2px #ff0000;height: 300px; margin-bottom: 100px; background-image: url('img/concertDB/PromoPic/" + t.getConcert().getConcertImg() + "')\">");
                    out.println("<h4>" + t.getConcert().getConcertName() + "</h4><br/>");
                    out.println("<p><b>Date :</b>" + t.getConcert().getConcertDate() + "</p><br/><br/>");
                    out.println("<p><b>Venue :</b>" + t.getConcert().getVenue().getVenueAddress() + "</p>");
                    out.println("<p><b>Seat Quantity :</b>" + t.getTicketQty() + "</p>");
                    out.println("</div>");
                }

            %>
        </div>

        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>
</html>
