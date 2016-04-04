/**
 * Created by zjs on 16/3/27.
 */
var width, height;
var stage, renderer, bunny, texture, icon_width, icon_height;
var iconTraceArray = [50,90,120,140,150,154,157,159,160,159,157,154,150,140,120,90,50];
var trace_index = -1;
var blockArray = [];
var minTime = 40;
var random = 0.1;
var currentTime = 0;
var speed = 4;
var code;
var isProcess = false;
var currentBlockIndex = 0;
var startSprite,scaleText, failureText, scale =0, reStartSprite;
var style = {
    font: 'bold italic 36px Arial',
    fill: '#F7EDCA',
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
};
function createBlock() {
    if(currentTime == 0) {
        var ran = Math.random();
        if(ran < random) {
            currentTime = minTime;
            addBlock();
        }
    }
}
function addBlock() {
    // 创建添加一个素材
    var texture = PIXI.Texture.fromImage("images/sign_icon.jpg");
    // 使用素材创建一个动画元素
    var bunny = new PIXI.Sprite(texture);

    // 居中
    bunny.anchor.x = .5;
    bunny.anchor.y = 1;
    bunny.width = 30;
    bunny.height = 40;
    bunny.position.x = width;
    bunny.position.y = icon_height;
    blockArray.push(bunny);
    stage.addChild(bunny);
}
function blockUpdate() {
    for(var i = 0; i < blockArray.length; i++) {
        var block = blockArray[i];
        var positionX = block.position.x;
        positionX = positionX-speed;
        block.position.x = positionX;
        if(positionX < -50) {
            blockArray.splice(0, 1);
            i--;
            currentBlockIndex--;
            stage.removeChild(block);
        }
    }
}
function isCrash(px1,py1,w1, h1,px2, py2, w2, h2) {
    px1 = px1+w1/2;
    px2 = px2+w2/2;
    py1 = py1-h1/2;
    py2 = py2-h2/2;
    if((Math.abs(px1-px2) < w1/2+w2/2) && (Math.abs(py1-py2) < h1/2+h2/2)) {
        console.log("allArgs:",px1,py1,w1,h1,px2, py2, w2, h2);
        return true;
    }
    return false;
}
function crashCheck() {
    var currentBlock = blockArray[currentBlockIndex]
    if(currentBlock != null) {
        var positionX = currentBlock.position.x-15;
        if(positionX < 400+15 && positionX > 400-15-30) {
            return isCrash(bunny.position.x-15,bunny.position.y, 30, 80,
                currentBlock.position.x-15, currentBlock.position.y, 30, 40);
        } else if(positionX < 400-15-30) {
            currentBlockIndex++;
            scale++;
            scaleText.text = '分数:'+scale;
        }
        return false;
    }
}
function getIconCurrentHeight() {
    if(trace_index == -1) {
        return icon_height;
    } else {
        if(trace_index == iconTraceArray.length-1) {
            trace_index = -1;
            return icon_height-iconTraceArray[iconTraceArray.length-1];
        } else {
            trace_index += 1;
            return icon_height-iconTraceArray[trace_index];
        }
    }
}
function keyDown(e){
    var keycode = e.keyCode;
    console.log(keycode);
    if(keycode == 32 && trace_index == -1) {
        trace_index = 0;
    } else if(keycode == 66) {
        window.cancelAnimationFrame(code);
        for(var i in blockArray) {
            var block = blockArray[i];
        }
    } else if(keycode == 67) {
        animate();
    }
}
document.onkeydown = keyDown;
window.onload = function() {
    init();
}

function init() {
    width = 800;
    height = 400;
    renderer = PIXI.autoDetectRenderer(800, 400, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);
    // create the root of the scene graph
    stage = new PIXI.Container();

    // 创建添加一个素材
    texture = PIXI.Texture.fromImage("images/sign_icon.jpg");
    // 使用素材创建一个动画元素
    bunny = new PIXI.Sprite(texture);

    // 居中
    bunny.anchor.x = .5;
    bunny.anchor.y = 1;
    bunny.width = 30;
    bunny.height = 80;
    // 移动到游戏屏幕中央

    icon_width = parseInt(0.5*width);
    icon_height = parseInt(0.75*height);
    bunny.position.x = icon_width;
    stage.addChild(bunny);
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xffd900);
    graphics.lineStyle(4, 0xffd900, 1);

// draw a shape
    graphics.moveTo(0, icon_height);
    graphics.lineTo(width, icon_height);
    graphics.lineTo(width, icon_height+6);
    graphics.lineTo(0, icon_height+6);
    graphics.endFill();
    stage.addChild(graphics);




    scaleText = new PIXI.Text('分数:0', style);
    scaleText.x = 600;
    scaleText.y = 20;
    stage.addChild(scaleText);

    startSprite = PIXI.Sprite.fromImage('images/sign_icon.jpg');
    startSprite.width = 100;
    startSprite.height = 40;
    // 居中
    startSprite.anchor.x = .5;
    startSprite.anchor.y = .5;
    startSprite.position.set(400, 200);
    startSprite.interactive = true;
    startSprite.on('mousedown', onDown);
    startSprite.on('touchstart', onDown);

    stage.addChild(startSprite);

    function onDown(eventData) {
        start();
    }
    animate();
}

function playProcess() {
    if(currentTime > 0)
        currentTime--;

    createBlock();
    blockUpdate();
}

function start() {
    isProcess = true;
    stage.removeChild(startSprite);
}
function stop() {
    isProcess = false;
    window.cancelAnimationFrame(code);


    failureText = new PIXI.Text('您的分数为'+scale+"             继续努力!", style);
    failureText.x = 300;
    failureText.y = 100;
    stage.addChild(failureText);

    reStartSprite = PIXI.Sprite.fromImage('images/sign_icon.jpg');
    reStartSprite.width = 100;
    reStartSprite.height = 40;
    // 居中
    reStartSprite.anchor.x = .5;
    reStartSprite.anchor.y = .5;
    reStartSprite.position.set(400, 250);
    reStartSprite.interactive = true;
    reStartSprite.on('mousedown', onDown);
    reStartSprite.on('touchstart', onDown);

    stage.addChild(reStartSprite);

    function onDown(eventData) {
        console.log("restrat");
        reStartInit();
    }
}

function reStartInit() {
    scale = 0;
    stage.removeChild(failureText);
    stage.removeChild(reStartSprite);
    for(var i in blockArray) {
        var block =  blockArray[i];
        stage.removeChild(block);
    }
    scaleText.text = "分数:"+scale;
    blockArray = [];
    isProcess = true;
    currentBlockIndex = 0;
    animate();
}

function animate() {
    code = requestAnimationFrame( animate );
    bunny.position.y = getIconCurrentHeight();
    if(isProcess) {

        playProcess();
        if(crashCheck()) {
            stop();
        }
    }
    renderer.render(stage);
}