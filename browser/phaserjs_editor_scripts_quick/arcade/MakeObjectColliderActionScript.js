// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class MakeObjectColliderActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    collideWith;
    overlapOnly = false;
    /* START-USER-CODE */
    execute(...args) {
        if (this.collideWith) {
            const actionObj = this.getActionTargetObject(args);
            const obj1 = this.getCollidingObject(actionObj);
            const obj2 = this.getCollidingObject(this.collideWith);
            if (this.overlapOnly) {
                this.scene.physics.add.overlap(obj1, obj2, this.onCollide, undefined, this);
            }
            else {
                this.scene.physics.add.collider(obj1, obj2, this.onCollide, undefined, this);
            }
        }
    }
    onCollide(obj1, obj2) {
        this.executeChildren(obj1, obj2);
    }
    getCollidingObject(obj) {
        if (obj instanceof Phaser.GameObjects.Container
            || obj instanceof Phaser.GameObjects.Layer) {
            obj = obj.list;
        }
        return obj;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
