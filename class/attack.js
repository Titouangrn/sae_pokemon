//import {pokemon_moves} from "../info_pokemons/pokemon_moves.js";
import {fast_moves} from "../info_pokemons/fast_moves.js";
import {charged_moves} from "../info_pokemons/charged_moves.js";

/*
    Faire en sorte d'importer les variables sans mettre le export 
    dans le fichier js contenant la variable
*/

class Attack {

    static all_attacks = {};

    constructor(idAttack, nom, type, puissance, duree) {
        this.idAttack = idAttack;
        this.nom = nom;
        this.type = type;
        this.puissance = puissance;
        this.duree = duree;
    }

    toString() {
        return `${this.nom} : ${this.idAttack}, ${this.type}, ${this.puissance}, ${this.duree}`;
    }

    /**
     * Récupère les éléments dans charged_moves.js et fast_moves.js et 
     * ajoute les différentes attaques dans all_attacks
     */ 
    static fill_attacks() {
        charged_moves.forEach(chargedMove => {
            const current_attack = new Attack(
                chargedMove.move_id,
                chargedMove.name,
                chargedMove.type,
                chargedMove.power,
                chargedMove.duration
            );
            Attack.all_attacks[chargedMove.move_id] = current_attack;
        });
        
        fast_moves.forEach(fastMove => {
            const current_attack = new Attack(
                fastMove.move_id,
                fastMove.name,
                fastMove.type,
                fastMove.power,
                fastMove.duration
            );
            Attack.all_attacks[fastMove.move_id] = current_attack;
        });
    }

    
}

Attack.fill_attacks();