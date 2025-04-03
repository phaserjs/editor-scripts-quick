// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import FadeCameraActionScript from "./FadeCameraActionScript.js";
import DurationConfigComp from "../animations/DurationConfigComp.js";
/* END-USER-IMPORTS */
export default class FlashCameraActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    color = "#000000";
    /* START-USER-CODE */
    execute(...args) {
        const camera = this.scene.cameras.main;
        const duration = DurationConfigComp.getDuration(this, 250);
        const { red, green, blue } = FadeCameraActionScript.getColor(this.color);
        camera.once(Phaser.Cameras.Scene2D.Events.FLASH_COMPLETE, () => {
            this.executeChildren(...args);
        });
        camera.flash(duration, red, green, blue);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
