require('weui/dist/style/weui.min.css')
require('../css/nav.less')
require('../css/nav.pc.less')
require('../css/footer.less')
require('../css/footer.pc.less')
require('../css/about-us.less')
require('../css/about-us.pc.less')

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