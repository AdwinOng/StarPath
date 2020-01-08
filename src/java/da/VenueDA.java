package da;

import domain.Venue;
import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class VenueDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "Venue";
    private Connection conn;
    private PreparedStatement pstmt;

    public VenueDA() {
        createConnection();
    }

    public int addRecord(Venue venue) throws SQLException {
        String insertStr = "INSERT INTO " + tableName + " VALUES(?, ?, ?, ?, ?, ?)";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setString(1, venue.getVenueId());
        pstmt.setString(2, venue.getVenueName());
        pstmt.setString(3, venue.getVenueAddress());
        pstmt.setString(4, venue.getState());
        pstmt.setString(5, String.valueOf(venue.getSeatQty()));
        pstmt.setString(6, venue.getVenueImage());
        int rows = pstmt.executeUpdate();

        return rows;

    }

    public Venue getRecordById(String vID) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE VID = ?";
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Venue(vID, rs.getString("vName"), rs.getString("vAdd"), rs.getString("vState"), rs.getInt("vSeatQty"), rs.getString("vImg"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(VenueDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public ArrayList getRecordByName(String vName) {
        ArrayList<Venue> venueRSList = new ArrayList<>(getRecordCount());
        try {
            Venue venue;

            String queryStr = "SELECT * FROM " + tableName + " WHERE VNAME = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vName);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                venue = new Venue(rs.getString("vId"), rs.getString("vName"), rs.getString("vAdd"), rs.getString("vState"), rs.getInt("vSeatQty"), rs.getString("vImg"));
                venueRSList.add(venue);
            }

        } catch (SQLException ex) {
            Logger.getLogger(VenueDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!venueRSList.isEmpty()) {
            return venueRSList;
        } else {
            return null;
        }
    }

    public ArrayList getRecordByAddress(String add) {
        ArrayList<Venue> venueRSList = new ArrayList<>(getRecordCount());
        try {
            Venue venue;
            String queryStr = "SELECT * FROM " + tableName + " WHERE VADD = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, add);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                venue = new Venue(rs.getString("vId"), rs.getString("vName"), rs.getString("vAdd"), rs.getString("vState"), rs.getInt("vSeatQty"), rs.getString("vImg"));
                venueRSList.add(venue);
            }

        } catch (SQLException ex) {
            Logger.getLogger(VenueDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
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
            Logger.getLogger(VenueDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(VenueDA.class.getName()).log(Level.SEVERE, null, ex);
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
