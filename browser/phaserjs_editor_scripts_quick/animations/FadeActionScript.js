// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp.js";
import EaseConfigComp from "./EaseConfigComp.js";
import DelayConfigComp from "./DelayConfigComp.js";
/* END-USER-IMPORTS */
export default class FadeActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    fadeDirection = "FadeIn";
    /* START-USER-CODE */
    execute(...args) {
        const sprite = this.getActionTargetObject(args);
        const duration = DurationConfigComp.getDuration(this, 250);
        const delay = DelayConfigComp.getDelay(this, 0);
        const ease = EaseConfigComp.getEase(this, "Expo");
        const from = this.fadeDirection === "FadeIn" ? 0 : sprite.alpha;
        const to = this.fadeDirection === "FadeIn" ? sprite.alpha : 0;
        sprite.alpha = from;
        this.scene.add.tween({
            targets: sprite,
            alpha: { from, to },
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
