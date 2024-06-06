package com.hondana.repository;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "r_manga_edizione")
public class r_manga_edizione {

    private @Column(name = "ID_MANGA") Integer ID_MANGA;
    private @Column(name = "ID_EDIZIONE") Integer ID_EDIZIONE;

    private r_manga_edizione(Integer ID_MANGA , Integer ID_EDIZIONE) {
        this.ID_MANGA = ID_MANGA;
        this.ID_EDIZIONE = ID_EDIZIONE;
    }

    public Integer getID_MANGA() {
        return ID_MANGA;
    }

    public void setID_MANGA(Integer ID_MANGA) {
        ID_MANGA = ID_MANGA;
    }

    public Integer getID_EDIZIONE() {
        return ID_EDIZIONE;
    }

    public void setID_EDIZIONE(Integer ID_EDIZIONE) {
        ID_EDIZIONE = ID_EDIZIONE;
    }
    @ManyToOne
    @JoinColumn(name = "ID_MANGA")
    private t_manga t_manga;
    @ManyToOne
    @JoinColumn(name = "ID_EDIZIONE")
    private t_edizione t_edizione;
    
}
