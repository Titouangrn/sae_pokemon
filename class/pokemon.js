import { pokemons } from "../info_pokemons/pokemons.js";
import { pokemon_types } from "../info_pokemons/pokemon_types.js";
import { pokemon_moves } from "../info_pokemons/pokemon_moves.js";

import { Type } from './type.js'

class Pokemon {

    static all_pokemons = []

    constructor(idPok, nomPok, stamina, baseAttaque, baseDefense, nomTypes, nomsAttaquesRapides, nomsAttaquesChargees) {
        this.idPok = idPok;
        this.nomPok = nomPok;
        this.stamina = stamina;
        this.baseAttaque = baseAttaque;
        this.baseDefense = baseDefense;

        this.types = []
        nomTypes.forEach(type => this.types.push(new Type(type)))
        
        this.attaquesRapide = nomsAttaquesRapides;
        this.attaquesChargees = nomsAttaquesChargees;
    }


    toString() {
        // TODO
    }

    static fill_pokemons(){
        pokemons.forEach(poke => {
            var moves = pokemon_moves.find(move => {
                if (move.pokemon_id == poke.pokemon_id) {
                    return true
                }
                return false
            })

            var types = pokemon_types.find(type => {
                if (type.pokemon_id == poke.pokemon_id) {
                    return true
                }
                return false
            })

            const currentPokemon = new Pokemon(
                poke.pokemon_id,
                poke.pokemon_name,
                poke.base_stamina,
                poke.base_attack,
                poke.base_defense,
                types.type,
                moves.fast_moves,
                moves.charged_moves            
            )
            console.log(currentPokemon);
        });
    }

    static getTypes() {
        Type.fill_type()
        return Type.all_types
    }

    getTypes() {
        Type.fill_type()
        return Type.all_types
    }
}

Pokemon.fill_pokemons();
console.log(Pokemon.getTypes())