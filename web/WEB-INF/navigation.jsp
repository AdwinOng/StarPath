<%@page import="domain.Member"%>
<%
    Member member = (Member) session.getAttribute("authenticatedMember");
%>
<ul class="menu-list">
    <li>
        <a href="index.jsp"><img class="logo" src="img/logo.png" alt="Star Path Home" title="Star Path Home"></a>
    </li>
    <li>
        <div class="dropdown">
            <button class="dropbtn"><a href="index.jsp">Home</a></button>
        </div>
    </li>
    <li>
        <div class="dropdown">
            <button class="dropbtn"><a href="event.jsp">Events</a></button>
        </div>
    </li>
    <li>
        <a href="cart.jsp"><img style="height: 25px; border-radius: 20px;" src="img/addtocart.png" title="View Cart" alt="View Cart">  View Cart</a>
    </li>
    <li id="acc-icon">
        <a href="<%= member != null ? "profile.jsp" : "login.jsp" %>"><img style="height: 25px; border-radius: 20px;" src="img/guest-icon.jpg" title="Login" alt="Login">
            <%= member != null ? member.getMemberName() : "Login" %>
        </a>
    </li>
</ul>
