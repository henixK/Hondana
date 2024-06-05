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
	private @Column (name = "QUANTITA_MANGA") Integer QUANTITA_MANGA;
	private @Column (name = "ID_MANGA") Integer ID_MANGA;
	private @Column (name = "ID_ORDINE") Integer ID_ORDINE;
	
	private t_ordine_manga(Integer ID_ordine_manga, Integer QUANTITA_MANGA , Integer ID_MANGA , Integer ID_ORDINE) {
		this.ID_ORDINE_MANGA = ID_ORDINE_MANGA;
		this.QUANTITA_MANGA = QUANTITA_MANGA;
		this.ID_MANGA = ID_MANGA;
		this.ID_ORDINE = ID_ORDINE;
	}

	public Integer getID_ORDINE_MANGA() {
		return ID_ORDINE_MANGA;
	}

	public void setID_ORDINE_MANGA(Integer ID_ORDINE_MANGA) {
		ID_ORDINE_MANGA = ID_ORDINE_MANGA;
	}

	public Integer getQUANTITA_MANGA() {
		return QUANTITA_MANGA;
	}

	public void setQUANTITA_MANGA(Integer QUANTITA_MANGA) {
		QUANTITA_MANGA = QUANTITA_MANGA;
	}

	public Integer getID_MANGA() {
		return ID_MANGA;
	}

	public void setID_MANGA(Integer ID_MANGA) {
		ID_MANGA = ID_MANGA;
	}

	public Integer getID_ORDINE() {
		return ID_ORDINE;
	}

	public void setID_ORDINE(Integer ID_ORDINE) {
		ID_ORDINE = ID_ORDINE;
	}
	@ManyToOne
    @JoinColumn(name = "ID_ORDINE")
    private t_ordine t_ordine;
	@ManyToOne
    @JoinColumn(name = "ID_MANGA")
    private t_manga t_manga;
}
