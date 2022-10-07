// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health; 
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`; 
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!" //should've been "FOR VALHALLA!" ;)
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0) {
            return `A Saxon has received ${damage} points of damage`;
        }else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
armyAttack(army) {
        if (army === "viking") {
        const attacker = Math.floor(Math.random()) * this.vikingArmy.length;
        const attacked = Math.floor(Math.random()) * this.saxonArmy.length;
        const damage = this.vikingArmy[attacker].attack();
        const result = this.saxonArmy[attacked].receiveDamage(damage);
        if (this.saxonArmy[attacked].health <=0) {
            this.saxonArmy.splice(attacked,1);
        }
       return result;
        } else if (army === "saxon") {
        const attacker = Math.floor(Math.random()) * this.saxonArmy.length;
        const attacked = Math.floor(Math.random()) * this.vikingArmy.length;
        const damage = this.saxonArmy[attacker].attack();
        const result = this.vikingArmy[attacked].receiveDamage(damage);
        if (this.vikingArmy[attacked].health <=0) {
            this.vikingArmy.splice(attacked,1);
        }
       return result;
        } else {
            return "Something went wrong"
        }
}
    vikingAttack() {
        this.armyAttack("Viking")
    }

    saxonAttack() {
        this.armyAttack("Saxon")
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!" //FOR VALHALLA!
        } else if (this.vikingArmy.length ===0) {
            return "Saxons have fought for their lives and survived another day..." //For King Arthus, I guess?
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}