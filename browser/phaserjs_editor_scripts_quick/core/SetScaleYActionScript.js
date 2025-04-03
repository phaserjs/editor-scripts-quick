// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import AssignOpComp from "./AssignOpComp.js";
/* END-USER-IMPORTS */
export default class SetScaleYActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    scaleY = 1;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.scaleY = AssignOpComp.computeValue(this, obj.scaleY, this.scaleY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
