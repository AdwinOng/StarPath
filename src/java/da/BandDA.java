package da;

import domain.Band;
import java.sql.*;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class BandDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "Band";
    private Connection conn;
    private PreparedStatement pstmt;

    public BandDA() {
        createConnection();
    }

    public int addRecord(Band band) throws SQLException {
        String insertStr = "INSERT INTO " + tableName + " VALUES(?, ?, ?";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setString(1, band.getBandID());
        pstmt.setString(2, band.getBandName());
        pstmt.setString(3, band.getBandDesc());
        int rows = pstmt.executeUpdate();

        return rows;

    }

    public Band getRecordById(String vID) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE BID = ?";
            ArrayList<Band> bandRSList = new ArrayList<>(getRecordCount());
            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Band(rs.getString("BID"), rs.getString("BNAME"), rs.getString("BDESC"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(BandDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public ArrayList getRecordByName(String vName) {
        ArrayList<Band> bandRSList = new ArrayList<>(getRecordCount());
        try {
            Band band;

            String queryStr = "SELECT * FROM " + tableName + " WHERE BNAME = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, vName);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                band = new Band(rs.getString("BID"), rs.getString("BNAME"), rs.getString("BDESC"));
                bandRSList.add(band);
            }

        } catch (SQLException ex) {
            Logger.getLogger(BandDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (!bandRSList.isEmpty()) {
            return bandRSList;
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
            Logger.getLogger(BandDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(BandDA.class.getName()).log(Level.SEVERE, null, ex);
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
