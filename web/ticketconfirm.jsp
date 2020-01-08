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
<%
    ConcertDA cDA = new ConcertDA();

    int qty = Integer.parseInt(request.getParameter("qty"));

    Concert selectedConcert = (Concert) session.getAttribute("selectedConcert");
    cDA.closeConnection();
    SeatDA sDA = new SeatDA();
    String seatId = request.getParameter("seat");
    SeatType selectedSeatType = sDA.getRecordbyId(seatId);
%>

<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Confirm Purchase</title>
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
            <form action="TicketPurchase" method="POST">
                <%                    out.println("<h2>Your Ticket is :</h2>");
                    out.println("Concert : " + selectedConcert.getConcertName() + "<br/>");
                    out.println("Date : " + selectedConcert.getConcertDate() + "<br/>");
                    out.println("Venue : " + selectedConcert.getVenue().getVenueName() + "<br/>");
                    out.println("Quantity : " + qty);
                    double unitTicketPrice = selectedConcert.getBasePrices() * selectedSeatType.getPriceModifier();
                    out.println(String.format("Seat Price : RM %.02f", unitTicketPrice) + "<br/>");
                    out.println("Total Price : RM " + String.format("%.02f", unitTicketPrice * qty));

                    Ticket ticket = new Ticket(qty, selectedConcert, selectedSeatType, member);
                %>
                <button id="login" type="submit" class="primarybtn" onclick =<%
                    session.setAttribute("ticket", ticket);
                        %>>Purchase</button>
                <button id="login" type="reset" class="secondarybtn" onclick="history.back()">Cancel</button>
            <span style="color:red;">${ticketErrMsg}</span>
            </form>
        </div>

        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>
</html>
