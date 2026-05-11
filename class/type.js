import {type_effectiveness} from "../info_pokemons/type_effectiveness.js"

export class Type {
    static typeFormatted = {}
    static all_types = []

    constructor(type) { // Todo faire en sorte que ça devienne un vrais type en mode plante elec ... 
        if (Type.typeFormatted == undefined) {
            Type.formatType()
        }
        
        if (Type.typeIsPresent(type)) {
            this.type = type
        }        
    }

    /**
     * Setter for the type of pokemon
     * @param {String} type 
     */
    type(type) {
        if (this.typeIsPresent(type)) {
            this.type = type
        }
    }

    /**
     * Getter for the type
     * @returns The type attributed
     */
    type() {
        return this.type
    }

    /**
     * Test whether a type is in the list of all the fields or not 
     * @param {String} typeTested 
     * @returns True if yes, false if no
     */
    static typeIsPresent(typeTested) {
        if (Type.all_types == undefined) {
            Type.fill_type()
        }
        
        if (Type.all_types.includes(typeTested)) {
            return true   
        } else {
            return false
        }
    }

    /**
     * Fromat all the type into a string
     * @returns String containing the formatted result of all the types
     */
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
        for (const type in type_effectiveness) {
            this.all_types.push(type)
        }
    }

    /**
     * Format the type to return a better data set
     */
    static formatType() {
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
}
