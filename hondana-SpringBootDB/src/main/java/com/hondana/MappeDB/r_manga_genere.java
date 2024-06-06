package com.hondana.repository;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "r_manga_genere")
public class r_manga_genere {
    private @Column(name = "ID_GENERE") Integer ID_GENERE;
    private @Column(name = "ID_MANGA") Integer ID_MANGA;

    private r_manga_genere() {
        this.ID_GENERE = ID_GENERE;
        this.ID_MANGA = ID_MANGA;
    }

    public Integer getID_GENERE() {
        return ID_GENERE;
    }

    public void setID_GENERE(Integer ID_GENERE) {
        ID_GENERE = ID_GENERE;
    }

    public Integer getID_MANGA() {
        return ID_MANGA;
    }

    public void setID_MANGA(Integer ID_MANGA) {
        ID_MANGA = ID_MANGA;
    }

    @ManyToOne
    @JoinColumn(name = "ID_GENERE")
    private t_genere t_genere;

    @ManyToOne
    @JoinColumn(name = "t_manga")
    private t_manga t_manga;
}
