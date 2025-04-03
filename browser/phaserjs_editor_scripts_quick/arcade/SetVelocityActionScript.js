// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class SetVelocityActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityX = 0;
    velocityY = 0;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.body.setVelocity(this.velocityX, this.velocityY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
