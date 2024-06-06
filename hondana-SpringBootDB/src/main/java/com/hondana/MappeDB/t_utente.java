package com.hondana.repository;

import java.util.HashSet;
import java.util.Set;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name ="t_utente")
public class t_utente {
	private	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) Integer ID_UTENTE;
	private	@Column (name = "NOME") String NOME; 
	private @Column (name = "COGNOME") String COGNOME;
	private @Column (name = "PAROLA_SEGRETA") String PAROLA_SEGRETA;
	private @Column (name = "INDIRIZZO_SPEDIZIONE") String INDIRIZZO_SPEDIZIONE;
	private @Column (name = "DATA_DI_NASCIA") Integer DATA_DI_NASCIA;
	private @Column (name = "GENERE_PREFERITO") String GENERE_PREFERITO; 
	private @Column (name = "E_MAIL") String E_MAIL;
	
	private t_utente(Integer ID_UTENTE,String NOME,String COGNOME,String PAROLA_SEGERTA,String INDIRIZZO_SPEDIZIONE,Integer DATA_DI_NASCIA,String GENERE_PREFERITO,String E_MAIL) {
		this.ID_UTENTE =ID_UTENTE;
		this.NOME = NOME;
		this.COGNOME= COGNOME;
		this.PAROLA_SEGRETA = PAROLA_SEGERTA;
		this.INDIRIZZO_SPEDIZIONE = INDIRIZZO_SPEDIZIONE;
		this.DATA_DI_NASCIA = DATA_DI_NASCIA;
		this.GENERE_PREFERITO = GENERE_PREFERITO;
		this.E_MAIL = E_MAIL;
	}

	public Integer getID_UTENTE() {
		return ID_UTENTE;
	}

	public void setID_UTENTE(Integer ID_UTENTE) {
		ID_UTENTE = ID_UTENTE;
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

	public String getPAROLA_SEGRETA() {
		return PAROLA_SEGRETA;
	}

	public void setPAROLA_SEGRETA(String PAROLA_SEGRETA) {
		PAROLA_SEGRETA = PAROLA_SEGRETA;
	}

	public String getINDIRIZZO_SPEDIZIONE() {
		return INDIRIZZO_SPEDIZIONE;
	}

	public void setINDIRIZZO_SPEDIZIONE(String INDIRIZZO_SPEDIZIONE) {
		INDIRIZZO_SPEDIZIONE = INDIRIZZO_SPEDIZIONE;
	}

	public Integer getDATA_DI_NASCIA() {
		return DATA_DI_NASCIA;
	}

	public void setDATA_DI_NASCIA(Integer DATA_DI_NASCIA) {
		DATA_DI_NASCIA = DATA_DI_NASCIA;
	}

	public String getGENERE_PREFERITO() {
		return GENERE_PREFERITO;
	}

	public void setGENERE_PREFERITO(String GENERE_PREFERITO) {
		GENERE_PREFERITO = GENERE_PREFERITO;
	}

	public String getE_MAIL() {
		return E_MAIL;
	}

	public void setE_MAIL(String E_MAIL) {
		E_MAIL = E_MAIL;
	} 
	  @OneToMany (mappedBy = "t_utente")
	  private Set<t_ordine> t_ordine = new HashSet<>();
	  @OneToMany (mappedBy = "t_utente")
	  private Set<t_recensione> t_recensione = new HashSet<>();

}
