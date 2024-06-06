package com.hondana.repository;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "t_edizione")
public class t_edizione {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer ID_EDIZIONE;
    private @Column(name = "ANNO_PUBLICAZIONE" )Date ANNO_PUBLICAZIONE;
    private @Column(name = "TIPO_COPERTINA")String TIPO_COPERTINA;
    private @Column(name = "ID_AUTORE") Integer ID_AUTORE;

    private t_edizione(Integer ID_EDIZIONE , String TIPO_COPERTINA , Integer ID_AUTORE){
        this.ID_AUTORE = ID_AUTORE;
        this.TIPO_COPERTINA = TIPO_COPERTINA;
        this.ID_AUTORE = ID_AUTORE;
    }

    public Integer getID_EDIZIONE() {
        return ID_EDIZIONE;
    }

    public void setID_EDIZIONE(Integer ID_EDIZIONE) {
        ID_EDIZIONE = ID_EDIZIONE;
    }

    public Date getANNO_PUBLICAZIONE() {
        return ANNO_PUBLICAZIONE;
    }

    public void setANNO_PUBLICAZIONE(Date ANNO_PUBLICAZIONE) {
        ANNO_PUBLICAZIONE = ANNO_PUBLICAZIONE;
    }

    public String getTIPO_COPERTINA() {
        return TIPO_COPERTINA;
    }

    public void setTIPO_COPERTINA(String TIPO_COPERTINA) {
        TIPO_COPERTINA = TIPO_COPERTINA;
    }

    public Integer getID_AUTORE() {
        return ID_AUTORE;
    }

    public void setID_AUTORE(Integer ID_AUTORE) {
        ID_AUTORE = ID_AUTORE;
    }

    @OneToMany (mappedBy = "t_manga")
	private Set<r_manga_edizione> r_manga_edizione = new HashSet<>();
    

}
