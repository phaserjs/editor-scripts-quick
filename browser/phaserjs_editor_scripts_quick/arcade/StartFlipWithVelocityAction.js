// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class StartFlipWithVelocityAction extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    flipH = false;
    flipV = false;
    facingLeft = false;
    facingTop = false;
    /* START-USER-CODE */
    _flipping = false;
    _targetObject;
    execute(...args) {
        this._targetObject = this.getActionTargetObject(args);
        this._flipping = true;
    }
    update() {
        if (!this._targetObject || !this._flipping || !this._targetObject.body) {
            return;
        }
        const { x, y } = this._targetObject.body.velocity;
        if (this.flipH && x !== 0) {
            if (this.facingLeft) {
                this._targetObject.flipX = x > 0;
            }
            else {
                this._targetObject.flipX = x < 0;
            }
        }
        if (this.flipV && y !== 0) {
            if (this.facingTop) {
                this._targetObject.flipY = y > 0;
            }
            else {
                this._targetObject.flipY = y < 0;
            }
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
