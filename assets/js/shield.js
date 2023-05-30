import { Armor } from "./armor.js";

class Shield extends Armor{
    block;
    
    constructor(name, resistance, block){
        super (name, resistance);
        this.block = block;
    }
    
    get name(){
        return this.name;
    }
    
    get resistance(){
        return this.resistance;
    }
    
    get block(){
        return this.block;
    }
    
    set name(name){
        this.name = name;
    }
    
    set resistance(resistance){
        this.resistance = resistance;
    }
    
    set block(block){
        this.block = block;
    }
}

export { Shield };