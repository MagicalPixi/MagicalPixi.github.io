require('../css/nav.less')
require('../css/index.less')
require('../css/index.pc.less')

var pixiLib = require('pixi-lib')

var nav = document.querySelector('.top nav')

var ulList = nav.querySelector('ul')

nav.addEventListener('click',function () {

  if(ulList.classList.contains('show')){
    ulList.classList.remove('show')
  }else{
    ulList.classList.add('show')
  }
  
})