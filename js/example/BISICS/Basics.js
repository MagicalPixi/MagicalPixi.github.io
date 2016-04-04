/**
 * Created by zjs on 16/3/29.
 */
var renderer, stage, texture, bunny;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);

    // create the root of the scene graph
    stage = new PIXI.Container();

    // create a texture from an image path
    texture = PIXI.Texture.fromImage('images/sign_icon.jpg');

    // create a new Sprite using the texture
    bunny = new PIXI.Sprite(texture);

    // center the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    // start animating
    animate();
}
function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}
