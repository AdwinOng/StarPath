package da;

import domain.SeatType;
import domain.Ticket;
import domain.Ticket;
import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TicketDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "Ticket";
    private Connection conn;
    private PreparedStatement pstmt;

    public TicketDA() {
        createConnection();
    }

    public int addRecord(Ticket ticket) throws SQLException {
        String insertStr = "INSERT INTO " + tableName + " VALUES(?, ?, ?, ?, ?)";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setString(1, ticket.getTicketId());
        pstmt.setInt(2, ticket.getTicketQty());
        pstmt.setString(3, ticket.getConcert().getConcertId());
        pstmt.setString(4, ticket.getSeat().getSeatId());
        pstmt.setString(5, ticket.getMember().getMemberId());
        int rows = pstmt.executeUpdate();

        return rows;

    }

    public ArrayList<Ticket> getRecordByMemberId(String mID) {
        ArrayList<Ticket> ticketRSList = new ArrayList<Ticket>(getRecordCountByMemberId(mID));
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE MID = ?";
            ConcertDA cDA = new ConcertDA();
            SeatDA sDA = new SeatDA();
            MemberDA mDA = new MemberDA();
            Ticket ticket = new Ticket();
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, mID);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                ticketRSList.add(new Ticket(rs.getString("TID"), rs.getInt("TQTY"), cDA.getRecordById(rs.getString("CID")), sDA.getRecordbyId(rs.getString("SID")), mDA.getRecordById(rs.getString("MID"))));
            }

        } catch (SQLException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!ticketRSList.isEmpty()) {
            return ticketRSList;
        } else {
            return null;
        }
    }

    public ArrayList<Ticket> getRecordByConcert(String cID) {
        ArrayList<Ticket> ticketRSList = new ArrayList<Ticket>(getRecordCountByConcertId(cID));
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE CID = ?";
            ConcertDA cDA = new ConcertDA();
            SeatDA sDA = new SeatDA();
            MemberDA mDA = new MemberDA();
            Ticket ticket = new Ticket();
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, cID);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                ticketRSList.add(new Ticket(rs.getString("TID"), rs.getInt("TQTY"), cDA.getRecordById(rs.getString("CID")), sDA.getRecordbyId(rs.getString("SID")), mDA.getRecordById(rs.getString("MID"))));
            }

        } catch (SQLException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!ticketRSList.isEmpty()) {
            return ticketRSList;
        } else {
            return null;
        }
    }

    public int getRecordCount() {
        try {
            String queryStr = "SELECT COUNT(*) FROM " + tableName;

            pstmt = conn.prepareStatement(queryStr);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (SQLException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    public int getRecordCountByMemberId(String mID) {
        try {
            String queryStr = "SELECT COUNT(*) FROM " + tableName + " WHERE MID = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, mID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (SQLException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    public int getRecordCountByConcertId(String cID) {
        try {
            String queryStr = "SELECT COUNT(*) FROM " + tableName + " WHERE cID = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, cID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (SQLException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(TicketDA.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex2) {

        }

    }

    private void shutDown() {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException ex) {
            }
        }
    }

    public void closeConnection() {
        //Can add any checking as precondition for closing connection
        shutDown();
    }
}
