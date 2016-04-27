var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('dragon'),

  

    

    "scale.x" :  0.5 ,

    

  

    

    "scale.y" :  0.5 ,

    

  

    

    "animationSpeed" :  0.1 ,

    

  

    

  

    

    "spriteName" :  "dragon" ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getMc.apply(pixiLib,args);

  return mySprite;
}