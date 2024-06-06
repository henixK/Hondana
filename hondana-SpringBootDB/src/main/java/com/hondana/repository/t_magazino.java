package com.hondana.repository;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "t_magazino")
public class t_magazino {
    private @Id @GeneratedValue( strategy = GenerationType.IDENTITY ) Integer ID_MAGAZINO;
    private @Column(name = "INDIRIZZO") String  INDIRIZZO;

    private t_magazino(Integer ID_MAGAZINO , String INDIRIZZO) {
        this.ID_MAGAZINO = ID_MAGAZINO;
        this.INDIRIZZO = INDIRIZZO;
    }

    public Integer getID_MAGAZINO() {
        return ID_MAGAZINO;
    }

    public void setID_MAGAZINO(Integer ID_MAGAZINO) {
        ID_MAGAZINO = ID_MAGAZINO;
    }

    public String getINDIRIZZO() {
        return INDIRIZZO;
    }

    public void setINDIRIZZO(String INDIRIZZO) {
        INDIRIZZO = INDIRIZZO;
    }

    @OneToMany (mappedBy = "t_manga")
	private Set<r_manga_magazzino> r_manga_magazzino = new HashSet<>();
}
