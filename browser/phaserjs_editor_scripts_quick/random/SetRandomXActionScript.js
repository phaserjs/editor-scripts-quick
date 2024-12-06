// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import GetRandom from "./GetRandom.js";
import AssignOpComp from "../core/AssignOpComp.js";
/* END-USER-IMPORTS */
export default class SetRandomXActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        const newValue = GetRandom.getRandom(this);
        obj.x = AssignOpComp.computeValue(this, obj.x, newValue);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
