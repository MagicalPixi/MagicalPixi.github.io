/**
 * Created by zjs on 16/3/31.
 */
var stage;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);

    // create the root of the scene graph
    stage = new PIXI.Container();

// create a video texture from a path
    var texture = PIXI.Texture.fromVideo('video/群星-相亲相爱一家人.mp3');

// create a new Sprite using the video texture (yes it's that easy)
    var videoSprite = new PIXI.Sprite(texture);

    videoSprite.width = renderer.width;
    videoSprite.height = renderer.height;

    stage.addChild(videoSprite);

    animate();
}

function animate(){

    // render the stage
    renderer.render(stage);

    requestAnimationFrame(animate);
}
