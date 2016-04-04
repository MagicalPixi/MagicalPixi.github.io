/**
 * Created by zjs on 16/3/29.
 */

var renderer, stage, tilingSprite, count;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);

// create the root of the scene graph
    stage = new PIXI.Container();

// create a texture from an image path
    var texture = PIXI.Texture.fromImage('images/sign_icon.jpg');

    /* create a tiling sprite ...
     * requires a texture, a width and a height
     * in WebGL the image size should preferably be a power of two
     */
    tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
    stage.addChild(tilingSprite);

    count = 0;

    animate();
}
function animate() {

    count += 0.005;

    tilingSprite.tileScale.x = 2 + Math.sin(count);
    tilingSprite.tileScale.y = 2 + Math.cos(count);

    tilingSprite.tilePosition.x += 1;
    tilingSprite.tilePosition.y += 1;

    // render the root container
    renderer.render(stage);

    requestAnimationFrame(animate);
}
