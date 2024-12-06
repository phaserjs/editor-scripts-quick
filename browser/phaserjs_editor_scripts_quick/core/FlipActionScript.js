// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class FlipActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    horizontal = false;
    vertical = false;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        if (this.horizontal) {
            obj.flipX = !obj.flipX;
        }
        if (this.vertical) {
            obj.flipY = !obj.flipY;
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
