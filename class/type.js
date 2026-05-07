import {type_effectiveness} from "../info_pokemons/type_effectiveness.js"

class Type {
    static typeFormatted
    static all_types

    constructor() {
       this.typeFormatted = {}

       for (const type in type_effectiveness) {
            for (const ennemyType in type_effectiveness[type]) {
                // check if the type has not been initiated yet and if the attack percentage is also present for a given type
                if (this.typeFormatted[type] == undefined 
                ||  this.typeFormatted[type][type_effectiveness[type][ennemyType]] == undefined) {
                    // Assign to not replace the in this.typeFormatted[type]
                    this.typeFormatted[type] = Object.assign({}, this.typeFormatted[type], {[type_effectiveness[type][ennemyType]]: [ennemyType]});

                } else {
                    // Adding the ennemy type to the list if the damage % is alredy present
                    var list = this.typeFormatted[type][type_effectiveness[type][ennemyType]]
                    list.push(ennemyType)
                    this.typeFormatted[type] = {[type_effectiveness[type][ennemyType]]: list}
                }
            }
        }
    }

    toString() {
        var string = ""

        for (const type in this.typeFormatted) {
            string = string + type + " : "

            for (const percentage in this.typeFormatted[type]) {
                string = string + percentage + " [" + this.typeFormatted[type][percentage] + "], "
            }

            string = string + "\n"
        }

        return string
    }

    /**
     * Fill the all_types variable with 
     */
    static fill_type() {
        this.all_types = []
        for (const type in type_effectiveness) {
            this.all_types.push(type)
        }
    }
}
