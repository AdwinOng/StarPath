/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import java.io.Serializable;
import java.util.Objects;

public class SeatType implements Serializable {

    //Data Member
    private String seatId;
    private Venue venue;
    private String typeName;
    private double priceModifier;

    //Constructor
    public SeatType() {
    }

    public SeatType(String seatId, Venue venue, String typeName, double priceModifier) {
        this.seatId = seatId;
        this.venue = venue;
        this.typeName = typeName;
        this.priceModifier = priceModifier;
    }

    //Getter Setter
    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public double getPriceModifier() {
        return priceModifier;
    }

    public void setPriceModifier(double priceModifier) {
        this.priceModifier = priceModifier;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.seatId);
        hash = 97 * hash + Objects.hashCode(this.venue);
        hash = 97 * hash + Objects.hashCode(this.typeName);
        hash = 97 * hash + (int) (Double.doubleToLongBits(this.priceModifier) ^ (Double.doubleToLongBits(this.priceModifier) >>> 32));
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
        final SeatType other = (SeatType) obj;
        if (Double.doubleToLongBits(this.priceModifier) != Double.doubleToLongBits(other.priceModifier)) {
            return false;
        }
        if (!Objects.equals(this.seatId, other.seatId)) {
            return false;
        }
        if (!Objects.equals(this.typeName, other.typeName)) {
            return false;
        }
        if (!Objects.equals(this.venue, other.venue)) {
            return false;
        }
        return true;
    }

    //toString
    @Override
    public String toString() {
        return "SeatType{" + "seatId=" + seatId + ", venue=" + venue + ", typeName=" + typeName + ", priceModifier=" + priceModifier + '}';
    }

}
