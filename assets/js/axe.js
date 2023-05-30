import { Weapon } from "./weapon.js";

class Axe extends Weapon{
    slashDamages;
    
    constructor(name, hand, damages, slashDamages){
        super (name, hand, damages);
        this.slashDamages = slashDamages;
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
    
    get slashDamages(){
        return this.slashDamages;
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
    
    set slashDamages(slashDamages){
        this.slashDamages = slashDamages;
    }
}

export { Axe };