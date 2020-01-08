package da;

import domain.Member;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MemberDA {

    private String host = "jdbc:derby://localhost:1527/concertdb";
    private String user = "nbuser";
    private String password = "nbuser";
    private String tableName = "Member";
    private Connection conn;
    private PreparedStatement pstmt;

    public MemberDA() {
        createConnection();
    }

    public int addRecord(Member member) throws SQLException {
        String insertStr = "INSERT INTO " + tableName + " VALUES(?, ?, ?, ?, ?)";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setString(1, member.getMemberId());
        pstmt.setString(2, member.getMemberName());
        pstmt.setString(3, member.getEmail());
        pstmt.setString(4, member.getPassword());
        pstmt.setString(5, String.valueOf(member.getRewardPoint()));
        int rows = pstmt.executeUpdate();
        
        return rows;
        
    }
    
    public int updatePoint(int pt, String mID) throws SQLException {
        String insertStr = "UPDATE " + tableName + " SET MPOINT = ? WHERE MID = ?";

        pstmt = conn.prepareStatement(insertStr);
        pstmt.setInt(1, pt);
        pstmt.setString(2, mID);
        int rows = pstmt.executeUpdate();
        
        return rows;
        
    }

    public Member getRecordById(String mID) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE MID = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, mID);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Member(mID, rs.getString("mName"), rs.getString("mPwd"), rs.getString("mEmail"), rs.getInt("mPoint"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(MemberDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public Member getRecordByUsername(String username) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE MNAME = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Member(rs.getString("MID"), rs.getString("mName"), rs.getString("mPwd"), rs.getString("mEmail"), rs.getInt("mPoint"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(MemberDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public Member getRecordByEmail(String email) {
        try {
            String queryStr = "SELECT * FROM " + tableName + " WHERE MEMAIL = ?";

            pstmt = conn.prepareStatement(queryStr);
            pstmt.setString(1, email);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Member(rs.getString("MID"), rs.getString("mName"), rs.getString("mPwd"), rs.getString("mEmail"), rs.getInt("mPoint"));
            }

        } catch (SQLException ex) {
            Logger.getLogger(MemberDA.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(MemberDA.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }

    private void createConnection() {
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection(host, user, password);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(MemberDA.class.getName()).log(Level.SEVERE, null, ex);
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
