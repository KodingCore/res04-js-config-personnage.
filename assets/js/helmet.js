import { Armor } from "./armor.js";

class Helmet extends Armor{
    visib;
    
    constructor(name, resistance, visibility){
        
        super (name, resistance);
        this.visib = visibility;
    }
    
    get name(){
        return this.name;
    }
    
    get resistance(){
        return this.resistance;
    }
    
    get visibility(){
        return this.visib;
    }
    
    set name(name){
        
        this.name = name;
    }
    
    set resistance(resistance){
        this.resistance = resistance;
    }
    
    set visibility(visibility){
        
        this.visib = visibility;
    }
}

export { Helmet };