<%-- 
    Document   : concert
    Created on : Jan 5, 2020, 10:37:16 PM
    Author     : Adwin Ong Kok Quan
--%>
<%@page import="domain.SeatType"%>
<%@page import="da.SeatDA"%>
<%@page import="java.util.ArrayList"%>
<%@page import="da.ConcertDA"%>
<%@page import="domain.Concert"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    ConcertDA cDA = new ConcertDA();
    String concertId = request.getParameter("concertId");
    String newId = request.getParameter("newId");
    newId = newId == null ? "" : newId;

    if (!newId.isEmpty()) {
        concertId = new String(newId);
    }

    Concert selectedConcert = cDA.getRecordById(concertId);
    ArrayList<Concert> concertRSList = (ArrayList<Concert>) cDA.getAllRecord();
    session.setAttribute("selectedConcert", selectedConcert);
%>

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
        <script>
            function seatChange() {
                var selection = document.getElementById("concertSelect");
                var val = selection.options[ selection.selectedIndex ].value;
                window.location.replace("concert.jsp?newId=" + val);
            }
        </script>

    </head>
    <body>
        <div id="navigation"><%@include file='WEB-INF/navigation.jsp'%></div>

        <%            if (member == null) {
                request.setAttribute("loginErrMsg", "You need to login to purchase");
                RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
                rd.forward(request, response);
            }
        %>

        <div id="content">
            <%
                out.println("<img height=\"300px\" style=\"float:left;\" src=\"img/concertDB/PromoPic/" + selectedConcert.getConcertImg() + "\">");
                out.println(selectedConcert.getConcertName() + "<br/>");
                out.println(selectedConcert.getConcertDate() + "<br/>");
                out.println(selectedConcert.getVenue().getVenueName() + "<br/>");
                out.println(selectedConcert.getVenue().getVenueAddress() + "<br/>");
            %>
            <h2>Purchase Ticket Form</h2>

            <form action="ticketconfirm.jsp" method="post">
                <div class="form-group">
                    <!--Dropdown Box for Concert-->
                    <select class="form-control" id="concertSelect" name="concertSelect" onchange="seatChange()">
                        <%
                            for (Concert concert : concertRSList) {
                                out.print("<option value=\"" + concert.getConcertId() + "\"");
                                if (concert.getConcertId().equalsIgnoreCase(selectedConcert.getConcertId())) {
                                    out.println(" selected");
                                }
                                out.print(">");
                                out.print(concert.getConcertName());
                                out.print("</option>");
                            }
                        %>
                    </select>
                    <h2>Seat Layout</h2>
                    <%
                        out.println("<img height=\"300px\" src=\"img/concertDB/map/" + selectedConcert.getVenue().getVenueImage() + "\"></div>");
                    %>

                    <!--Radio Button for Seat Type-->
                    <label>Seat Type</label>
                    <%
                        SeatDA sDA = new SeatDA();

                        ArrayList<SeatType> SeatTypeRSList = new ArrayList<SeatType>(sDA.getRecordByVenue(selectedConcert.getVenue().getVenueId()));

                        for (SeatType seat : SeatTypeRSList) {
                            out.println("<div class=\"radio\"><labeL><input type=\"radio\" name=\"seat\" value=\"" + seat.getSeatId() + "\" required/>");
                            out.println(seat.getTypeName() + " - RM " + String.format("%.02f", selectedConcert.getBasePrices() * seat.getPriceModifier()));
                            out.println("</label></div>");
                        }
                    %>
                    <!--Seat Qty-->
                    <label>Seat Quantity</label>
                    <input type="number" name="qty" min="1" max="9999" value="1">
                    <!--Btn-->
                    <button id="continue" type="submit" class="primarybtn">Continue</button>
                </div>
            </form>
        </div>

        <div id="footer"><%@include file='WEB-INF/footer.jsp'%></div>
    </body>
</html>
