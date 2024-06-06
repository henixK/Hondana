package com.hondana.repository;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "t_genere")
public class t_genere {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer ID_GENERE;
    private @Column(name = "DESCRIZIONE") String DESCRIZIONE;


    private t_genere(Integer ID_GENERE , String DESCRIZIONE){
        this.ID_GENERE = ID_GENERE;
        this.DESCRIZIONE = DESCRIZIONE;
    }


    public void setID_GENERE(Integer ID_GENERE) {
        ID_GENERE = ID_GENERE;
    }


    public void setDESCRIZIONE(String DESCRIZIONE) {
        DESCRIZIONE = DESCRIZIONE;
    }

    public Integer getID_GENERE() {
        return ID_GENERE;
    }


    public String getDESCRIZIONE() {
        return DESCRIZIONE;
    }
    
    @OneToMany (mappedBy = "t_genere")
	private Set<t_manga> t_manga = new HashSet<>();
}
