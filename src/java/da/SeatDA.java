package da;

import domain.Concert;
import domain.SeatType;
import domain.Venue;
import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class SeatDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "SEAT";
    private Connection conn;
    private PreparedStatement pstmt;
    private VenueDA vDA = new VenueDA();

    public SeatDA() {
        createConnection();
    }

    public SeatType getRecordbyId(String sID) {
        String queryStr = "SELECT * FROM " + tableName + " WHERE SID = ?";
        SeatType seat = null;
        try {
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, sID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                seat = new SeatType(rs.getString("SID"), vDA.getRecordById(rs.getString("VID")), rs.getString("STYPE"), rs.getDouble("SPRICEMODIFIER"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(SeatDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return seat;
    }

    public ArrayList getRecordByVenue(String vID) {
        ArrayList<SeatType> SeatTypeRSList = new ArrayList<>(getRecordCountByVenue(vID));
        try {
            SeatType seat;

            String queryStr = "SELECT * FROM " + tableName + " WHERE VID = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vID);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                seat = new SeatType(rs.getString("SID"), vDA.getRecordById(rs.getString("VID")), rs.getString("STYPE"), rs.getDouble("SPRICEMODIFIER"));
                SeatTypeRSList.add(seat);
            }

        } catch (SQLException ex) {
            Logger.getLogger(SeatDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!SeatTypeRSList.isEmpty()) {
            return SeatTypeRSList;
        } else {
            return null;
        }
    }

    public int getRecordCountByVenue(String vID) {
        try {
            String queryStr = "SELECT COUNT(*) FROM " + tableName + " WHERE VID = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (SQLException ex) {
            Logger.getLogger(SeatDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(SeatDA.class.getName()).log(Level.SEVERE, null, ex);
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
