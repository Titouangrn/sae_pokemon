import { pokemons } from "../info_pokemons/pokemons.js";
import { Type } from './type.js'

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
        pokemons.forEach(poke => {
            const currentPokemon = new Pokemon(
                poke.pokemon_id,
                poke.pokemon_name,
                poke.base_stamina,
                poke.base_attack,
                poke.base_defense,
                null,
                null,
                null            
            )
            console.log(currentPokemon);
        });
    }

    static getTypes() {
        Type.fill_type()
        return Type.all_types
    }
}

Pokemon.fill_pokemons();
console.log(Pokemon.getTypes())