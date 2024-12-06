// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
import { ActionTargetComp } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class GetGameObjectFromBodyActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        // this (components)
        const thisActionTargetComp = new ActionTargetComp(this);
        thisActionTargetComp.target = "ARG_1";
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        let result;
        if (obj instanceof Phaser.GameObjects.GameObject) {
            result = obj;
        }
        else if (obj instanceof Phaser.Physics.Arcade.Body) {
            result = obj.gameObject;
        }
        if (result) {
            this.executeChildren(result);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
