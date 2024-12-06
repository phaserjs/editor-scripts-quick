// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
import ExecChildrenActionScript from "../core/ExecChildrenActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class IfBodyTouchingScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        // elseActions
        const elseActions = new ExecChildrenActionScript(this);
        // thenActions
        const thenActions = new ExecChildrenActionScript(this);
        this.elseActions = elseActions;
        this.thenActions = thenActions;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    elseActions;
    thenActions;
    left = false;
    right = false;
    up = false;
    down = false;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        const { left, right, up, down } = obj.body.touching;
        if (this.left && left
            || this.right && right
            || this.up && up
            || this.down && down) {
            this.thenActions.executeChildren(...args);
        }
        else {
            this.elseActions.executeChildren(...args);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
