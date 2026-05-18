import { fast_moves } from "../info_pokemons/fast_moves.js";
import { pokemons } from "../info_pokemons/pokemons.js";
import { pokemon_moves } from '../info_pokemons/pokemon_moves.js'
import { Type } from './type.js'
import { Attack } from './attack.js';

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
        // Pour chanque element dans la liste pokemon_moves
        for (let i = 0 ; i < pokemon_moves.length ; i++) {
            
            // Liste de type attaque à mettre dans le constructeur
            let lst_charged_moves = [];     // pokemons[i].fast_moves,
            let lst_fast_moves = [];        // pokemons[i].charged_moves 

            // remplissage liste fast mvs en type attaque
            pokemon_moves[i].fast_moves.forEach(attaque => {
                let current_attack = Attack.findByName(attaque)
                lst_fast_moves.push(current_attack)
            });

            // remplissage liste charged mvs en type attaque
            pokemon_moves[i].charged_moves.forEach(attaque => {
                let current_attack = Attack.findByName(attaque)
                lst_charged_moves.push(current_attack)

            });
            
            // Creation d'un nouveau pokemon
            const currentPokemon = new Pokemon(
                pokemons[i].pokemon_id,
                pokemons[i].pokemon_name,
                pokemons[i].base_stamina,
                pokemons[i].base_attack,
                pokemons[i].base_defense,
                null,                               
                lst_fast_moves,             
                lst_charged_moves          
            )
            console.log(currentPokemon)
            this.all_pokemons [currentPokemon.pokemon_id] = currentPokemon;
        }
        
    }


    static getTypes() {
        Type.fill_type()
        return Type.all_types
    }

    
}
Attack.fill_attacks();
Pokemon.fill_pokemons();