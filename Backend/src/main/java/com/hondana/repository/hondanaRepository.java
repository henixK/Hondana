package com.hondana.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("prova")
public interface hondanaRepository extends CrudRepository<t_utente, Integer>{

}
