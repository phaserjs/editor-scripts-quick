// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import AssignOpComp from "./AssignOpComp.js";
/* END-USER-IMPORTS */
export default class SetYActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    y = 0;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.y = AssignOpComp.computeValue(this, obj.y, this.y);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
