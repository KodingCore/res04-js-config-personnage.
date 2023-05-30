class Character{
    
    _helmet;
    _axe;
    _shield;
    _sword;
    
    constructor(){
        this._helmet = false;
        this._axe = false;
        this._shield = false;
        this._sword = false;
    }
    
    get helmet(){
        return this._helmet;
    }
    
    get axe(){
        return this._axe;
    }
    
    get shield(){
        return this._shield;
    }
    
    get sword(){
        return this._sword;
    }
    
    set helmet(helmet){
        this._helmet = helmet;
        this.render();
    }
    
    set axe(axe){
        this._axe = axe;
        this.render();
    }
    
    set shield(shield){
        this._shield = shield;
        this.render();
    }
    
    set sword(sword){
        this._sword = sword;
        console.log(this._helmet + " " + this._axe + " " + this._shield + " " + this._sword);
        this.render();
    }
    
    render(){
        let sectionLeft = document.querySelector("#left");
        let sectionCenter = document.querySelector("#center");
        let sectionRight = document.querySelector("#right");
        
        
        if(this._helmet != false){
            sectionCenter.classList.add("helmet");
        }else{
            sectionCenter.classList.remove("helmet");
        }
        
        if(this._axe != false){
            if(this._axe.hand === "left"){
                sectionLeft.classList.add("axe");
                sectionLeft.style.transform = "scaleX(-1)";
            }else{
                sectionRight.classList.add("axe");
            }
        }else{
            sectionRight.classList.remove("axe");
            sectionLeft.classList.remove("axe");
        }
        
        if(this._shield != false){
            sectionLeft.classList.add("shield");
        }else{
            sectionLeft.classList.remove("shield");
        }
        
        if(this._sword != false){
            if(this._sword.hand === "left"){
                sectionLeft.classList.add("sword");
                sectionLeft.style.transform = "scaleX(-1)";
            }else{
                sectionRight.classList.add("sword");
            }
        }else{
            sectionLeft.classList.remove("sword");
            sectionRight.classList.remove("sword");
        }
        
        
    } 
}

export { Character };