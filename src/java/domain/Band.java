/*
 By Adwin Ong Kok Quan
    DIA3
    Concert Ticket Reservation System
    This is a college assignment project. It is not for selling or re-selling.
 */
package domain;

import java.io.Serializable;
import java.util.Objects;

public class Band implements Serializable {

    //Data Member
    private String bandID;
    private String bandName;
    private String bandDesc;

    //Constructor
    public Band() {
    }

    public Band(String bandID, String bandName, String bandDesc) {
        this.bandID = bandID;
        this.bandName = bandName;
        this.bandDesc = bandDesc;
    }

    public Band(String bandName, String bandDesc) {
        this.bandName = bandName;
        this.bandDesc = bandDesc;
    }

    //Getter Setter
    public String getBandID() {
        return bandID;
    }

    public void setBandID(String bandID) {
        this.bandID = bandID;
    }

    public String getBandName() {
        return bandName;
    }

    public void setBandName(String bandName) {
        this.bandName = bandName;
    }

    public String getBandDesc() {
        return bandDesc;
    }

    public void setBandDesc(String bandDesc) {
        this.bandDesc = bandDesc;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + Objects.hashCode(this.bandID);
        hash = 59 * hash + Objects.hashCode(this.bandName);
        hash = 59 * hash + Objects.hashCode(this.bandDesc);
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
        final Band other = (Band) obj;
        if (!Objects.equals(this.bandID, other.bandID)) {
            return false;
        }
        if (!Objects.equals(this.bandName, other.bandName)) {
            return false;
        }
        if (!Objects.equals(this.bandDesc, other.bandDesc)) {
            return false;
        }
        return true;
    }

    //toString
    @Override
    public String toString() {
        return "Band{" + "bandID=" + bandID + ", bandName=" + bandName + ", bandDesc=" + bandDesc + '}';
    }
    
    
}
