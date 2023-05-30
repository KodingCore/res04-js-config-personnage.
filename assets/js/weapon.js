class Weapon{
    name;
    hand;
    damages;
    
    constructor(name, hand, damages){
        this.name = name;
        this.hand = hand;
        this.daamages = damages;
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
    
    set name(name){
        this.name = name;
    }
    
    set hand(hand){
        this.hand = hand;
    }
    
    set damages(damages){
        this.damages = damages;
    }
}

export { Weapon };