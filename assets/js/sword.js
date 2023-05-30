import { Weapon } from "./weapon.js";

class Sword extends Weapon{
    pommelStrikeDamages;
    
    constructor(name, hand, damages, pommelStrikeDamages){
        super (name, hand, damages);
        this.pommelStrikeDamages = pommelStrikeDamages;
    }
    
    get name(){
        return this.name;
    }
    
    get hand(){
        return this.hand;
    }
    
    get damages(){
        return this.damages;
    }
    
    get pommelStrikeDamages(){
        return this.pommelStrikeDamages;
    }
    
    set name(name){
        this.name = name;
    }
    
    set hand(hand){
        this.hand = hand;
    }
    
    set damages(damages){
        this.damages = damages;
    }
    
    set pommelStrikeDamages(pommelStrikeDamages){
        this.pommelStrikeDamages = pommelStrikeDamages;
    }
}

export { Sword };