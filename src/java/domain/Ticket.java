/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import da.TicketDA;
import java.io.Serializable;
import java.util.Objects;

public class Ticket implements Serializable {

    //Data Member
    private String ticketId;
    private int ticketQty;
    private Concert concert;
    private SeatType seat;
    private Member member;

    //Constructor
    public Ticket() {
    }

    public Ticket(int ticketQty, Concert concert, SeatType seat, Member member) {
        this.ticketId = generateID();
        this.ticketQty = ticketQty;
        this.concert = concert;
        this.seat = seat;
        this.member = member;
    }

    public Ticket(String ticketId, int ticketQty, Concert concert, SeatType seat, Member member) {
        this.ticketId = ticketId;
        this.ticketQty = ticketQty;
        this.concert = concert;
        this.seat = seat;
        this.member = member;
    }

    //Getter Setter
    public String getTicketId() {
        return ticketId;
    }

    public void setTicketId(String ticketId) {
        this.ticketId = ticketId;
    }

    public Concert getConcert() {
        return concert;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }

    public SeatType getSeat() {
        return seat;
    }

    public void setSeat(SeatType seat) {
        this.seat = seat;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public int getTicketQty() {
        return ticketQty;
    }

    public void setTicketQty(int ticketQty) {
        this.ticketQty = ticketQty;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 47 * hash + Objects.hashCode(this.ticketId);
        hash = 47 * hash + Objects.hashCode(this.concert);
        hash = 47 * hash + Objects.hashCode(this.seat);
        hash = 47 * hash + Objects.hashCode(this.member);
        hash = 47 * hash + this.ticketQty;
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
        final Ticket other = (Ticket) obj;
        if (this.ticketQty != other.ticketQty) {
            return false;
        }
        if (!Objects.equals(this.ticketId, other.ticketId)) {
            return false;
        }
        if (!Objects.equals(this.concert, other.concert)) {
            return false;
        }
        if (!Objects.equals(this.seat, other.seat)) {
            return false;
        }
        if (!Objects.equals(this.member, other.member)) {
            return false;
        }
        return true;
    }

    //ToString
    @Override
    public String toString() {
        return "Ticket{" + "ticketId=" + ticketId + ", concert=" + concert + ", seat=" + seat + ", member=" + member + ", ticketQty=" + ticketQty + '}';
    }

    public String generateID() {
        TicketDA tDA = new TicketDA();
        return "T" + String.format("%05d", tDA.getRecordCount() + 1);
    }
}
