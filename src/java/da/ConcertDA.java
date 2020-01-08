package da;

import domain.Concert;
import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConcertDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "Concert";
    private Connection conn;
    private PreparedStatement pstmt;

    public ConcertDA() {
        createConnection();
    }

    public int addRecord(Concert concert) throws SQLException {
        String insertStr = "INSERT INTO " + tableName + " VALUES(?, ?, ?, ?, ?, ? ,?)";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setString(1, concert.getConcertId());
        pstmt.setString(2, concert.getConcertName());
        pstmt.setString(3, String.valueOf(concert.getConcertDate().getTime()));
        pstmt.setString(4, concert.getBand().getBandID());
        pstmt.setString(5, concert.getVenue().getVenueId());
        pstmt.setString(6, String.valueOf(concert.getBasePrices()));
        pstmt.setString(7, concert.getConcertImg());
        int rows = pstmt.executeUpdate();

        return rows;

    }

    public Concert getRecordById(String cID) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE CID = ?";
            VenueDA vda = new VenueDA();
            BandDA bda = new BandDA();
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, cID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Concert(rs.getString("CID"),
                        rs.getString("CNAME"),
                        rs.getDate("CDATE"),
                        bda.getRecordById(rs.getString("BID")),
                        vda.getRecordById(rs.getString("VID")),
                        rs.getDouble("CBASEPRICE"),
                        rs.getString("CIMG"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(ConcertDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public ArrayList getRecordByName(String vName) {
        ArrayList<Concert> concertRSList = new ArrayList<>(getRecordCount());
        try {
            Concert concert;
            VenueDA vda = new VenueDA();
            BandDA bda = new BandDA();
            String queryStr = "SELECT * FROM " + tableName + " WHERE CNAME = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vName);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                concert = new Concert(rs.getString("CID"),
                        rs.getString("CNAME"),
                        rs.getDate("CDATE"),
                        bda.getRecordById(rs.getString("BID")),
                        vda.getRecordById(rs.getString("VID")),
                        rs.getDouble("CBASEPRICE"),
                        rs.getString("CIMG"));
                concertRSList.add(concert);
            }

        } catch (SQLException ex) {
            Logger.getLogger(ConcertDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!concertRSList.isEmpty()) {
            return concertRSList;
        } else {
            return null;
        }
    }

    public ArrayList<Concert> getAllRecord() {
        ArrayList<Concert> concertRSList = new ArrayList<>(getRecordCount());
        try {
            Concert concert;
            VenueDA vda = new VenueDA();
            BandDA bda = new BandDA();
            String queryStr = "SELECT * FROM " + tableName;

            pstmt = conn.prepareStatement(queryStr);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                concert = new Concert(rs.getString("CID"),
                        rs.getString("CNAME"),
                        rs.getDate("CDATE"),
                        bda.getRecordById(rs.getString("BID")),
                        vda.getRecordById(rs.getString("VID")),
                        rs.getDouble("CBASEPRICE"),
                        rs.getString("CIMG"));
                concertRSList.add(concert);
            }

        } catch (SQLException ex) {
            Logger.getLogger(ConcertDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!concertRSList.isEmpty()) {
            return concertRSList;
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
            Logger.getLogger(ConcertDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConcertDA.class.getName()).log(Level.SEVERE, null, ex);
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
