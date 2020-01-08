/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import da.BandDA;
import da.ConcertDA;
import da.VenueDA;
import java.io.Serializable;
import java.time.format.DateTimeFormatter;
import java.util.*;
import javax.swing.ImageIcon;

public class Concert implements Serializable {

    //Data Member
    private String concertId;
    private String concertName;
    private Date concertDate;
    private Band band;
    private Venue venue;
    private double basePrices;
    private String concertImg;

    //Constructor
    public Concert() {
    }

    public Concert(String concertId, String concertName, Date concertDate, Band band, Venue venue, double basePrices, String concertImg) {
        this.concertId = concertId;
        this.concertName = concertName;
        this.concertDate = concertDate;
        this.band = band;
        this.venue = venue;
        this.basePrices = basePrices;
        this.concertImg = concertImg;
    }

    public Concert(String concertName, Date concertDate, Band band, Venue venue, double basePrices, String concertImg) {
        this.concertName = concertName;
        this.concertDate = concertDate;
        this.band = band;
        this.venue = venue;
        this.basePrices = basePrices;
        this.concertImg = concertImg;
    }

    //Getter Setter
    public String getConcertId() {
        return concertId;
    }

    public void setConcertId(String concertId) {
        this.concertId = concertId;
    }

    public String getConcertName() {
        return concertName;
    }

    public void setConcertName(String concertName) {
        this.concertName = concertName;
    }

    public Date getConcertDate() {
        return concertDate;
    }

    public void setConcertDate(Date concertDate) {
        this.concertDate = concertDate;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }

    public double getBasePrices() {
        return basePrices;
    }

    public void setBasePrices(double basePrices) {
        this.basePrices = basePrices;
    }

    public String getConcertImg() {
        return concertImg;
    }

    public void setConcertImg(String concertImg) {
        this.concertImg = concertImg;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 71 * hash + Objects.hashCode(this.concertId);
        hash = 71 * hash + Objects.hashCode(this.concertName);
        hash = 71 * hash + Objects.hashCode(this.concertDate);
        hash = 71 * hash + Objects.hashCode(this.band);
        hash = 71 * hash + Objects.hashCode(this.venue);
        hash = 71 * hash + (int) (Double.doubleToLongBits(this.basePrices) ^ (Double.doubleToLongBits(this.basePrices) >>> 32));
        hash = 71 * hash + Objects.hashCode(this.concertImg);
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
        final Concert other = (Concert) obj;
        if (Double.doubleToLongBits(this.basePrices) != Double.doubleToLongBits(other.basePrices)) {
            return false;
        }
        if (!Objects.equals(this.concertId, other.concertId)) {
            return false;
        }
        if (!Objects.equals(this.concertName, other.concertName)) {
            return false;
        }
        if (!Objects.equals(this.concertImg, other.concertImg)) {
            return false;
        }
        if (!Objects.equals(this.concertDate, other.concertDate)) {
            return false;
        }
        if (!Objects.equals(this.band, other.band)) {
            return false;
        }
        if (!Objects.equals(this.venue, other.venue)) {
            return false;
        }
        return true;
    }

    //ToString
    @Override
    public String toString() {
        return "Concert{" + "concertId=" + concertId + ", concertName=" + concertName + ", concertDate=" + concertDate + ", band=" + band + ", venue=" + venue + ", basePrices=" + basePrices + ", concertImg=" + concertImg + '}';
    }
}
