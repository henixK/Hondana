package com.hondana.repository;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "t_manga")
public class t_manga {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY)Integer ID_MANGA;
	private @Column String TITOLO;
	private @Column Integer PREZZO;
	private @Column Integer ID_AUTORE;
	
	private t_manga(Integer ID_MANGA , String TITOLO ,  Integer PREZZO, Integer ID_AUTORE ) {
		this.ID_MANGA = ID_MANGA;
		this.TITOLO = TITOLO;
		this.PREZZO = PREZZO;
		this.ID_AUTORE = ID_AUTORE;
	}

	public Integer getID_MANGA() {
		return ID_MANGA;
	}

	public void setID_MANGA(Integer iD_MANGA) {
		ID_MANGA = iD_MANGA;
	}

	public String getTITOLO() {
		return TITOLO;
	}

	public void setTITOLO(String tITOLO) {
		TITOLO = tITOLO;
	}

	public Integer getPREZZO() {
		return PREZZO;
	}

	public void setPREZZO(Integer pREZZO) {
		PREZZO = pREZZO;
	}

	public Integer getID_AUTORE() {
		return ID_AUTORE;
	}

	public void setID_AUTORE(Integer iD_AUTORE) {
		ID_AUTORE = iD_AUTORE;
	}
	@ManyToOne
    @JoinColumn(name = "ID_AUTORE")
    private t_autore t_autore;
	@OneToMany (mappedBy = "t_manga")
	private Set<t_recensione> t_recensione = new HashSet<>();
	@OneToMany (mappedBy = "t_manga")
	private Set<t_ordine_manga> t_ordine_manga = new HashSet<>();

}
