// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp.js";
import EaseConfigComp from "./EaseConfigComp.js";
import DelayConfigComp from "./DelayConfigComp.js";
/* END-USER-IMPORTS */
export default class MoveInSceneActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    from = "NONE";
    /* START-USER-CODE */
    execute(...args) {
        const sprite = this.getActionTargetObject(args);
        const duration = DurationConfigComp.getDuration(this, 250);
        const delay = DelayConfigComp.getDelay(this, 0);
        const ease = EaseConfigComp.getEase(this, "Expo");
        const { x, y } = sprite;
        let fromX = x;
        let fromY = y;
        switch (this.from) {
            case "LEFT":
                fromX = -sprite.displayWidth;
                break;
            case "RIGHT":
                fromX = this.scene.scale.width + sprite.displayWidth;
                break;
            case "TOP":
                fromY = -sprite.displayHeight;
                break;
            case "BOTTOM":
                fromY = this.scene.scale.height + sprite.displayHeight;
                break;
        }
        sprite.setPosition(fromX, fromY);
        this.scene.add.tween({
            targets: sprite,
            x,
            y,
            duration,
            delay,
            ease,
            onComplete: () => {
                this.executeChildren();
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
