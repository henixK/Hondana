package com.hondana.repository;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Table(name = "t_spedizione")
public class t_spedizione {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY)Integer ID_SPEDIZIONE;
	private @Column (name = "DESTINAZIONE") String DESTINAZIONE;
	private @Column (name = "DATA_CONSEGNA") Date DATA_CONSEGNA;
	private @Column (name = "COMPAGNIA_DI_CONSEGNA") String COMPAGNIA_DI_CONSEGNA;
	private @Column (name = "ID_ORDINE") Integer ID_ORDINE;
	
	private t_spedizione(Integer ID_SPEDIZIONE , String DESTINAZIONE , Date DATA_CONSEGNA , String COMPAGNIA_DI_CONSEGNA , Integer ID_ORDINE) {
		this.ID_ORDINE = ID_ORDINE;
		this.DESTINAZIONE = DESTINAZIONE;
		this.DATA_CONSEGNA = DATA_CONSEGNA;
		this.COMPAGNIA_DI_CONSEGNA = COMPAGNIA_DI_CONSEGNA;
		this.ID_ORDINE = ID_ORDINE;
	}

	public Integer getID_SPEDIZIONE() {
		return ID_SPEDIZIONE;
	}

	public void setID_SPEDIZIONE(Integer ID_SPEDIZIONE) {
		ID_SPEDIZIONE = ID_SPEDIZIONE;
	}

	public String getDESTINAZIONE() {
		return DESTINAZIONE;
	}

	public void setDESTINAZIONE(String DESTINAZIONE) {
		DESTINAZIONE = DESTINAZIONE;
	}

	public Date getDATA_CONSEGNA() {
		return DATA_CONSEGNA;
	}

	public void setDATA_CONSEGNA(Date DATA_CONSEGNA) {
		DATA_CONSEGNA = DATA_CONSEGNA;
	}

	public String getCOMPAGNIA_DI_CONSEGNA() {
		return COMPAGNIA_DI_CONSEGNA;
	}

	public void setCOMPAGNIA_DI_CONSEGNA(String COMPAGNIA_DI_CONSEGNA) {
		COMPAGNIA_DI_CONSEGNA = COMPAGNIA_DI_CONSEGNA;
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
	
}
