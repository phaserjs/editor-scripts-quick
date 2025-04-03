// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp.js";
/* END-USER-IMPORTS */
export default class PushActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    _executing = false;
    execute(args) {
        if (this._executing) {
            return;
        }
        this._executing = true;
        const duration = DurationConfigComp.getDuration(this, 80);
        const obj = this.getActionTargetObject(args);
        const { scaleX, scaleY } = obj;
        this.scene.add.tween({
            targets: obj,
            scaleX: scaleX * 0.8,
            scaleY: scaleY * 0.8,
            duration,
            yoyo: true,
            onComplete: () => {
                this._executing = false;
                this.executeChildren(args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
