package com.hondana.repository;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "t_ordine_manga")
public class t_ordine_manga {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY)Integer ID_ORDINE_MANGA;
	private @Column Integer QUANTITA_MANGA;
	private @Column Integer ID_MANGA;
	private @Column Integer ID_ORDINE;
	
	private t_ordine_manga(Integer ID_ordine_manga, Integer QUANTITA_MANGA , Integer ID_MANGA , Integer ID_ORDINE) {
		this.ID_ORDINE_MANGA = ID_ORDINE_MANGA;
		this.QUANTITA_MANGA = QUANTITA_MANGA;
		this.ID_MANGA = ID_MANGA;
		this.ID_ORDINE = ID_ORDINE;
	}

	public Integer getID_ORDINE_MANGA() {
		return ID_ORDINE_MANGA;
	}

	public void setID_ORDINE_MANGA(Integer iD_ORDINE_MANGA) {
		ID_ORDINE_MANGA = iD_ORDINE_MANGA;
	}

	public Integer getQUANTITA_MANGA() {
		return QUANTITA_MANGA;
	}

	public void setQUANTITA_MANGA(Integer qUANTITA_MANGA) {
		QUANTITA_MANGA = qUANTITA_MANGA;
	}

	public Integer getID_MANGA() {
		return ID_MANGA;
	}

	public void setID_MANGA(Integer iD_MANGA) {
		ID_MANGA = iD_MANGA;
	}

	public Integer getID_ORDINE() {
		return ID_ORDINE;
	}

	public void setID_ORDINE(Integer iD_ORDINE) {
		ID_ORDINE = iD_ORDINE;
	}
	@ManyToOne
    @JoinColumn(name = "ID_UTENTE")
    private t_utente t_utente;
	@ManyToOne
    @JoinColumn(name = "ID_MANGA")
    private t_manga t_manga;
}
