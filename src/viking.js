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

    vikingAttack() {
        const attacker = Math.floor(Math.random()) * this.vikingArmy.length;
        const attacked = Math.floor(Math.random()) * this.saxonArmy.length;
        const damage = this.vikingArmy[attacker].attack();
        const result = this.saxonArmy[attacked].receiveDamage(damage);
        if (this.saxonArmy[attacked].health <=0) {
            this.saxonArmy.splice(attacked,1);
        }
       return result;
    }

    saxonAttack() {
        const attacker = Math.floor(Math.random()) * this.saxonArmy.length;
        const attacked = Math.floor(Math.random()) * this.vikingArmy.length;
        const damage = this.saxonArmy[attacker].attack();
        const result = this.vikingArmy[attacked].receiveDamage(damage);
        if (this.vikingArmy[attacked].health <=0) {
            this.vikingArmy.splice(attacked,1);
        }
       return result;
    }
}
