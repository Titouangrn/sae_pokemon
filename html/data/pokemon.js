import { pokemons } from "./pokemons.js";
import { pokemon_types } from "./pokemon_types.js";
import { pokemon_moves } from "./pokemon_moves.js";
import { Type } from './type.js'
import { Attack } from './attack.js'

class Pokemon {

    static all_pokemons = []

    constructor(idPok, nomPok, stamina, baseAttaque, baseDefense, nomTypes, nomsAttaquesRapides, nomsAttaquesChargees) {
        this.idPok = idPok;
        this.nomPok = nomPok;
        this.stamina = stamina;
        this.baseAttaque = baseAttaque;
        this.baseDefense = baseDefense;

        this.types = [];
        nomTypes.forEach(type => this.types.push(new Type(type)));
        
        this.attaquesRapide = [];
        nomsAttaquesRapides.forEach(atk => this.attaquesRapide.push(new Attack(atk)));

        this.attaquesChargees = [];
        nomsAttaquesChargees.forEach(atk => this.attaquesChargees.push(new Attack(atk)));
    }


    toString() {
        return this.nomPok + " : " +
               "#" + this.idPok + ", " +
                this.getPokemonTypes().toString() + ", " +
               "[STA: " + this.stamina + ", ATK: " + this.baseAttaque + ", DEF: " + this.baseDefense + "], " +
               "Repides = " + this.getPokemonChargedAttacks().toString() + ", Chargées = " + this.getPokemonFastAttacks().toString();
    }

    getPokemonTypes() {
        var typeArray = [];
        for(const type in this.types) {typeArray.push(this.types[type].typeName)}
        return typeArray;
    }

    getPokemonChargedAttacks() {
        var chargedArray = [];
        for(const charged in this.attaquesChargees) {chargedArray.push(this.attaquesChargees[charged].attackName)}
        return chargedArray
    }

    getPokemonFastAttacks() {
        var fastArray = [];
        for(const fast in this.attaquesRapide) {fastArray.push(this.attaquesRapide[fast].attackName)}
        return fastArray
    }

    /*
    Exemple d’un toString() pour Bulbasaur : 
    Bulbasaur  :  #1,  [Grass,  Poison],  [STA:  128,  ATK:  118,  DEF:  111], 
    Rapides  = [Vine Whip, Tackle], Chargées = [Sludge Bomb, Seed Bomb, Power Whip] 
    */

    static fill_pokemons(){
        pokemons.forEach(poke => {
            if (poke.pokemon_name == undefined) {
                return;
            }

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

            Pokemon.all_pokemons.push(new Pokemon(
                poke.pokemon_id,
                poke.pokemon_name,
                poke.base_stamina,
                poke.base_attack,
                poke.base_defense,
                types.type,
                moves.fast_moves,
                moves.charged_moves            
            ));
        });
    }

    getTypes() {
        Type.fill_type()
        return Type.all_types
    }
}

Pokemon.fill_pokemons();

for (const poke in Pokemon.all_pokemons) {
    console.log(Pokemon.all_pokemons[poke].toString());
}