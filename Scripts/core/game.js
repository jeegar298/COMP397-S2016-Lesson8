/// <reference path="_reference.ts"/>
/**
 * @author Jeegar Shah jeegarjam@gmail.com
 * @studentID 300818577
 * @date July 11, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // Variable Declarations
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton; // reference to our button class
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        main(); // call the main game function
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        core.stage.update(); // refreshes the stage
    }
    /**
     * This is the startButton click event handler
     *
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    /**
     * This is the main game method
     *
     * @method main
     * @returns {void}
     */
    function main() {
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240);
        core.stage.addChild(helloLabel);
        startButton = new objects.Button("../../Assets/images/startButton.png", 320, 340, true);
        core.stage.addChild(startButton);
        startButton.on("click", startButtonClick);
    }
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", init);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map