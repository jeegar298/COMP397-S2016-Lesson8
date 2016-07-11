module objects {
    /**
     * This is a general label class for the game BoilerPlate
     * 
     * @export
     * @class label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {
        constructor(
            private labelString:string, 
            private fontSize:string, 
            private fontFamily:string, 
            private fontColour:string,
            x:number,
            y:number) {
            super(labelString,(fontSize + " " + fontFamily),fontColour);
            
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            
            // assign label coordinates
            this.x = x;
            this.y = y;
        }
    }
}