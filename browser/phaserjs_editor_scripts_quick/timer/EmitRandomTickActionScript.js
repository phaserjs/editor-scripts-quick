// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import GetRandom from "../random/GetRandom.js";
/* END-USER-IMPORTS */
export default class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    _target;
    execute(...args) {
        this._target = this.getActionTargetObject(args);
        this.nextTick(...args);
    }
    nextTick(...args) {
        const delay = GetRandom.getRandom(this);
        this.scene.time.addEvent({
            delay,
            callback: () => {
                if (this._target && !this._target.scene) {
                    // don't exec children
                    // if the game object is disabled
                    return;
                }
                this.executeChildren(...args);
                this.nextTick(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
