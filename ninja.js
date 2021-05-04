class Ninja {
    constructor(name, health, speed, stealth, strength) {
        this.name = name;
        this.health = health;
        this.stealth = stealth;
        this.speed = speed;
        this.strength = strength;

    }

    drinkSake() {
        this.health += 10
        console.log(`${this.name}', drank Sake and his health is now increased by 10`)
    }
    sayName() {
        console.log(`My Name is ${this.name}, and I am a master ninja!`)
    }
    showStats() {
        console.log(`${this.name}'s, health is ${this.health}, speed is ${this.speed}, stealth is ${this.stealth}, strength is ${this.strength}..`)
    }
}
var gaiden = new Ninja("Ryu Hayabusa", 100, 20, 15, 20)
var turtle = new Ninja("Hamato Yoshi", 100, 20, 10, 25)
gaiden.sayName()
turtle.sayName()
gaiden.showStats()
turtle.showStats()
gaiden.drinkSake()
turtle.drinkSake()
gaiden.showStats()
turtle.showStats()

