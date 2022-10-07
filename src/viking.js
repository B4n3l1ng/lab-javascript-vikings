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
    armyAttack(attackers,defenders) {
        const attacker = Math.floor(Math.random()) * attackers.length;
        const defender = Math.floor(Math.random()) * defenders.length;
        const damage = attackers[attacker].attack();
        const result = defenders[defender].receiveDamage(damage);
        if (defenders[defender].health <=0) {
            defenders.splice(defender,1);
        }
        return result;
    }
    vikingAttack() {
        return this.armyAttack(this.vikingArmy,this.saxonArmy);   
    }
    saxonAttack() {
        return this.armyAttack(this.saxonArmy, this.vikingArmy);
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