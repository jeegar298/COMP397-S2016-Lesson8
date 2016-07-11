module objects {
    /**
     * This abstract scene class is used to create individual scenes
     * 
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    export abstract class Scene extends createjs.Container {
        constructor() {
            super();

            this.Start();
        }
        /**
         * Add game objects to the scene in this method
         * 
         * @method Start
         * @returns {void} 
         */
        public Start():void {
            core.stage.addChild(this);
        }
        /**
         * Updates game objects in the scene
         * 
         * @method Update
         * @returns {void} 
         */
        public Update():void {
            
        }
    }
}