class Character{
    
    #helmet;
    #axe;
    #shield;
    #sword;
    
    constructor(){
        this.#helmet = false;
        this.#axe = false;
        this.#shield = false;
        this.#sword = false;
    }
    
    get helmet (){
        return this.#helmet;
    }
    
    get axe (){
        return this.#axe;
    }
    
    get shield (){
        return this.#shield;
    }
    
    get sword (){
        return this.#sword;
    }
    
    set helmet (helmet){
        this.#helmet = helmet;
        this.render();
    }
    
    set axe (axe){
        this.#axe = axe;
        this.render();
    }
    
    set shield (shield){
        this.#shield = shield;
        this.render();
    }
    
    set sword (sword){
        this.#sword = sword;
        this.render();
    }
    
    render(){
        let sectionLeft = document.querySelector("#left");
        let sectionCenter = document.querySelector("#center");
        let sectionRight = document.querySelector("#right");
        
        if(this.#helmet !== false){ //si un casque est porté
            sectionCenter.classList.add("helmet");
        }else{
            sectionCenter.classList.remove("helmet");
        }
        
        if(this.#axe !== false){ //si une hache est porté
            if(this.axe.hand === "left"){
                sectionLeft.classList.remove("shield");
                sectionLeft.classList.add("axe");
                sectionLeft.style.transform = "scaleX(-1)";
            }else{
                sectionRight.classList.add("axe");
            }
        }else{
            sectionRight.classList.remove("axe");
            sectionLeft.classList.remove("axe");
        }
        
        if(this.#shield !== false){
            sectionLeft.classList.remove("axe");
            sectionLeft.classList.add("shield");
        }else{
            sectionLeft.classList.remove("shield");
        }
        
        if(this.#sword !== false){
            if(this.sword.hand === "left"){
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

export { Character }