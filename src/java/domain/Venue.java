/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import java.io.Serializable;
import java.util.Objects;
import javax.swing.ImageIcon;

public class Venue implements Serializable {

    //Data Member
    private String venueId;
    private String venueName;
    private String venueAddress;
    private String state;
    private int seatQty;
    private String venueImage;

    //Constructor
    public Venue() {
    }

    public Venue(String venueId, String venueName, String venueAddress, String state, int seatQty, String venueImage) {
        this.venueId = venueId;
        this.venueName = venueName;
        this.venueAddress = venueAddress;
        this.state = state;
        this.seatQty = seatQty;
        this.venueImage = venueImage;
    }

    //Getter Setter
    public String getVenueId() {
        return venueId;
    }

    public void setVenueId(String venueId) {
        this.venueId = venueId;
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getVenueAddress() {
        return venueAddress;
    }

    public void setVenueAddress(String venueAddress) {
        this.venueAddress = venueAddress;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getSeatQty() {
        return seatQty;
    }

    public void setSeatQty(int seatQty) {
        this.seatQty = seatQty;
    }

    public String getVenueImage() {
        return venueImage;
    }

    public void setVenueImage(String venueImage) {
        this.venueImage = venueImage;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 83 * hash + Objects.hashCode(this.venueId);
        hash = 83 * hash + Objects.hashCode(this.venueName);
        hash = 83 * hash + Objects.hashCode(this.venueAddress);
        hash = 83 * hash + Objects.hashCode(this.state);
        hash = 83 * hash + this.seatQty;
        hash = 83 * hash + Objects.hashCode(this.venueImage);
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
        final Venue other = (Venue) obj;
        if (this.seatQty != other.seatQty) {
            return false;
        }
        if (!Objects.equals(this.venueId, other.venueId)) {
            return false;
        }
        if (!Objects.equals(this.venueName, other.venueName)) {
            return false;
        }
        if (!Objects.equals(this.venueAddress, other.venueAddress)) {
            return false;
        }
        if (!Objects.equals(this.state, other.state)) {
            return false;
        }
        if (!Objects.equals(this.venueImage, other.venueImage)) {
            return false;
        }
        return true;
    }

    //toString
    @Override
    public String toString() {
        return "Venue{" + "venueId=" + venueId + ", venueName=" + venueName + ", venueAddress=" + venueAddress + ", state=" + state + ", seatQty=" + seatQty + ", venueImage=" + venueImage + '}';
    }

}
