// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class EmitTickActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    delay = 1000;
    /* START-USER-CODE */
    execute(...args) {
        const target = this.getActionTargetObject(args);
        this.scene.time.addEvent({
            delay: this.delay,
            loop: true,
            callback: () => {
                if (target && !target.scene) {
                    // don't exec children
                    // if the game object is disabled
                    return;
                }
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
