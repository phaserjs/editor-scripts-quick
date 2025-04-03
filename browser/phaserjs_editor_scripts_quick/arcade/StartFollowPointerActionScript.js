// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class StartFollowPointerActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    speed = 60;
    maxTime = 0;
    /* START-USER-CODE */
    _following = false;
    _targetObject;
    execute(...args) {
        this._following = true;
        this._targetObject = this.getActionTargetObject(args);
    }
    update() {
        if (!this._following || !this._targetObject) {
            return;
        }
        const pointer = this.scene.input.activePointer;
        this.scene.physics.moveTo(this._targetObject, pointer.x, pointer.y, this.speed, this.maxTime);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
