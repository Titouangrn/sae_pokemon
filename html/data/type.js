import {type_effectiveness} from "./type_effectiveness.js"

export class Type {
    static all_types;

    constructor(type) { // Todo faire en sorte que ça devienne un vrais type en mode plante elec ... 
        if (Type.all_types == undefined) {
            Type.all_types = {};
            Type.fill_types()
        }

        if (Type.typeIsPresent(type)) {
            this.typeName = type;
            this.effet = Type.all_types[type];
        }
    }

    get typeName () {
        return this._typeName;
    }

    set typeName (newTypeName) {
        this._typeName = newTypeName;
    }

    /**
     * Test whether a type is in the list of all the fields or not 
     * @param {String} typeTested 
     * @returns True if yes, false if no
     */
    static typeIsPresent(typeTested) {
        for (const type in Type.all_types) {
            if (typeTested == type) {
                return true;
            }
        }
        return false;
    }

    /**
     * Fromat all the type into a string
     * @returns String containing the formatted result of all the types
     */
    toString() {
        var string = this.type + " : "

        for (const percentage in this.effet) {
            string = string + percentage + " [" + this.effet[percentage] + "], "
        }

        string = string + "\n"

        return string
    }

    /**
     * Format the type to return a better data set
     */
    static fill_types() {
        for (const type in type_effectiveness) {
            for (const ennemyType in type_effectiveness[type]) {
                // check if the type has not been initiated yet and if the attack percentage is also present for a given type
                if (Type.all_types[type] == undefined
                ||  Type.all_types[type][type_effectiveness[type][ennemyType]] == undefined) {
                    // Assign to not replace the in this.typeFormatted[type]
                    Type.all_types[type] = Object.assign({}, Type.all_types[type], {[type_effectiveness[type][ennemyType]]: [ennemyType]});

                } else {
                    // Adding the ennemy type to the list if the damage % is alredy present
                    var list = Type.all_types[type][type_effectiveness[type][ennemyType]]
                    list.push(ennemyType)
                    Type.all_types[type] = {[type_effectiveness[type][ennemyType]]: list}
                }
            }
        }
    }
}
