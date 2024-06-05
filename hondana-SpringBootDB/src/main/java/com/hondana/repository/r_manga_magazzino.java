package com.hondana.repository;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "r_manga_magazzino")
public class r_manga_magazzino {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer t_manga_magazzino;
    private @Column(name = "QUANTITA_MANGA") Integer QUANTITA_MANGA;
    private @Column(name = "ID_MAGAZINO") Integer ID_MAGAZINO;
    private @Column(name = "ID_MANGA") Integer ID_MANGA;

    
    private r_manga_magazzino ( Integer t_manga_magazzino , Integer QUANTITA_MANGA , Integer ID_MAGAZINO , Integer ID_MANGA){
        this.t_manga_magazzino = t_manga_magazzino;
        this.QUANTITA_MANGA = QUANTITA_MANGA;
        this.ID_MAGAZINO = ID_MAGAZINO;
        this.ID_MANGA = ID_MANGA;
    }


    public Integer getT_manga_magazzino() {
        return t_manga_magazzino;
    }


    public void setT_manga_magazzino(Integer t_manga_magazzino) {
        this.t_manga_magazzino = t_manga_magazzino;
    }


    public Integer getQUANTITA_MANGA() {
        return QUANTITA_MANGA;
    }


    public void setQUANTITA_MANGA(Integer QUANTITA_MANGA) {
        QUANTITA_MANGA = QUANTITA_MANGA;
    }


    public Integer getID_MAGAZINO() {
        return ID_MAGAZINO;
    }


    public void setID_MAGAZINO(Integer ID_MAGAZINO) {
        ID_MAGAZINO = ID_MAGAZINO;
    }


    public Integer getID_MANGA() {
        return ID_MANGA;
    }


    public void setID_MANGA(Integer ID_MANGA) {
        ID_MANGA = ID_MANGA;
    }
    @ManyToOne
    @JoinColumn(name = "ID_MANGA")
    private t_manga t_manga;
    @ManyToOne
    @JoinColumn(name = "ID_MAGAZINO")
    private t_magazino t_magazino;
}
