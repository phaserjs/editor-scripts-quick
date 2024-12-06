// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "../animations/DurationConfigComp.js";
/* END-USER-IMPORTS */
export default class FadeCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    fadeDirection = "FadeIn";
    color = "#000000";
    /* START-USER-CODE */
    static getColor(colorName) {
        if (colorName.startsWith("#")) {
            colorName = colorName.substring(0, 7);
        }
        const color = Phaser.Display.Color.ValueToColor(colorName);
        return color;
    }
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 1000);
        const { red, green, blue } = FadeCameraActionScript.getColor(this.color);
        if (this.fadeDirection === "FadeIn") {
            camera.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => this.executeChildren(...args));
            camera.fadeIn(duration, red, green, blue);
        }
        else {
            camera.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => this.executeChildren(...args));
            camera.fadeOut(duration, red, green, blue);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
