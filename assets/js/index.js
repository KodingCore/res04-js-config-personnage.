import { Character } from "./character.js";
import { Axe } from "./axe.js";
import { Helmet } from "./helmet.js";
import { Shield } from "./shield.js";
import { Sword } from "./sword.js";

const btns = document.querySelectorAll("button");
let hero = null;

function initialize(){
   hero = new Character;
}


function listener()
{
   
   for(let btn of btns)
   {
      
      btn.addEventListener("click", function(event)
      {
         
         if(event.target.id === "helmet-btn")
         {
            
            if(!hero.helmet){
               
               hero.helmet = new Helmet("casque en pierre", 18, 10);
            }else{
               hero.helmet = false;
            }
            
         }
         else if(event.target.id === "shield-btn")
         {
            if(!hero.shield){
               hero.shield = new Shield("bouclier de verre", 1, 5);
            }else{
               hero.shield = false;
            }
            
         }
         else if(event.target.id === "axe-btn")
         {
            if(!hero.axe){
               hero.axe = new Axe("Hache en bois", "left", 5, 10);
            }else{
               hero.axe = false;
            }
            
         }
         else if(event.target.id === "sword-btn")
         {
            if(!hero.sword){
               hero.sword = new Sword("épée des ténèbres", "right", 180, 100);
            }else{
               hero.sword = false;
            }
            
         }
      });
   }
}


window.addEventListener("DOMContentLoaded", function()
{
   initialize();
   listener();

})