/**
 * Created by zjs on 16/3/29.
 */
var renderer, stage;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);

    // create the root of the scene graph
    stage = new PIXI.Container();

    sprite = PIXI.Sprite.fromImage('images/sign_icon.jpg');

    sprite.position.set(230, 264);
    sprite.interactive = true;
    sprite.on('mousedown', onDown);
    sprite.on('touchstart', onDown);

    stage.addChild(sprite);

    function onDown(eventData) {
        sprite.scale.x += 0.3;
        sprite.scale.y += 0.3;
    }

// start animating
    animate();
}

function animate() {

    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
}
