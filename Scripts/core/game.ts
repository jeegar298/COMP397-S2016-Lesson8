/// <reference path="_reference.ts"/>

/**
 * @author Jeegar Shah jeegarjam@gmail.com
 * @studentID 300818577
 * @date July 11, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
namespace core {
    
    // Variable Declarations
    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;

    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    let assetData = [
        {id: "startButton", src:"../../Assets/images/startButton.png"}
    ];
    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void} 
     */
    function preload():void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);

        assets.on("complete", init, this);
        assets.loadManifest(assetData);

    }

    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
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
    function gameLoop(event: createjs.Event): void {

        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    /**
     * This is the main game method
     * 
     * @method main
     * @returns {void}
     */
    function main(): void {
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000",320,240);
        stage.addChild(helloLabel);

        startButton = new objects.Button(
            "startButton", 320, 340, true);
        stage.addChild(startButton);

        startButton.on("click", startButtonClick);
    }

    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++