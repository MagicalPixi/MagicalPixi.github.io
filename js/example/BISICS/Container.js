/**
 * Created by zjs on 16/3/29.
 */
var renderer, stage;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.body.appendChild(renderer.view);

// create the root of the scene graph
    stage = new PIXI.Container();

    var container = new PIXI.Container();

    stage.addChild(container);

    for (var j = 0; j < 5; j++) {

        for (var i = 0; i < 5; i++) {
            var bunny = PIXI.Sprite.fromImage('images/sign_icon.jpg');
            bunny.x = 40 * i;
            bunny.y = 40 * j;
            container.addChild(bunny);
        }
        ;
    }
    ;
    /*
     * All the bunnies are added to the container with the addChild method
     * when you do this, all the bunnies become children of the container, and when a container moves,
     * so do all its children.
     * This gives you a lot of flexibility and makes it easier to position elements on the screen
     */
    container.x = 100;
    container.y = 60;

// start animating
    animate();
}
function animate() {
    requestAnimationFrame(animate);

    // render the container
    renderer.render(stage);
}
