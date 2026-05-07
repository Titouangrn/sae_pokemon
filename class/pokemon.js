import {pokemons} from "../info_pokemons/pokemons.js";

class Pokemon {

    static all_pokemons = []

    constructor(idPok, nomPok, stamina, baseAttaque, baseDefense, nomTypes, nomsAttaquesRapides, nomsAttaquesChargees) {
        this.idPok = idPok;
        this.nomPok = nomPok;
        this.stamina = stamina;
        this.baseAttaque = baseAttaque;
        this.baseDefense = baseDefense;
        this.nomTypes = nomTypes;
        this.nomsAttaquesRapides = nomsAttaquesRapides;
        this.nomsAttaquesChargees = nomsAttaquesChargees;
    }


    toString() {
        // TODO
    }



    static fill_pokemons(){
        
    }
}

Pokemon.fill_pokemons();