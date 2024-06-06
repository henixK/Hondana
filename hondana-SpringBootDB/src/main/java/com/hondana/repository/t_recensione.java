package com.hondana.repository;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "t_recensione")
public class t_recensione {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer ID_RECENSIONE;
	private @Column (name = "DATA_RECENSIONE") Date DATA_RECENSIONE;
	private @Column (name = "DATA_RECENSIONE") Integer VOTO;
	private @Column (name = "DATA_RECENSIONE") Integer ID_UTENTE;
	private @Column (name = "DATA_RECENSIONE") Integer ID_MANGA;
	
	private t_recensione(Integer ID_RECENSIONE , Date DATA_RECENSIONE , Integer VOTO , Integer ID_UTENTE , Integer ID_MANGA ) {
		this.ID_RECENSIONE = ID_RECENSIONE;
		this.DATA_RECENSIONE = DATA_RECENSIONE;
		this.VOTO = VOTO;
		this.ID_UTENTE = ID_UTENTE;
		this.ID_MANGA = ID_MANGA;
	}

	public Integer getID_RECENSIONE() {
		return ID_RECENSIONE;
	}

	public void setID_RECENSIONE(Integer ID_RECENSIONE) {
		ID_RECENSIONE = ID_RECENSIONE;
	}

	public Date getDATA_RECENSIONE() {
		return DATA_RECENSIONE;
	}

	public void setDATA_RECENSIONE(Date DATA_RECENSIONE) {
		DATA_RECENSIONE = DATA_RECENSIONE;
	}

	public Integer getVOTO() {
		return VOTO;
	}

	public void setVOTO(Integer VOTO) {
		VOTO = VOTO;
	}

	public Integer getID_UTENTE() {
		return ID_UTENTE;
	}

	public void setID_UTENTE(Integer ID_UTENTE) {
		ID_UTENTE = ID_UTENTE;
	}

	public Integer getID_MANGA() {
		return ID_MANGA;
	}

	public void setID_MANGA(Integer ID_MANGA) {
		ID_MANGA = ID_MANGA;
	}
	@ManyToOne
    @JoinColumn(name = "ID_UTENTE")
    private t_utente t_utente;
	@ManyToOne
    @JoinColumn(name = "ID_MANGA")
    private t_manga t_manga;
	
}
