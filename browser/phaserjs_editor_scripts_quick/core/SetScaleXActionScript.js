// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import AssignOpComp from "./AssignOpComp.js";
/* END-USER-IMPORTS */
export default class SetScaleXActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    scaleX = 1;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.scaleX = AssignOpComp.computeValue(this, obj.scaleX, this.scaleX);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
