/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import da.MemberDA;
import java.io.Serializable;
import java.util.Objects;

public class Member implements Serializable {

    //Data Member
    private String memberId;
    private String memberName;
    private String password;
    private String email;
    private int rewardPoint;
    //Constructor

    public Member() {
    }

    public Member(String memberId, String memberName, String password, String email, int rewardPoint) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.password = password;
        this.email = email;
        this.rewardPoint = rewardPoint;
    }

    public Member(String memberName, String password, String email) {
        this.memberName = memberName;
        this.password = password;
        this.email = email;
        this.rewardPoint = 0;
        this.memberId = generateID();
    }

    //Getter Setter
    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRewardPoint() {
        return rewardPoint;
    }

    public void setRewardPoint(int rewardPoint) {
        this.rewardPoint = rewardPoint;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 29 * hash + Objects.hashCode(this.memberId);
        hash = 29 * hash + Objects.hashCode(this.memberName);
        hash = 29 * hash + Objects.hashCode(this.password);
        hash = 29 * hash + Objects.hashCode(this.email);
        hash = 29 * hash + this.rewardPoint;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Member other = (Member) obj;
        if (this.rewardPoint != other.rewardPoint) {
            return false;
        }
        if (!Objects.equals(this.memberId, other.memberId)) {
            return false;
        }
        if (!Objects.equals(this.memberName, other.memberName)) {
            return false;
        }
        if (!Objects.equals(this.password, other.password)) {
            return false;
        }
        if (!Objects.equals(this.email, other.email)) {
            return false;
        }
        return true;
    }

    //ToString
    @Override
    public String toString() {
        return "Member{" + "memberId=" + memberId + ", memberName=" + memberName + ", password=" + password + ", email=" + email + ", rewardPoint=" + rewardPoint + '}';
    }

    //Auto ID Gen
    public String generateID() {
        MemberDA mDA = new MemberDA();
        return "M" + String.format("%05d", mDA.getRecordCount() + 1);
    }



}
