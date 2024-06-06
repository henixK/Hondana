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

@Table(name = "t_autore")
public class t_autore {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY)Integer ID_AUTORE;
	private @Column(name = "NOME")String NOME;
	private @Column(name = "COGNOME")String COGNOME;
	private @Column(name = "DATA_DI_NASCITA")Date DATA_DI_NASCITA;
	private @Column(name = "NAZIONE")String NAZIONE;
	
	private t_autore(Integer ID_AUTORE , String NOME , String COGNOME , Date DATA_DI_NASCITA , String NAZIONE) {
		this.NOME = NOME;
		this.ID_AUTORE = ID_AUTORE;
		this.COGNOME = COGNOME;
		this.DATA_DI_NASCITA = DATA_DI_NASCITA;
		this.NAZIONE = NAZIONE;
	}

	public Integer getID_AUTORE() {
		return ID_AUTORE;
	}

	public void setID_AUTORE(Integer ID_AUTORE) {
		ID_AUTORE = ID_AUTORE;
	}

	public String getNOME() {
		return NOME;
	}

	public void setNOME(String NOME) {
		NOME = NOME;
	}

	public String getCOGNOME() {
		return COGNOME;
	}

	public void setCOGNOME(String COGNOME) {
		COGNOME = COGNOME;
	}

	public Date getDATA_DI_NASCITA() {
		return DATA_DI_NASCITA;
	}

	public void setDATA_DI_NASCITA(Date DATA_DI_NASCITA) {
		DATA_DI_NASCITA = DATA_DI_NASCITA;
	}

	public String getNAZIONE() {
		return NAZIONE;
	}

	public void setNAZIONE(String NAZIONE) {
		NAZIONE = NAZIONE;
	}
	@OneToMany (mappedBy = "t_autore")
	private Set<t_manga> t_manga = new HashSet<>();
}
