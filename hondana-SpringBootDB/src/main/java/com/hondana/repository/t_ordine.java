package com.hondana.repository;

import java.sql.Date;
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

@Table(name = "t_ordine")
public class t_ordine {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer ID_ORDINE;
	private @Column (name = "DATA_ORDINE")Date DATA_ORDINE;
	private @Column (name = "ID_UTENTE")Integer ID_UTENTE;
	
	private t_ordine(Integer id_ordine , Date data_ordine , Integer id_utente) {
		this.ID_ORDINE = id_ordine;
		this.DATA_ORDINE = data_ordine;
		this.ID_UTENTE = id_utente;
	}

	public Integer getID_ORDINE() {
		return ID_ORDINE;
	}

	public void setID_ORDINE(Integer ID_ORDINE) {
		ID_ORDINE = ID_ORDINE;
	}

	public Date getDATA_ORDINE() {
		return DATA_ORDINE;
	}

	public void setDATA_ORDINE(Date DATA_ORDINE) {
		DATA_ORDINE = DATA_ORDINE;
	}

	public Integer getID_UTENTE() {
		return ID_UTENTE;
	}

	public void setID_UTENTE(Integer ID_UTENTE) {
		ID_UTENTE = ID_UTENTE;
	}
	@ManyToOne
    @JoinColumn(name = "ID_UTENTE")
    private t_utente t_utente;
	@OneToMany (mappedBy = "t_ordine")
	private Set<t_spedizione> t_spedizione = new HashSet<>();
	@OneToMany (mappedBy = "t_ordine")
	private Set<t_ordine_manga> t_ordine_manga = new HashSet<>();
}
