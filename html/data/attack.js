import {fast_moves} from "../info_pokemons/fast_moves.js";
import {charged_moves} from "../info_pokemons/charged_moves.js";

/*
    Faire en sorte d'importer les variables sans mettre le export 
    dans le fichier js contenant la variable
*/

class Attack {
    static all_attacks;

    constructor(nom) {
        
        if (Attack.all_attacks == undefined) {
            Attack.fill_attacks();
        }

        this.nom = nom;
        this.move_id = Attack.all_attacks[nom]["move_id"];
        this.type = Attack.all_attacks[nom]["type"];
        this.power = Attack.all_attacks[nom]["power"];
        this.duration = Attack.all_attacks[nom]["duration"];
    }

    toString() {
        return `${this.nom}: ${this.move_id}, ${this.type}, ${this.power}, ${this.duration}`;
    }

    /**
     * Récupère les éléments dans charged_moves.js et fast_moves.js et 
     * ajoute les différentes attaques dans all_attacks
     */ 
    static fill_attacks() {
        Attack.all_attacks = {};

        for (const moveIndex in fast_moves) {
            var move = fast_moves[moveIndex];

            // check if the attack has not been initiated yet
            if (Attack.all_attacks[move["name"]] == undefined ) {
                // Add the attack to the all attack array
                Attack.all_attacks[move["name"]] = {"move_id": move["move_id"], "type": move["type"], "power": move["power"], "duration": move["duration"]};
            } 
        }

        for (const moveIndex in charged_moves) {
            var move = charged_moves[moveIndex];

            // check if the attack has not been initiated yet
            if (Attack.all_attacks[move["name"]] == undefined ) {
                // Add the attack to the all attack array
                Attack.all_attacks[move["name"]] = {"move_id": move["move_id"], "type": move["type"], "power": move["power"], "duration": move["duration"]};
            } 
        }
    }
}

var attack = new Attack("Sludge Bomb");
console.log(attack.toString());