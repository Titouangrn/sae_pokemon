import {type_effectiveness} from "../info_pokemons/type_effectiveness.js"

class Type {
    constructor() {
       this.typeFormatted = {}

       for (const type in type_effectiveness) {
            for (const ennemyType in type_effectiveness[type]) {
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
}

var type = new Type()
console.log(type.toString())