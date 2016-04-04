/**
 * Created by zjs on 16/3/31.
 */
/**
 * Created by zjs on 16/3/31.
 */
/**
 * Created by zjs on 16/3/31.
 */
var stage, rt, container;
window.onload = function () {
    var playContainerStyle = getComputedStyle(document.querySelector('#playContainer'));
    var width = playContainerStyle.width.replace('px', '');
    var height = playContainerStyle.height.replace('px', '');
    renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x1099bb});
    document.getElementById("playContainer").appendChild(renderer.view);

    // create the root of the scene graph
    stage = new PIXI.Container();

    container = new PIXI.Container();

    stage.addChild(container);

    for (var j = 0; j < 5; j++) {

        for (var i = 0; i < 5; i++) {
            var bunny = PIXI.Sprite.fromImage('images/sign_icon.jpg');
            bunny.x = 30 * i;
            bunny.y = 30 * j;
            bunny.rotation = Math.random() * (Math.PI * 2)
            container.addChild(bunny);
        }
        ;
    }
    ;

    var brt = new PIXI.BaseRenderTexture(300, 200, PIXI.SCALE_MODES.LINEAR, 0.1);
    rt = new PIXI.RenderTexture(brt);

    sprite.x = 450;
    sprite.y = 60;
    stage.addChild(sprite)
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

    rt.render(container)

    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
}
